# Progress 10 – Deploy-Fix, Version 1, Habits, Konto-Menü, Back-Pfeile

**Datum:** 2026-07-26

## 1. GitHub-Pages-Deploy repariert (Kernproblem!)
- **Symptom:** Live-Seite zeigte weiter die alte (lila) Version, obwohl `main` den neuen Code hatte.
- **Ursache:** Der GitHub-**Jekyll-Build schlug fehl** (`status: errored`). Jekyll interpretiert `index.html`
  und stolpert über die React-`style={{ ... }}` (doppelte `{{` = Liquid-Syntax).
- **Fix:** `.nojekyll` im Root → Jekyll aus, Dateien werden 1:1 ausgeliefert. Build seither **grün**.
- **Verifiziert live:** grün (emerald), Account-Screen, Multi-Ziel-Tabs vorhanden, 0× altes Lila.
- Pages-Quelle bleibt `main` / root. Jeder Push deployt jetzt automatisch.

## 2. „DoRealWork Version 1" gesichert
- Git-Tag **`v1.0`** + GitHub-Release „DoRealWork Version 1" (Source-Zip zum Download).
- Lokal jederzeit wiederherstellbar mit `git checkout v1.0`.

## 3. Routinen / Habits mit KI-Optimierung (neu)
- Nav-Punkt **„Routinen"**. Eintragen: Name, Was, Warum, Dauer.
- **„Von Rex optimieren lassen"** → zeigt **Jetzt vs. Optimiert ✨**, die konkreten Änderungen (markiert),
  **welche Produkte** helfen (mit Begründung) und **warum es besser** ist.
- Backend-Typ `habit` + Offline-Fallback. Getestet (Offline-Optimierung rendert vollständig).

## 4. Konto & Einstellungen
- **Avatar-Kreis oben** (Initialen des Namens) → öffnet „Konto & Einstellungen".
- Neue **Einstellungen-Sektion** (Grundgerüst: Benachrichtigungen aktiv; Sprache/Design als „folgt"-Platzhalter,
  bereit für spätere Optionen).

## 5. Zurück-Pfeile überall
- Wiederverwendbare **BackBar** (Pfeil oben links) in Fokus, Routinen, Fortschritt, Methoden-Detail, Konto.

## Bugfix
- `Focus` bekam `updateLog`/`onBack` nicht als Prop → Journal-Notiz-Speichern hätte gehakt; behoben.

## Offen / Nächster großer Block
- **Internationalisierung (i18n):** Sprachauswahl als erster Screen (Endonyme, alphabetisch), komplette
  App-Übersetzung (kein Misch-Deutsch) + KI antwortet in der gewählten Sprache. Das ist ein großer eigener
  Umbau (jeder Text der App) — als nächster fokussierter Schritt geplant.
- Live-KI (Vercel + `ANTHROPIC_API_KEY`) weiterhin offen (Anleitung: `docs/SETUP_VERCEL.md`).
