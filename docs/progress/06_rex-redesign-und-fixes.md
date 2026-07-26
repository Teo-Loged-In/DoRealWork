# Progress 06 – Grün-Redesign, Maskottchen „Rex" & Kernfixes

**Datum:** 2026-07-26 (Abgabetag)
**Ziel des Prompts:** KI-Feature reparieren/online, Abo-Bug fixen, grünes Design, Dino-Maskottchen,
freier Timer, KI-Plan mit Pausen, Kalender-Export, Benachrichtigungen.

## Was gebaut wurde

1. **Dunkelgrünes, professionelles Farbschema** (Natur, nicht kindisch):
   Alle violetten Akzente → Emerald/Grün/Lime; neue Gradients, Ambient-Glow, Scrollbar, Body-BG.
2. **Maskottchen „Rex"** (Dino): eigenes Inline-SVG (freundlich, aber seriös), mit Blinzel-/Bob-Animation.
   Sitzt in der Marke (Sidebar) und in der Paywall; „mit Rex · Dein Ziel-Coach" als roter Faden.
   Coach-Hinweise & Benachrichtigungen sprechen als „Rex".
3. **Abo-Bug behoben (Kern-Beschwerde):** Trial-Ende und Kündigen **sperren die App nicht mehr**.
   Neuer Status `free` = Gratis-Version voll nutzbar. Die Paywall ist jetzt ein **schließbares Overlay**
   (X oben rechts, Klick außerhalb, „Später – gratis weiter nutzen"). Kündigen → zurück zur Gratis-Version.
4. **Freier Timer:** selbst einstellbar (Presets 15–120 + freies Zahlenfeld bis 600 Min) **plus ∞-Stoppuhr**
   (zählt hoch, kein Limit). Kein fixes „55 Min" mehr. Session unterstützt Countdown UND Stoppuhr.
5. **KI-Tagesplan mit echten Pausen:** Offline-Fallback und KI-Prompt planen nach jedem Fokusblock eine
   Pause ein (Wasser/Klo/Screen-Pause), nach ~2 Blöcken längere Essens-Pause. Prioritäten via „!".
   KI gibt `overflow` zurück = Aufgaben, die heute nicht reinpassen → für den Kalender.
6. **Kalender-Export (.ics):** Blöcke/Overflow als `.ics` exportierbar → Import in **Apple/Google Kalender**
   (echter OAuth-Sync ist ein späterer Schritt, in der Zeit nicht machbar).
7. **Benachrichtigungen:** Web-Notification-API; aktivierbar im Fokus-Bereich; meldet Planungs- & Block-Ende.
8. **Vercel-Anleitung** (`docs/SETUP_VERCEL.md`): Schritt-für-Schritt, um die **echte Live-KI** zu aktivieren
   (Anthropic-Key + Vercel-Env-Var). GitHub Pages kann die KI-Funktion prinzipbedingt nicht ausführen.

## Technisch
- Alles weiterhin in **einer** `index.html` (React via CDN, kein Build) + `api/coach.js` (Serverless).
- Getestet: App kompiliert fehlerfrei (Babel), React mountet, keine Konsolenfehler.

## Offen / Nächste Schritte
- **Vercel-Deploy + `ANTHROPIC_API_KEY`** durch Nutzer → schaltet Live-KI frei (Anleitung liegt bei).
- Optional später: nativer Apple/Google-Kalender-Sync (OAuth), echtes Handy-Push, Stripe-Zahlung.

## Live-Links
- App (Offline-KI): https://teo-loged-in.github.io/DoRealWork/
- Live-KI: (Vercel-URL nach Deploy eintragen)
- Repo: https://github.com/Teo-Loged-In/DoRealWork
