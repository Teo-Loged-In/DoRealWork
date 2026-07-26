# 🟢 KI wirklich online schalten — Vercel-Setup (≈15 Min)

**Warum das nötig ist:** Die App ruft die KI über `/api/coach` auf. Das ist eine *Serverless-Funktion*.
**GitHub Pages kann so etwas NICHT ausführen** — deshalb läuft die App dort immer nur im Offline-Modus
(feste Texte). Auf **Vercel** läuft die Funktion echt → die KI ist live. Dein API-Key bleibt geheim.

---

## Schritt 1 — Anthropic API-Key holen (5 Min)
1. Gehe auf **https://console.anthropic.com** und logge dich ein (oder registriere dich).
2. Lade unter **Billing** ein kleines Guthaben auf (z. B. 5 $ reichen für die Challenge locker).
3. Öffne **API Keys → Create Key**, kopiere den Key (beginnt mit `sk-ant-…`).
   ⚠️ Diesen Key **niemals** in GitHub/Code schreiben — nur bei Vercel als Umgebungsvariable (Schritt 3).

## Schritt 2 — Projekt zu Vercel importieren (5 Min)
1. Gehe auf **https://vercel.com** → **Sign up** mit deinem **GitHub-Account**.
2. **Add New… → Project** → wähle dein Repo **`DoRealWork`** → **Import**.
3. Framework Preset: **Other** (kein Build nötig). Root: Standard lassen. **Deploy** klicken.

## Schritt 3 — API-Key als Umgebungsvariable setzen (WICHTIG)
1. Im Vercel-Projekt: **Settings → Environment Variables**.
2. Neue Variable:
   - **Name:** `ANTHROPIC_API_KEY`
   - **Value:** dein `sk-ant-…` Key
   - Environments: **Production, Preview, Development** ankreuzen.
3. **Save**. Dann **Deployments → … → Redeploy** (damit der Key aktiv wird).

## Schritt 4 — Testen
1. Öffne die Vercel-URL (z. B. `https://dorealwork.vercel.app`).
2. Onboarding durchklicken → im Fokus-Bereich „Meinen Tag planen" oder den Assistenten fragen.
3. Wenn beim Coach **kein** „(Offline)" mehr steht → **die Live-KI läuft.** 🎉

---

## Danach
- Trage den neuen Vercel-Link in die README + ins Einreichungsformular ein.
- Für tiefere Analysen kann in `api/coach.js` das Modell auf `claude-opus-4-8` umgestellt werden
  (Standard ist `claude-sonnet-5` — schnell & bildfähig).

## Häufige Stolpersteine
- **Immer noch „(Offline)"?** → Key-Name exakt `ANTHROPIC_API_KEY`? Nach dem Setzen **neu deployen**?
- **500/Fehler im Chat?** → Guthaben im Anthropic-Account aufgeladen?
- Die App funktioniert auch **ohne** Key weiter (Offline-Fallback) — sie stürzt nie ab.
