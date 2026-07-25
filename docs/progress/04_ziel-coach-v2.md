# Progress 04 – Umbau zum Ziel-Coach (v2)

**Datum:** 2026-07-25
**Ziel des Prompts:** DoRealWork von reinem Fokus-Tool zum vollen KI-Ziel-Coach erweitern (User-Vision).

## Was gebaut wurde

1. **Neues Onboarding** (3 Kernfragen + 2 Fokus-Fragen):
   Störfaktor → Ziel → Hindernis → Energie-Peak → Fokus-Kapazität.
2. **Dashboard „Ziel & Methoden":**
   - KI generiert **die schnellsten Methoden** zum Ziel (min. 3, bis 6) als **anklickbare Karten**.
   - **Hindernis-Hilfe**: konkrete Tipps zum genannten Blocker.
   - Kurz-Intro „schnellster Weg zum Ziel".
3. **Methoden-Detail (Coaching):**
   - **Fahrplan** „So gehst du es an" (KI-Schritte + Startfragen).
   - **📸 Kamera/Foto-Analyse**: bei Fitness = Form-Check der Übung; sonst Foto-Analyse (z. B. Mahlzeit).
     Bild → Claude Vision (Live-KI) → Feedback. Foto per `input capture` (Handy-Kamera).
   - **💬 Coaching-Chat pro Methode** (adaptive Q&A, kennt Ziel + Methode).
4. **Permanenter KI-Assistent (linke Leiste):**
   - Desktop: feste Sidebar mit Chat. Mobile: eigener „Coach"-Tab in der Bottom-Nav.
   - Kontext-bewusst (Ziel, Störfaktor, Hindernis, Fokus-Status). Quick-Prompts.
5. **KI-Proxy erweitert** (`api/coach.js`): neue Typen `methods`, `approach`, `chat`, `formcheck`
   (inkl. Bild-Upload an Claude) – zusätzlich zu `plan`/`debrief`. Alles mit lokalem Fallback.
6. **Fokus-Modus & Insights** bleiben als eigene Bereiche erhalten.

## Architektur

- Responsive App-Shell: Sidebar (Nav + Assistent) links auf Desktop; Bottom-Nav + Coach-Tab auf Mobile.
- Speicherung sauber getrennt: `drw_profile`, `drw_coach` (methods/approaches/threads/captures),
  `drw_assistant`, `drw_state` (Fokus). Alles in localStorage.

## Live getestet (auf GitHub Pages)

✅ Onboarding (neue Felder gespeichert) · ✅ Fitness-Methoden erkannt & generiert · ✅ Hindernis-Hilfe ·
✅ Methoden-Detail (Fahrplan, Form-Check-Label, Startfragen) · ✅ Assistent-Chat (User+Antwort) ·
✅ Navigation Fokus/Fortschritt/Dashboard.

## Wichtig / Nächster Schritt

- Aktuell läuft alles im **Offline-Fallback** (regelbasiert). Der eigentliche Mehrwert
  (echte Methoden, Ernährungs-/Startup-Analyse, Foto-Form-Check, Assistent) **braucht die Live-KI**.
- **Nächster Schritt: Vercel-Deploy + `ANTHROPIC_API_KEY`** → dann ist alles „echt".
- Danach: Pitch aufnehmen, Feinschliff.

## Live-Links
- App: https://teo-loged-in.github.io/DoRealWork/
- Repo: https://github.com/Teo-Loged-In/DoRealWork
