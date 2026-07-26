# Progress 07 – Fokus-Journal & Datei-Anhang im Chat

**Datum:** 2026-07-26
**Ziel des Prompts:** (1) Fokus-Verlauf mit Notizen, (2) Datei-/Foto-Anhang im KI-Chat.

## Was gebaut wurde

### 1. Fokus-Journal mit Notizen
- Jeder erledigte Task wird als **Journal-Eintrag** gespeichert (`state.log`, **tageübergreifend**, max 200).
- Eintrag zeigt **Datum, Uhrzeit, Dauer (geschafft/geplant), Bewertung (★), Anzahl Ablenkungen**.
- **Aufklappbar** mit **eigenem Notizfeld** („Was hast du gemacht?…") — Notizen werden gespeichert.
- Bewertung aus dem Debrief wird jetzt **persistent** in den Journal-Eintrag geschrieben (`onRate`).
- Anzeige im **Fokus-Bereich** als „📓 Verlauf & Notizen".

### 2. Datei-/Foto-Anhang im Chat (Plus-Button links)
- Im Assistenten-Chat links neben der Nachricht ein **„＋"** → Datei-Dialog (`image/*, .pdf, .txt, .md, .csv, .json`).
- **Bilder** → als Vision-Anhang direkt an Claude (Form-Check, Mahlzeit, Screenshot einer Seite).
- **PDF** → Text wird clientseitig via **pdf.js** (CDN, lazy) extrahiert (bis 30 Seiten).
- **Text-Dateien** → Inhalt wird eingelesen und in den Prompt eingebettet.
- **Anhang-Chips** über dem Eingabefeld (entfernbar); Ladeindikator beim Einlesen.
- KI-Prompt erweitert: bei angehängten Materialien **klare Zusammenfassung** (Kernpunkte, Lernhilfe).
- Speicherfreundlich: im Chatverlauf (localStorage) werden **nur die Datei-Namen** als Chips gespeichert,
  kein base64 → keine Quota-Probleme.

## Technisch
- Backend `api/coach.js` `chat`-Typ nimmt jetzt `attachments` (Bilder) an und hängt sie an die letzte
  User-Nachricht (Claude Vision). Bild-Analyse braucht die **Live-KI** (Vercel) — Offline gibt es nur Text-Antworten.
- Getestet: kompiliert fehlerfrei (frische Kopie, keine Konsolenfehler), App rendert.

## Offen
- Bild-/Datei-Analyse voll nutzbar erst mit **Live-KI (Vercel + `ANTHROPIC_API_KEY`)** — siehe `docs/SETUP_VERCEL.md`.
