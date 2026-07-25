# Progress 05 – Abo-/Trial-Flow (Monetarisierung)

**Datum:** 2026-07-25
**Ziel des Prompts:** Abo-Modell einbauen: 7 Tage gratis (ohne Karte) → danach Paywall → jederzeit kündbar.

## Was gebaut wurde

1. **Ablauf:** Onboarding (Störfaktor/Ziel/Hindernis/…) → **Trial-Screen** → App → nach 7 Tagen **Paywall**.
2. **Trial-Start** (`TrialStart`): „7 Tage kostenlos", Nutzenliste, **keine Kreditkarte**, optionale E-Mail für den Account.
3. **Trial-Banner**: zeigt „noch X Tage gratis" auf allen Screens + „Abo verwalten".
4. **Paywall** (`Paywall`): erscheint nach Ablauf/Kündigung, Plan-Auswahl, sperrt die App.
5. **Abo-Verwaltung** (`AccountScreen`): Status, Plan wählen/abschließen, **kündigen**, Demo-Werkzeug „Trial-Ende simulieren".
6. **Preise:** Monatlich **4,99 €**, Jährlich **39,99 €** (–33 %). 7 Tage gratis.
7. **Zustands-Logik** (`subState`, `trialDaysLeft`) in `drw_sub`: none → trial → (expired|active|canceled).

## Ehrlichkeit / Zahlung

- Die **echte Geld-Abbuchung** ist NICHT eingebaut (bräuchte Stripe + Backend/Accounts).
- Der Abo-Button ist eine klar gekennzeichnete **Demo-Aktivierung** („In der Live-Version öffnet sich der
  sichere Stripe-Checkout — es wird jetzt kein Geld abgebucht"). So wird nichts vorgetäuscht.
- Für die Challenge zeigt das den **Business-Case/„Potenzial"** — echte Stripe-Integration ist ein späterer Schritt.

## Live getestet (GitHub Pages)

✅ Onboarding → Trial-Screen · ✅ Gratis-Test startet (status=trial, Banner) · ✅ App nutzbar ·
✅ Abo-Verwaltung · ✅ Trial-Ende → Paywall · ✅ Abonnieren → aktiv (Jährlich) · ✅ Kündigen → gesperrt.

## Parallel

- Nutzer richtet **Vercel-Deploy + `ANTHROPIC_API_KEY`** ein → schaltet die echte Live-KI frei.
- Danach: Test der Live-KI + weitere Änderungen (App ist „noch nicht perfekt").

## Live-Links
- App (Offline-KI): https://teo-loged-in.github.io/DoRealWork/
- Live-KI: (Vercel-URL folgt)
- Repo: https://github.com/Teo-Loged-In/DoRealWork
