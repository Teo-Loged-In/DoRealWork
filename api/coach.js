// DoRealWork – Serverless AI-Proxy (Vercel)
// Hält den ANTHROPIC_API_KEY geheim und leitet Anfragen an Claude weiter.
// Das Frontend ruft POST /api/coach mit { type, ...payload } auf.

const MODEL = "claude-sonnet-5"; // schnell & günstig; für tiefere Insights: "claude-opus-4-8"

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }
  const key = process.env.ANTHROPIC_API_KEY;
  if (!key) {
    // Kein Key konfiguriert -> Frontend nutzt seinen lokalen Fallback.
    return res.status(200).json({ ok: false, reason: "no_api_key" });
  }

  try {
    const { type, payload } = req.body || {};
    const { system, user } = buildPrompt(type, payload);

    const r = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": key,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: 1024,
        system,
        messages: [{ role: "user", content: user }],
      }),
    });

    if (!r.ok) {
      const t = await r.text();
      return res.status(200).json({ ok: false, reason: "api_error", detail: t });
    }

    const data = await r.json();
    let text = (data.content && data.content[0] && data.content[0].text) || "";
    // Claude gibt JSON zurück -> robust parsen (falls in ```json``` verpackt)
    const parsed = safeParseJson(text);
    return res.status(200).json({ ok: true, result: parsed ?? { raw: text } });
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

function buildPrompt(type, p = {}) {
  if (type === "plan") {
    const system =
      "Du bist der Fokus-Coach der App DoRealWork. Du trainierst Fokus, statt ihn nur zu tracken, " +
      "und schützt den Nutzer vor Burnout. Du planst den Tag in konzentrierte 'Deep-Work'-Blöcke. " +
      "Regeln: (1) Blockgröße an die aktuelle Fokus-Kapazität des Nutzers anpassen, " +
      "(2) niemals länger als kapazität+10 Min ohne Pause, " +
      "(3) den härtesten/wichtigsten Block auf das Energie-Hoch legen, " +
      "(4) wenn die Brain-Battery niedrig ist (<35), kürzere Blöcke + mehr Erholung, " +
      "(5) nach jedem Block eine passende kurze Erholung. " +
      "Antworte AUSSCHLIESSLICH mit JSON in diesem Schema: " +
      '{"coachNote": string (max 2 Sätze, motivierend, konkret, Du-Form), ' +
      '"blocks": [{"title": string, "minutes": number, "type": "deep"|"admin"|"creative"|"learning", ' +
      '"why": string (max 12 Wörter, warum jetzt/so)}]}';
    const user =
      `Profil: Ziel="${p.goal}", Chronotyp=${p.chronotype}, größte Ablenkung=${p.distraction}, ` +
      `aktuelle Fokus-Kapazität=${p.baselineMinutes} Min. ` +
      `Brain-Battery jetzt: ${p.battery}/100. Tageszeit: ${p.timeOfDay}. ` +
      `Aufgaben (Freitext): "${p.tasks}". ` +
      `Erstelle 2-5 Fokus-Blöcke plus Erholung dazwischen.`;
    return { system, user };
  }

  if (type === "debrief") {
    const system =
      "Du bist der Fokus-Coach von DoRealWork. Du analysierst eine gerade beendete Fokus-Session " +
      "und den bisherigen Verlauf, um den Nutzer beim TRAINIEREN seines Fokus zu helfen. " +
      "Sei ehrlich, spezifisch und ermutigend (Du-Form). Finde EIN Muster und gib EINE konkrete Anpassung für morgen. " +
      "Antworte AUSSCHLIESSLICH mit JSON: " +
      '{"insight": string (1-2 Sätze, das erkannte Muster), ' +
      '"adjustment": string (1 konkrete, umsetzbare Änderung für morgen), ' +
      '"encouragement": string (kurz, aufrichtig)}';
    const user =
      `Session: geplant ${p.planned} Min, geschafft ${p.actual} Min, ` +
      `Fokus-Bewertung ${p.rating}/5, Ablenkungen: ${JSON.stringify(p.distractions)}. ` +
      `Häufigste Ablenkung insgesamt: ${p.topDistraction}. ` +
      `Verlauf letzte Tage: ${JSON.stringify(p.history)}. ` +
      `Profil-Ablenkung: ${p.profileDistraction}.`;
    return { system, user };
  }

  // Fallback-Typ
  return {
    system: "Antworte mit JSON {\"message\": string}.",
    user: JSON.stringify(p),
  };
}
