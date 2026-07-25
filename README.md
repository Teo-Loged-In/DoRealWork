# DoRealWork 🔒

**Der KI-Fokus-Coach, der deinen Fokus nicht misst, sondern trainiert – und dich stoppt, bevor du ausbrennst.**

Eingereicht für die **TKS Prompt to Product Challenge** (72h AI-Build-Challenge).
Abgabefrist: **So, 26. Juli 2026, 12:00 ET (18:00 DE)**.

---

## Was ist DoRealWork?

Ein **KI-Ziel-Coach**: Du sagst dein Ziel — die App zeigt dir die **schnellsten Methoden**, coacht
dich in jeder Disziplin (Schritt-für-Schritt, Chat, sogar **Form-Check per Kamera**) und hält dich
**locked in**, ohne dass du ausbrennst.

1. **Ziel & Methoden:** KI generiert die besten Hebel zum Ziel — jeder anklickbar mit eigenem Coaching.
2. **Methoden-Detail:** Fahrplan + adaptiver Coaching-Chat + 📸 Foto/Kamera-Analyse (z. B. Übungs-Form, Mahlzeit).
3. **Permanenter KI-Assistent** (linke Leiste): frag jederzeit „Was ist mein nächster Schritt?".
4. **Fokus-Modus:** adaptive Blöcke, Locked-in-Sessions, Debrief-Analyse.
5. **🔋 Brain Battery:** verhindert Burnout (Fokus + Erholung integriert, ohne Wearable).

> Kernprinzip: **Ein Coach, der für dich denkt — trainiert statt trackt.**

## Status

🟢 **LIVE & funktionsfähig:** https://teo-loged-in.github.io/DoRealWork/ (Offline-KI-Modus)
🟡 Nächster Schritt: Vercel-Deploy für echte Live-KI (Claude API). Siehe [Progress-Log](docs/progress/).

## Tech (geplant)

- **Frontend:** Single-Page-Web-App als eine statische HTML-Datei (React via CDN, kein Build-Schritt).
- **Daten:** localStorage (kein Login, läuft sofort über den Link).
- **KI:** Claude API (`claude-opus-4-8` / `claude-sonnet-5`) über einen Serverless-Proxy (Key bleibt geheim).
- **Deploy:** Vercel (Cloud-Build) + GitHub-Repo → öffentlicher HTTPS-Link.

## Ordnerstruktur

```
DoRealWork/
├── README.md                 <- diese Datei (Master-Übersicht)
├── docs/
│   ├── challenge-brief.md     <- die offiziellen Challenge-Vorgaben (gesichert)
│   └── progress/              <- ein Eintrag pro Prompt (Gedankenfluss & Fortschritt)
│       ├── 01_planning.md
│       └── 02_kickoff-setup.md
└── (App-Dateien folgen)
```

## Bewertungskriterien der Challenge (worauf wir bauen)

Problem & Wirkung · Kreativität & Originalität · **Einsatz von KI & Prompting** · Produktumsetzung · Qualität des Pitches · Potenzial
