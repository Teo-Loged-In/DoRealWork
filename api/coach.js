// DoRealWork – Serverless AI-Proxy (Vercel)
// Hält den ANTHROPIC_API_KEY geheim und leitet Anfragen an Claude weiter.
// Frontend ruft POST /api/coach mit { type, payload } auf.

const MODEL = "claude-sonnet-5"; // schnell & bildfähig; für tiefere Analysen ggf. "claude-opus-4-8"

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const key = process.env.ANTHROPIC_API_KEY;
  if (!key) return res.status(200).json({ ok: false, reason: "no_api_key" });

  try {
    const { type, payload } = req.body || {};
    const built = buildRequest(type, payload || {});

    const r = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": key,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: built.maxTokens || 1200,
        system: built.system,
        messages: built.messages,
      }),
    });

    if (!r.ok) {
      const t = await r.text();
      return res.status(200).json({ ok: false, reason: "api_error", detail: t });
    }

    const data = await r.json();
    const text = (data.content && data.content[0] && data.content[0].text) || "";

    if (built.expectJson) {
      const parsed = safeParseJson(text);
      return res.status(200).json({ ok: true, result: parsed ?? { raw: text } });
    }
    return res.status(200).json({ ok: true, result: { text } });
  } catch (e) {
    return res.status(200).json({ ok: false, reason: "exception", detail: String(e) });
  }
}

function safeParseJson(text) {
  if (!text) return null;
  try { return JSON.parse(text); } catch (_) {}
  const m = text.match(/```(?:json)?\s*([\s\S]*?)```/);
  if (m) { try { return JSON.parse(m[1]); } catch (_) {} }
  const s = text.indexOf("{"); const e = text.lastIndexOf("}");
  if (s !== -1 && e !== -1) { try { return JSON.parse(text.slice(s, e + 1)); } catch (_) {} }
  return null;
}

const COACH_PERSONA =
  "Du bist der persönliche Coach der App DoRealWork. Du hilfst dem Nutzer, sein Ziel so schnell und " +
  "effektiv wie möglich zu erreichen, und ihn dabei 'locked in' zu halten, ohne auszubrennen. " +
  "Du sprichst Deutsch, per Du, direkt, konkret, motivierend und ehrlich. Keine Floskeln, kein Blabla — " +
  "immer umsetzbare Schritte. Wenn dir Infos fehlen, stellst du gezielte Rückfragen.";

function ctxLine(p) {
  return `Kontext des Nutzers: Ziel="${p.goal || "?"}". Größter Störfaktor="${p.stoerfaktor || "?"}". ` +
    `Hindernis zum Ziel="${p.hindernis || "?"}".`;
}

