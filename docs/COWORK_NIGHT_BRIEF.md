# 🌙 Nacht-Auftrag für Claude Cowork — DoRealWork professionell machen

**An:** die autonome Claude-Cowork/Claude-Code-Session, die über Nacht an DoRealWork arbeitet.
**Ziel:** Die App über Nacht **spürbar besser, vollständiger und professioneller** machen —
**bis 08:00 Uhr morgens durchgehend weiterarbeiten**, in Schleifen aus Umsetzen → Überprüfen → Verbessern.

> Lies zuerst `README.md` (Vision, Wirkung, Funktionsumfang) und die letzten Einträge in
> `docs/progress/`. Der gesamte Code ist eine einzige `index.html` (React via CDN, JSX per Babel,
> **kein Build-Schritt**) plus `api/coach.js` (KI-Proxy). Live-Deploy: GitHub Pages aus `main`/root.

---

## A. PFLICHT-REGELN — müssen zu 100 % eingehalten werden

1. **Die App muss zu JEDEM Zeitpunkt lauffähig sein.** Niemals kaputten Code nach `main` pushen.
   Nach **jeder** Änderung prüfen, dass die App fehlerfrei kompiliert (siehe Abschnitt D „Verifikation").
2. **Nur in funktionierenden Zuständen committen & pushen.** Kleine, in sich abgeschlossene Commits mit
   klarer Nachricht. Bei Unsicherheit: erst verifizieren, dann pushen.
3. **`.nojekyll` im Root NIEMALS löschen.** Ohne sie schlägt der GitHub-Pages-Build fehl und die Live-App
   friert ein. Nach relevanten Pushes den Build prüfen:
   `gh api repos/Teo-Loged-In/DoRealWork/pages/builds/latest --jq '.status'` → muss `built` sein.
4. **Keine bestehende Funktion entfernen oder verschlechtern.** Nur hinzufügen/verbessern. Bestehende
   Nutzerdaten (localStorage-Keys, siehe README 6) und deren Migration müssen erhalten bleiben.
5. **Architektur beibehalten:** eine `index.html`, React über CDN, **kein Build-Tooling** einführen.
   Jede KI-Funktion behält ihren **Offline-Fallback** (App darf nie abstürzen, auch ohne API).
6. **Keine Secrets committen** (keine API-Keys in den Code). `.gitignore` respektieren.
7. **Design-Leitplanken:** dunkelgrün, professionell, ruhig — **niemals kindisch**. Rex bleibt der rote
   Faden. Keine grelle/verspielte Umgestaltung.
8. **Nichts Irreversibles/Öffentliches außerhalb dieses Repos.** Keine externen Dienste anbinden, keine
   Accounts erstellen, keine Zahlungen, keine E-Mails versenden. Nur am Code + Repo arbeiten.
9. **Fortschritt dokumentieren:** Für jede Arbeitsschleife einen kurzen Eintrag in `docs/progress/`
   (Nummer fortlaufend) anlegen — was geändert, warum, wie verifiziert.
10. **Bei echten Blockern** (z. B. etwas braucht den `ANTHROPIC_API_KEY` oder eine Nutzer-Entscheidung):
    NICHT raten und NICHT die App riskieren — im Progress-Log als „Offen für Teo" vermerken und mit der
    nächsten Aufgabe weitermachen.
11. **Urheberrecht respektieren (bei der Konkurrenz-Analyse):** Aus anderen Apps nur **Muster,
    Best-Practices und Ideen** ableiten — **niemals** Texte, Icons, Bilder, Marken, Code oder Design 1:1
    kopieren. Alles in DoRealWorks eigener Sprache, eigenem grünen Design und mit Rex neu umsetzen.
    Keine fremden Markennamen/Logos in die App bringen.

## PHASE 0 — ZUERST: Konkurrenz-Analyse → Verbesserungs-Datei → direkt umsetzen

**Bevor** du in die normale Schleife (B) gehst, führe diese Phase einmal ganz am Anfang der Nacht durch:

1. **Vergleichbare Apps analysieren.** Untersuche etablierte Apps in den Bereichen, die DoRealWork
   berührt: Ziel-/Habit-/Routine-Tracker, Fokus-/Deep-Work-Apps, KI-Coaching-/Produktivitäts-Apps,
   Lern-Apps. (Nutze Web-Recherche, falls Tools verfügbar; sonst dein fundiertes Wissen über bekannte,
   erfolgreiche Apps dieser Kategorien.) Schau auf: Funktionsumfang, Onboarding, UX-Muster, Monetarisierung,
   Gamification, Design-/Professionalitäts-Niveau, Retention-Mechaniken, was Nutzer daran lieben/kritisieren.
   **Nur Muster & Best-Practices ableiten — nichts kopieren** (siehe Pflicht-Regel 11).

2. **Vollständige Verbesserungs-Datei erstellen:** `docs/IMPROVEMENT_PROPOSALS.md`. Inhalt:
   - Kurzer Vergleich: Wo steht DoRealWork stark, wo haben andere Vorsprung?
   - Eine **priorisierte, konkrete Vorschlagsliste** (jeweils: Was, Warum/Nutzen, wie in DoRealWork
     umsetzen — passend zu grünem Design, Rex, No-Build-Architektur, Aufwand/Impact-Einschätzung).
   - Klar getrennt in: **sofort umsetzbar** (heute Nacht) vs. **größer/später**.
   - Alles muss zur Vision aus `README.md` passen und die Pflicht-Regeln (A) einhalten.

3. **Committen & pushen** (die Datei allein bricht nichts) mit Progress-Eintrag.

4. **Direkt danach umsetzen:** Arbeite die als „sofort umsetzbar" markierten Vorschläge aus
   `docs/IMPROVEMENT_PROPOSALS.md` **sofort** ab — in der normalen Schleife (B), höchster Nutzen zuerst.
   Behandle diese Vorschläge als **oberste Priorität**, noch vor dem allgemeinen Backlog (C).
   Hake jeden umgesetzten Vorschlag in der Datei ab (✅) und verifiziere wie in D beschrieben.

## B. ARBEITSWEISE — Schleifen bis 08:00 Uhr

Arbeite in **Iterationen** (je ~30–60 Min). Eine Iteration =
1. **Umsetzen:** die nächste Aufgabe aus dem Backlog (C), höchste Priorität zuerst.
2. **Selbst verifizieren** (Abschnitt D).
3. **Kontroll-Agenten drüberschauen lassen** (Abschnitt E).
4. **Nachbessern**, was die Agenten finden.
5. **Committen + pushen** (nur wenn grün) + Progress-Eintrag.

Danach sofort die nächste Iteration. **Nicht aufhören, bis es 08:00 Uhr ist** (oder das Backlog
vollständig + poliert ist). Immer den größten Nutzen bei geringstem Risiko zuerst.

## C. VERBESSERUNGS-BACKLOG (priorisiert)

> **Reihenfolge insgesamt:** (1) Phase 0 — Konkurrenz-Analyse + `IMPROVEMENT_PROPOSALS.md`, dann die dort
> als „sofort umsetzbar" markierten Vorschläge, (2) danach dieses P0/P1/P2-Backlog. Immer: höchster Nutzen
> bei geringstem Risiko zuerst.

### P0 — Stabilität, Praktikabilität, Politur (zuerst, geringes Risiko)
- **Voll-Durchlauf jeder Ansicht** (Onboarding → Account → Trial → Dashboard → Methode → Fokus → Timer →
  Debrief → Journal → Routinen → Fortschritt → Konto → Ziel abhaken/Reward → 🏆-Liste → neuer Tab).
  Jeden Bug fixen. Besonders prüfen: **Reward-Modal erscheint zuverlässig** beim Abhaken (auch wenn noch
  weitere Ziele offen sind).
- **localStorage-Robustheit:** Foto-/Kamera-Analysen und Anhänge dürfen den Speicher nicht sprengen
  (base64 nicht dauerhaft speichern; Quota abfangen; nie Datenverlust).
- **Leere-/Lade-/Fehler-Zustände** überall sauber (Spinner, hilfreiche Platzhaltertexte).
- **Mobile-Pass:** alles auf schmalen Screens testen (Tabs scrollbar, Bottom-Nav, keine Überläufe).
- **Barrierefreiheit:** sinnvolle `aria`-Labels, Tastatur-Bedienbarkeit, Fokus-Ringe, Kontraste.
- **Text-/Copy-Pass:** konsistent, professionell, motivierend, fehlerfrei.
- **Konsistenz:** Abstände, Radien, Button-Stile, Icon-Sprache vereinheitlichen (Design-System-Gefühl).

### P1 — Substanz & die großen Wünsche
- **Internationalisierung (i18n)** — SEHR sorgfältig, streng inkrementell:
  - Sprachauswahl als **allererster Screen** (vor dem Onboarding). Sprachen in ihrer **eigenen
    Schreibweise/Endonym** (z. B. „Deutsch", „Français", „Español", „العربية"), **alphabetisch** sortiert,
    durchsuchbar. Auswahl in `drw_lang` speichern; im Konto/Einstellungen änderbar.
  - `t(key)`-System einführen. **Vollständige** Übersetzungen mindestens für Deutsch + Englisch (kein
    Misch-Deutsch!). Weitere Sprachen inkrementell ergänzen. Solange eine Sprache nicht vollständig ist,
    sauber auf Englisch zurückfallen — **nie halb übersetzt/kaputt** auf `main`.
  - **KI in der gewählten Sprache:** `lang` an alle `askCoach`-Aufrufe geben; `api/coach.js`-Persona
    anweisen, in dieser Sprache zu antworten.
  - **Guardrail:** Deutsch bleibt Default; die App muss bei jedem Commit vollständig funktionieren.
- **Daten-Export/Import** (Backup aller localStorage-Daten als Datei; Wiederherstellen).
- **Routinen/Habits ausbauen:** Verlauf/Streak, Erinnerungen, „erledigt heute", Fortschritt über Zeit.
- **Kalender:** echte In-App-Kalenderansicht (Woche/Monat) zusätzlich zum `.ics`-Export; Deadlines
  rückwärts verplanen.
- **Fokus/Timer:** optionaler Sound/Alarm am Blockende, Pausen-Timer, „nächster Block automatisch".

### P2 — Reichweite & Feinschliff (wenn Zeit bleibt)
- **PWA:** installierbar (manifest + Icon mit Rex), Offline-Fähigkeit, verlässlichere Notifications.
- **Onboarding-/Landing-Politur** für den Pitch (erster Eindruck, Screenshots-freundlich).
- **Performance:** Babel-im-Browser-Warmstart minimieren (ohne den No-Build-Ansatz zu brechen).
- **Micro-Interaktionen:** dezente, hochwertige Animationen (kein Kitsch).

## D. VERIFIKATION (nach jeder Änderung Pflicht)
1. `index.html` in einen Browser laden und **Konsole prüfen: 0 Fehler** (JSX-Kompilierfehler = weiße Seite).
   Hinweis: Öffnet man die Datei als `file://`-Snapshot, wird Storage teils zurückgesetzt und der Cache
   kann alt sein — daher zur Prüfung eine **frische Kopie** unter neuem Namen laden.
2. Den geänderten Flow **klickend durchspielen** (nicht nur „sieht kompiliert aus").
3. Nach dem Push: `gh api repos/Teo-Loged-In/DoRealWork/pages/builds/latest --jq '.status + " @ " + .commit[0:7]'`
   → `built @ <neuer commit>`.

## E. KONTROLL-AGENTEN erstellen (Selbstüberprüfung)
Nach jeder Iteration **spezialisierte Review-Agenten spawnen**, die den aktuellen Stand kritisch prüfen
und konkrete, umsetzbare Findings zurückgeben. Der Haupt-Agent (Orchestrator) setzt die Findings dann um.
Mindestens diese Rollen:

1. **Praktikabilitäts-Agent (UX):** Ist die App wirklich praktisch? Wo entsteht Reibung/Verwirrung?
   Welche Klicks sind zu viel? Ist der Nutzen sofort klar? Konkrete Verbesserungen nennen.
2. **Vollständigkeits-Agent:** Was fehlt gemessen an der Vision (README)? Welche Funktion ist angefangen,
   aber nicht rund? Priorisierte Lückenliste.
3. **QA-/Bug-Agent:** Flows durchspielen, Bugs, Kanten-Fälle, Konsolenfehler, Datenverlust-Risiken finden.
4. **Design-/Professionalitäts-Agent:** Wirkt es hochwertig und erwachsen (nicht kindisch)? Konsistenz,
   Abstände, Farbnutzung, Rex-Integration, Politur.
5. **Benchmark-Agent (Konkurrenz):** Vergleicht den aktuellen Stand mit den in
   `docs/IMPROVEMENT_PROPOSALS.md` analysierten Best-Practices — was von den Vorschlägen fehlt noch,
   wo bleibt DoRealWork hinter dem Marktstandard zurück? Neue, konkrete Vorschläge in die Datei nachtragen.

Regeln für die Agenten: **nur verifizierte, konkrete Findings** (Datei/Stelle + Vorschlag), nach Schwere
sortiert. Der Orchestrator arbeitet die Findings ab, verifiziert, committet — und startet die nächste Runde.

## F. DEFINITION OF DONE (pro Aufgabe)
- Kompiliert fehlerfrei, Flow klickend geprüft, mobil ok, keine bestehende Funktion kaputt.
- Sauber committet + gepusht, Pages-Build `built`, Progress-Eintrag geschrieben.

## G. NICHT anfassen / NICHT tun
- `.nojekyll` nicht löschen. Deploy-Quelle (`main`/root) nicht ändern. Kein Build-Tooling einführen.
- Keine Secrets, keine externen Accounts/Dienste, keine Zahlungen/E-Mails, nichts außerhalb des Repos.
- Den stabilen Release-Stand `v1.0` nicht überschreiben (nur vorwärts entwickeln).

---
**Kurzfassung:** ZUERST vergleichbare Apps analysieren und daraus `docs/IMPROVEMENT_PROPOSALS.md`
erstellen, dann diese Vorschläge **direkt umsetzen**. Anschließend bis 08:00 Uhr in Schleifen
(Umsetzen → selbst verifizieren → Kontroll-Agenten inkl. Benchmark → nachbessern → grün committen) die
App besser & professioneller machen. Immer lauffähig halten, `.nojekyll` schützen, nichts kopieren,
nichts kaputt machen, jeden Schritt dokumentieren. Höchster Nutzen zuerst.
