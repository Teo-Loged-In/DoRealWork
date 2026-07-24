# DoRealWork 🔒

**Der KI-Fokus-Coach, der deinen Fokus nicht misst, sondern trainiert – und dich stoppt, bevor du ausbrennst.**

Eingereicht für die **TKS Prompt to Product Challenge** (72h AI-Build-Challenge).
Abgabefrist: **So, 26. Juli 2026, 12:00 ET (18:00 DE)**.

---

## Was ist DoRealWork?

Die meisten Fokus-Apps *blockieren Apps* oder zählen *dumme Timer* – sie **messen** Disziplin.
DoRealWork **denkt für dich**: ein persönlicher KI-Coach, der

1. deinen Tag in adaptive Fokus-Blöcke plant,
2. dich live durch die „Locked-in"-Session führt,
3. dich danach debrieft und aus deinen Ablenkungsmustern **lernt**,
4. und über die **🔋 Brain Battery** verhindert, dass du ausbrennst (Fokus + Erholung integriert, ohne Wearable).

> Kernprinzip: **Trainiert Fokus, statt ihn nur zu tracken.**

## Status

🟡 In Entwicklung – siehe [Progress-Log](docs/progress/) für den Fortschritt über alle Prompts hinweg.

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
