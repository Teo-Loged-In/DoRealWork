# DoRealWork 🦖 — Dein KI-Ziel-Coach

**Sag dein Ziel. Rex, dein Dino-Coach, zeigt dir den schnellsten Weg, coacht dich in jeder Disziplin
und hält dich „locked in" — ohne dass du ausbrennst.**

Eingereicht für die **TKS Prompt to Product Challenge** (72h-KI-Build-Challenge).
Live: **https://teo-loged-in.github.io/DoRealWork/** · Repo: **https://github.com/Teo-Loged-In/DoRealWork**

---

## 1. Die Vision — warum es DoRealWork gibt

Die meisten Menschen scheitern nicht an fehlenden Zielen, sondern an der **Lücke zwischen Ziel und
täglichem Handeln**. Sie wissen *was* sie wollen („1,0-Abi", „ein Startup", „ein besserer Körper"),
aber nicht *wie* sie da hinkommen — und selbst wenn sie es wissen, zieht der Alltag sie raus:
Handy, Prokrastination, Überforderung, Burnout.

Klassische Produktivitäts-Apps **tracken** nur (Häkchen, Statistiken, Streaks) und lassen dich mit dem
„Wie" allein. **DoRealWork denkt für dich mit.** Es ist kein Tracker, sondern ein **Coach**:

> **Kernprinzip: Ein Coach, der für dich denkt — trainiert statt trackt.**

Rex nimmt dir die mentale Last ab: Er findet die Methoden, baut den Plan, beantwortet deine Fragen,
analysiert deine Fotos/Materialien, optimiert deine Routinen und passt sich dir an — bis dein Alltag
automatisch auf dein Ziel einzahlt.

## 2. Für wen

Für ambitionierte Menschen (Schüler, Studierende, Gründer, Sportler, Kreative), die **ein echtes Ziel
haben und es wirklich erreichen wollen** — egal in welcher Disziplin. Die App ist bewusst
**disziplin-agnostisch**: dasselbe System funktioniert für Lernen, Fitness, Business, Gesundheit.

## 3. Wie sich die App anfühlen soll (Wirkung & Ton)

- **Professionell, ruhig, hochwertig** — nie kindisch, nie verspielt-überladen. Ein Werkzeug, das man
  ernst nimmt, weil es einen ernst nimmt.
- **Naturnahes, dunkelgrünes Design** (Emerald/Lime auf tiefem Grün-Schwarz): fokussiert, erwachsen,
  „grün = Wachstum". Klare Typografie (Inter), viel Ruhe, dezente Glas-/Blur-Flächen, sanfte Animationen.
- **Rex, das Maskottchen**, ist der emotionale rote Faden: ein freundlicher, aber seriöser Dino, der
  blinzelt und leicht wippt. Er macht die App nahbar und menschlich, ohne albern zu sein. Rex begrüßt
  dich mit Namen, feiert deine Erfolge und ist als Coach immer präsent.
- **Persönlich**: Die App spricht dich beim Namen an. Jede Person, jedes Ziel bekommt einen eigenen,
  individuell aussehenden Bereich. Es soll sich anfühlen wie *dein* Coach, nicht wie Software von der Stange.
- **Entlastend statt fordernd**: Nie das Gefühl „schon wieder eine To-do-Liste, die ich selbst pflegen
  muss". Die KI nimmt Arbeit ab. Der Nutzer sagt das Ziel — die App liefert den Weg.
- **Motivierend, ehrlich, direkt**: Rex redet Klartext, per Du, ohne Floskeln — immer umsetzbare Schritte,
  nie Blabla.

## 4. Was die App macht (Funktionsumfang)

### 4.1 Start & Onboarding
- **Onboarding** in wenigen Schritten: größter Störfaktor → Ziel → Hindernis → Energie-Peak (Chronotyp)
  → aktuelle Fokus-Kapazität. Danach kennt der Coach dich.
- **Account** (Name + E-Mail + Passwort): persönliche Ansprache, Fortschritt gesichert. Passwort wird
  gehasht gespeichert (Demo-Auth lokal; echtes Backend ist auf der Roadmap).
- **Abo-Flow**: 7 Tage gratis ohne Kreditkarte → danach optionales Pro. Die **Gratis-Version bleibt immer
  nutzbar** (keine Sperre); die Paywall ist ein schließbares Upgrade-Angebot.

### 4.2 Ziele als Tabs (wie Chrome)
- **Mehrere Ziele parallel**, jedes in einem eigenen Tab oben. Jeder Tab ist ein **kompletter, eigener
  Arbeitsbereich**: eigene Methoden, eigener Fokus/Journal, eigener Coaching-Chat.
- **Neues Ziel** per „＋" → Starter-Onboarding erneut → neuer Tab.
- **Ziel erreicht** abhaken → **Reward** (Rex feiert, steigernde Auszeichnungen) → Ziel wandert in die
  **Liste erreichter Ziele (🏆)**.

### 4.3 Methoden & Coaching
- Die KI generiert die **schnellsten Methoden** zum Ziel als anklickbare Karten.
- Pro Methode: **Fahrplan** (Schritt-für-Schritt), **Coaching-Chat** und **📸 Kamera-/Foto-Analyse**
  (z. B. Übungs-Form-Check, Mahlzeit-Analyse) via Claude Vision.

### 4.4 Fokus-Modus
- **KI-Tagesplan**: Aufgaben (mit Dauer & Priorität) rein → Rex baut Fokus-Blöcke **inklusive echter
  Pausen** (Wasser, Klo, Essen); Wichtiges zuerst, Blockgröße an die Kapazität angepasst.
- **Freier Timer**: frei einstellbar bis sehr lang **oder ∞-Stoppuhr**.
- **🔋 Brain Battery**: schützt vor Burnout — integriert Fokus & Erholung, ohne Wearable.
- **Fokus-Journal**: jeder erledigte Task mit Datum, Uhrzeit, Dauer, Bewertung + **eigenen Notizen**
  (tageübergreifend gespeichert).

### 4.5 Routinen / Habits
- Routine eintragen (Was, Warum, Dauer) → **„Von Rex optimieren lassen"**: zeigt **Jetzt vs. Optimiert**,
  die konkreten Änderungen, **welche Produkte** helfen und **warum** es besser ist.

### 4.6 Assistent, Kalender, Benachrichtigungen
- **Permanenter KI-Assistent** (Sidebar/Tab): jederzeit fragen — mit **Datei-/Foto-Anhang** (＋), der KI
  Materialien zusammenfasst (ideal beim Lernen).
- **Kalender-Export (.ics)** für Apple/Google; Aufgaben, die heute nicht passen, wandern in den Kalender.
- **Benachrichtigungen** (Browser) für Planung & Block-Ende.

## 5. Design-System (Kurzreferenz)
- Farbwelt: tiefes Grün-Schwarz (`#05100b`), Akzente Emerald (`#10b981`) → Lime (`#4d7c0f`).
- Schrift: **Inter**. Flächen: `glass` (Blur), abgerundete 2xl/3xl-Radien. Bewegungen: dezent (`floaty`,
  `fadeUp`, Rex blinzelt/wippt).
- Maskottchen **Rex**: Inline-SVG, überall als roter Faden.
- Grundhaltung: **professionell, ruhig, erwachsen — niemals kindisch.**

## 6. Technische Architektur
- **Frontend:** eine einzige `index.html` — React über CDN, JSX per Babel-Standalone, **kein Build-Schritt**.
- **Daten:** `localStorage` (kein Login-Zwang, läuft sofort über den Link). Wichtige Keys: `drw_goals`
  (alle Ziel-Workspaces), `drw_accounts`, `drw_authEmail`/`drw_authName`, `drw_habits`, `drw_sub`.
- **KI:** Claude API (`claude-sonnet-5` / für Tiefe `claude-opus-4-8`) über den Serverless-Proxy
  `api/coach.js` (hält den `ANTHROPIC_API_KEY` geheim). Jede KI-Funktion hat einen **Offline-Fallback**,
  damit die App nie abstürzt.
- **Deploy:** **GitHub Pages** aus `main` / root (Live-App). **`.nojekyll` ist zwingend** — sonst bricht
  der Jekyll-Build an Reacts `style={{ … }}`. Für die **echte Live-KI**: Vercel-Deploy + `ANTHROPIC_API_KEY`
  (siehe [docs/SETUP_VERCEL.md](docs/SETUP_VERCEL.md)).

## 7. Status & Roadmap
- 🟢 **Live & funktionsfähig** (GitHub Pages). Stabiler Stand als Release **`v1.0` „DoRealWork Version 1"**.
- 🟡 **Nächste große Blöcke:** echte Live-KI (Vercel), Internationalisierung (jede Sprache, komplette
  Übersetzung, KI in der gewählten Sprache), echte geräteübergreifende Accounts (Backend).

## 8. Bewertungskriterien der Challenge (worauf wir bauen)
Problem & Wirkung · Kreativität & Originalität · **Einsatz von KI & Prompting** · Produktumsetzung ·
Qualität des Pitches · Potenzial.

## 9. Weiterentwicklung über Nacht
Ein detaillierter, verbindlicher Arbeitsauftrag für autonome Nacht-Verbesserung (Claude Cowork) liegt in
**[docs/COWORK_NIGHT_BRIEF.md](docs/COWORK_NIGHT_BRIEF.md)** — inkl. Pflicht-Regeln, Verbesserungs-Backlog
und Review-Agenten-Struktur.

---
*Alle Prompts/Fortschritte sind in `docs/progress/` dokumentiert. Ordnerstruktur: `index.html` (App),
`api/coach.js` (KI-Proxy), `docs/` (Doku), `README.md` (diese Datei).*
