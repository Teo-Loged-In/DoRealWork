# Progress 02 – Kickoff & Setup

**Datum:** 2026-07-24
**Ziel des Prompts:** Die 3 offenen Fragen klären (API-Key, GitHub, Name) und Setup starten.

## Was gemacht wurde

1. **Name final:** **DoRealWork** (statt „LockedIn"). Klarer, aktiver, meme-tauglich.

2. **Umgebung geprüft:**
   - ✅ Git 2.55.0 vorhanden
   - ❌ Node.js / npm / Vercel-CLI / GitHub-CLI nicht vorhanden
   - **Folge:** Tech vereinfacht → App als **eine statische HTML-Datei** (React via CDN, kein Build),
     Deploy über **Vercel Cloud-Build** (kein lokales Node nötig).

3. **GitHub-CLI installiert:** via `winget` → `gh` v2.96.0. (Login durch Nutzer noch offen.)

4. **Ordnerstruktur angelegt:** `README.md` (Master), `docs/challenge-brief.md`, `docs/progress/`.

## Offene To-Dos für den Nutzer

- [ ] **GitHub-Login:** neues Terminal → `gh auth login` → GitHub.com → HTTPS → Web-Browser.
- [ ] **Claude API-Key:** console.anthropic.com → Billing (5 $ Credits) → API Keys → Create Key → kopieren.

## Nächste Schritte (nach Erledigung der To-Dos)

- Plan-Modus verlassen, App-Gerüst (statische HTML/React-Datei) bauen.
- GitHub-Repo `DoRealWork` anlegen + ersten Push.
- Früh auf Vercel deployen, damit der Live-Link von Anfang an steht.