function buildRequest(type, p) {
  // ---- Methoden zum Ziel generieren ----
  if (type === "methods") {
    const system = COACH_PERSONA + " Antworte AUSSCHLIESSLICH mit JSON.";
    const user =
      `${ctxLine(p)}\n\n` +
      "Nenne die besten Wege/Methoden, um dieses Ziel am schnellsten & effektivsten zu erreichen. " +
      "Mindestens 3, mehr wenn sinnvoll (max 6). Jede Methode ist ein Hebel mit größtem Effekt. " +
      "Gib außerdem eine kurze, konkrete Hilfe zum genannten Hindernis. " +
      "JSON-Schema: {" +
      '"intro": string (1-2 Sätze, was der schnellste Weg zum Ziel ist), ' +
      '"methods": [{"icon": string (ein Emoji), "title": string (kurz), "summary": string (1 Satz, warum dieser Hebel wirkt)}], ' +
      '"blockerHelp": string (2-3 konkrete Tipps, wie man das Hindernis überwindet)}';
    return { system, messages: [{ role: "user", content: user }], expectJson: true };
  }

  // ---- Detail-Herangehensweise für EINE Methode ----
  if (type === "approach") {
    const system = COACH_PERSONA + " Antworte AUSSCHLIESSLICH mit JSON.";
    const user =
      `${ctxLine(p)}\n\nDie gewählte Methode lautet: "${p.method}".\n` +
      "Erkläre konkret, wie man diese Methode am besten angeht — als klare Schrittfolge. " +
      "Stelle außerdem 2-3 gezielte Startfragen, deren Antworten du brauchst, um den Nutzer individuell zu coachen " +
      "(z. B. bei Ernährung: 'Was isst du an einem typischen Tag?'; bei Training: 'Trainierst du schon? Welcher Split?'). " +
      'JSON: {"steps": [{"title": string, "detail": string}], "firstQuestions": [string]}';
    return { system, messages: [{ role: "user", content: user }], expectJson: true };
  }

  // ---- Freier Coaching-Chat (Assistent ODER Methoden-Thread) ----
  if (type === "chat") {
    let system = COACH_PERSONA + "\n" + ctxLine(p);
    if (p.method) system += `\nIhr arbeitet gerade an der Methode: "${p.method}". Bleibe fokussiert darauf.`;
    if (p.focusSummary) system += `\nFokus-Status heute: ${p.focusSummary}`;
    system +=
      "\nAntworte hilfreich und kompakt. Wenn der Nutzer z. B. seine Ernährung/sein Training nennt, " +
      "sag klar was gut/schlecht ist und wie man es verbessert, nenne konkrete Lebensmittel/Übungen. " +
      "Wenn Kaufempfehlungen sinnvoll sind, frag nach Supermarkt (Edeka/Aldi/…) und Budget und schlage passende Produkte vor.";
    const messages = (p.messages || []).map(m => ({ role: m.role, content: m.content }));
    if (!messages.length) messages.push({ role: "user", content: "Leg los und hilf mir mit meinem Ziel." });
    return { system, messages, maxTokens: 900 };
  }

  // ---- Bild-Analyse (Form-Check / Mahlzeit-Foto) ----
  if (type === "formcheck") {
    const system = COACH_PERSONA +
      " Du bekommst ein Foto und analysierst es fachkundig. Bei einer Übung: bewerte die Ausführung " +
      "(was ist richtig, was ist falsch/riskant, was konkret verbessern). Bei einer Mahlzeit: schätze " +
      "grob Nährwerte und sag, was gut/schlecht ist und wie man es besser macht. Kurz, strukturiert, per Du.";
    const content = [];
    if (p.imageBase64 && p.mediaType) {
      content.push({ type: "image", source: { type: "base64", media_type: p.mediaType, data: p.imageBase64 } });
    }
    content.push({ type: "text", text: `${ctxLine(p)}\nKontext zum Bild: ${p.note || "(keiner)"} — bitte analysieren.` });
    return { system, messages: [{ role: "user", content }], maxTokens: 900 };
  }

  // ---- Fokus-Tagesplan ----
  if (type === "plan") {
    const system = COACH_PERSONA +
      " Du planst den Tag in konzentrierte Deep-Work-Blöcke. Regeln: Blockgröße an Fokus-Kapazität anpassen; " +
      "härtesten Block auf das Energie-Hoch; bei niedriger Brain-Battery (<35) kürzere Blöcke; nach jedem Block Erholung. " +
      "Antworte AUSSCHLIESSLICH mit JSON: " +
      '{"coachNote": string (max 2 Sätze), "blocks": [{"title": string, "minutes": number, "type": "deep"|"admin"|"creative"|"learning", "why": string}]}';
    const user =
      `${ctxLine(p)} Chronotyp=${p.chronotype}, Fokus-Kapazität=${p.baselineMinutes} Min, ` +
      `Brain-Battery=${p.battery}/100, Tageszeit=${p.timeOfDay}. Aufgaben: "${p.tasks}". Erstelle 2-5 Blöcke.`;
    return { system, messages: [{ role: "user", content: user }], expectJson: true };
  }

  // ---- Session-Debrief ----
  if (type === "debrief") {
    const system = COACH_PERSONA +
      " Analysiere die beendete Fokus-Session, finde EIN Muster, gib EINE konkrete Anpassung für morgen. " +
      'Antworte AUSSCHLIESSLICH mit JSON: {"insight": string, "adjustment": string, "encouragement": string}';
    const user =
      `Session: geplant ${p.planned} Min, geschafft ${p.actual} Min, Fokus ${p.rating}/5, ` +
      `Ablenkungen: ${JSON.stringify(p.distractions)}. Häufigste Ablenkung: ${p.topDistraction}. ` +
      `Verlauf: ${JSON.stringify(p.history)}.`;
    return { system, messages: [{ role: "user", content: user }], expectJson: true };
  }

  return { system: 'Antworte mit JSON {"message": string}.', messages: [{ role: "user", content: JSON.stringify(p) }], expectJson: true };
}
