# Progress 08 – Account-Schritt (E-Mail + Passwort)

**Datum:** 2026-07-26
**Ziel des Prompts:** Nach dem Onboarding ein Konto erstellen (E-Mail + Passwort), dann erst 7-Tage-Gratis.

## Was gebaut wurde
- **Neuer Ablauf:** Onboarding (Ziel/Störfaktor/…) → **Account (Auth)** → **Trial (7 Tage gratis)** → App.
- **`Auth`-Screen:** Konto erstellen ODER einloggen (Umschalter). Validierung: gültige E-Mail, Passwort ≥ 6 Zeichen,
  Passwort-Bestätigung bei Registrierung.
- **Passwörter gehasht** (SHA-256 via WebCrypto, mit Fallback) – **nie im Klartext** gespeichert (`drw_accounts`).
- **Mehrere Konten pro Gerät** möglich (nach E-Mail); aktueller Login in `drw_authEmail`.
- **TrialStart** zeigt jetzt die angemeldete E-Mail statt sie erneut abzufragen.
- **Konto-Screen** (früher „Dein Abo"): zeigt angemeldete E-Mail + **Abmelden**-Button; Abo-Status darunter.
- Reset räumt auch `drw_authEmail` mit auf.

## Ehrlichkeit
- Das ist eine **lokale Demo-Anmeldung** (Konten im Browser des Geräts). **Echte, geräteübergreifende Accounts**
  brauchen ein Backend (z. B. Supabase) – das passt zum nächsten Schritt „KI online bringen".

## Status
- Kompiliert fehlerfrei (frische Kopie geprüft, keine Konsolenfehler); Auth-Screen erscheint korrekt im Ablauf.
- **Nach `main` gepusht** → GitHub Pages aktualisiert die Live-Seite.

## Nächster Schritt
- KI online bringen (Vercel + `ANTHROPIC_API_KEY`) – Nutzer liefert Details im nächsten Prompt.
- Optional dabei: lokale Demo-Accounts → echte Accounts (Backend/Supabase Auth).
