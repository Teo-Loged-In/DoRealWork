# Progress 09 – Multi-Ziel mit Tabs, Abhaken & Reward

**Datum:** 2026-07-26
**Ziel des Prompts:** Mehrere Ziele als Chrome-artige Tabs; jedes Ziel eigener Bereich; Ziel abhaken → Reward + Liste erledigter Ziele.

## Was gebaut wurde
- **Multi-Ziel-Architektur:** Statt einem Einzel-Profil gibt es jetzt `drw_goals` (Array von Ziel-Workspaces).
  Jedes Ziel hat **eigenes** Profil, Coach/Methoden, Fokus-State (Battery/Blöcke/Journal) und Chat-Verlauf.
- **Auto-Migration:** Bestehende Einzel-Ziel-Daten (`drw_profile/coach/state/assistant`) werden beim ersten
  Laden automatisch in ein Ziel überführt — kein Datenverlust.
- **Ziel-Tabs oben (Chrome-artig):** Leiste mit einem Tab pro aktivem Ziel (Icon je Domäne + Kurztitel),
  Wechsel per Klick, **„＋"-Button** für ein neues Ziel, **„🏆 n"** für erreichte Ziele.
- **Neues Ziel = Starter-Onboarding erneut:** „＋" öffnet das Onboarding (mit „Abbrechen"); nach den Fragen
  entsteht ein neuer Tab mit eigenem Coaching (Name kommt automatisch vom Account).
- **Ziel erreicht:** Button „✓ Ziel erreicht" im Dashboard → Bestätigung → Ziel wird abgehakt, wandert in die
  Liste **erreichter Ziele** (Haken), aktiver Tab wechselt automatisch weiter.
- **Reward:** Beim Abhaken erscheint ein **Belohnungs-Modal** (Rex feiert, Titel steigert sich: „Erster
  Meilenstein" → … → „🦖 Apex Predator"). Titel/Emoji bleiben in der 🏆-Liste sichtbar.
- **GoalsHub:** Übersicht erreichter Ziele (mit Datum & Reward); Ziele lassen sich „wieder öffnen".

## Technisch
- App refaktoriert: `profile/coach/state/assistant` sind jetzt vom aktiven Ziel abgeleitet; Wrapper-Setter
  schreiben in das aktive Ziel — alle Kind-Komponenten unverändert.
- Tageswechsel-Logik (`rollDailyState`) pro Ziel beim Laden angewendet.

## Getestet
- Voller Flow im Browser durchgespielt: Signup → 2 Tabs mit je eigenem Coaching → Ziel abhaken →
  Ziel „done" + Reward gespeichert + 🏆-Liste. Keine Konsolenfehler.

## Status
- Nach `main` gepusht → GitHub Pages aktualisiert. Live-KI weiterhin via Vercel (nächster Schritt).
