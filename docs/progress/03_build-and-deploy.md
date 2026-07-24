# Progress 03 – App-Bau, Deploy & Live-Test

**Datum:** 2026-07-24
**Ziel des Prompts:** GitHub verbinden, App bauen, live schalten, testen.

## Was gemacht wurde

1. **GitHub verbunden:** `gh auth login` (Web-Flow) → eingeloggt als `Teo-Loged-In`.
   - Commits auf GitHub-noreply-E-Mail umgestellt (Push wurde sonst wegen E-Mail-Schutz abgelehnt).
2. **Repo erstellt & gepusht:** https://github.com/Teo-Loged-In/DoRealWork (public).
3. **App v1 gebaut** (`index.html`, eine Datei):
   - React via CDN, Tailwind via CDN, kein Build-Schritt.
   - Screens: Onboarding · Home/Today · Locked-in-Session · Recovery · Debrief · Insights.
   - **Brain Battery**-Modell (ohne Wearable, aus Schlaf + Deep-Work-Last + Erholung).
   - **KI-Anbindung** via `/api/coach` (Serverless-Proxy) **mit lokalem Fallback** → App funktioniert IMMER.
4. **Serverless-Proxy** (`api/coach.js`) für den geheimen Claude-API-Key (für spätere Vercel-Deployment).
5. **Live geschaltet über GitHub Pages:** https://teo-loged-in.github.io/DoRealWork/
6. **Bug gefunden & gefixt:** Babels neuer JSX-Transform injizierte `import`-Statements → App rendert nicht.
   Lösung: App-Code selbst mit klassischem JSX-Runtime kompilieren (`runtime: 'classic'`) + Fehleranzeige.
7. **Kompletter Flow live getestet** (im Browser durchgeklickt) — alles funktioniert:
   Onboarding → Battery-Kalibrierung → 4-Block-Plan mit Typ-Erkennung → Session + Ablenkungs-Log →
   Recovery (+Battery) → Debrief-Muster-Analyse → Insights (Streak, Chart, Fokus-Leaks).

## Live-Links

- **App (Live):** https://teo-loged-in.github.io/DoRealWork/
- **Code:** https://github.com/Teo-Loged-In/DoRealWork

## Offen / Nächste Schritte

- [ ] **Claude API-Key** besorgen (console.anthropic.com).
- [ ] **Vercel-Deploy** für die *echte* Live-KI (GitHub-Repo verbinden + `ANTHROPIC_API_KEY` als Env-Var).
      Danach ist die KI-Planung/-Analyse nicht mehr „Offline", sondern echt.
- [ ] Feinschliff/Design-Polish, ggf. Sound/Fokus-Musik, Demo-Daten.
- [ ] 2-Minuten-Pitch aufnehmen + einreichen (Deadline So 18:00 DE).
