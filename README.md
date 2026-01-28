# Vibe ISS – Live dashboard

En skräddarsydd React/Vite-app som visualiserar utvalda telemetri-signaler från International Space Station (ISS) i realtid via NASA:s offentliga ISSLive!/Lightstreamer-flöde. Fokus ligger på de system som är mest relevanta för att snabbt förstå stationens hälsa: livsuppehållande (ETHOS), vatten- och resursnivåer (ECLSS) samt termisk kontroll.

## Informationsarkitektur
- **/** – Landningssida för andreasmartensson.com med beskrivning, projektkort och CTA till aktuella/kommande builds.
- **/iss** – ISS-dashboarden med karta, telemetritabbar och statusindikatorer.

React Router står för sidbytena så hela lösningen fortsätter vara en statisk SPA som kan publiceras på one.com.

## Huvudfunktioner
- **Direktkoppling mot Lightstreamer** – webbläsaren etablerar en MERGE-prenumeration mot `push.lightstreamer.com/ISSLIVE` och uppdaterar korten när nya värden anländer.
- **Global karta över ISS** – hämtar positionen från `api.wheretheiss.at`, visar OpenStreetMap-karta över ISS + Luleå samt räknar ut avstånd i km.
- **Responsiv premium-design** – Space Grotesk/Inter, gradienter och sektioner gör att sidan fungerar på mobil, surfplatta och desktop samt matchar andreasmartensson.com.
- **Toalett-tracker** – Urinbehållarens kort visar “Tid sedan senaste toabesök” baserat på när telemetrin senast ökade.

## Tekniskt
- **Ramverk**: React 18 + TypeScript på Vite 7.
- **Routing**: `react-router-dom` för startsida + undersida.
- **Data**: `lightstreamer-client-web` (ESM) + `react-leaflet`/Leaflet för kartan.
- **Delad uthållig status**: ett lätt PHP-API (`public/api/last-urine.php`) som med fil-låsning läser/skrivertidsstämpeln i `public/api/storage/last-urine.json`, vilket delar läget mellan alla klienter.
- **Bygg**: `npm run build` ger statiska filer i `dist/`.

## Kom igång lokalt
Kör både API:t (PHP) och Vite i separata terminaler:
```bash
# Installera beroenden (gjort en gång per miljö)
npm install

# Starta PHP-servern som servar /api (kräver PHP >= 8)
php -S 127.0.0.1:8787 -t public

# Starta utvecklingsserver på http://localhost:5173
npm run dev
```
Vite proxar `/api/*` till `http://127.0.0.1:8787` automatiskt. Behövs annan adress anges `VITE_API_PROXY_TARGET` innan `npm run dev`.

## Bygg & driftsätt på one.com
1. **Bygg**: `npm run build`.
2. **API**: ladda upp `public/api/` (inklusive `storage/`) till motsvarande plats under `public_html`. Säkerställ att webbservern har skrivbehörighet: exempel `chmod 775 public_html/api/storage && chmod 664 public_html/api/storage/last-urine.json`.
3. **Rewrite-regler**: `public/.htaccess` ser till att Apache/one.com skickar alla okända paths (t.ex. `/iss`) till `index.html`. Ladda upp filen till roten av `public_html` tillsammans med byggartefakterna.
4. **SPA**: ladda upp hela `dist/`-innehållet till `public_html`.
5. **Miljövariabler**: i produktion behöver `VITE_API_BASE_URL` inte sättas om API:t ligger på samma domän. För alternativ domän anger du `VITE_API_BASE_URL=https://exempel.com` inför build.
6. **Cache**: aktivera valfri CDN eller cache efter behov – allt är statiskt förutom `/api/last-urine.php`.

> Obs! Paketet `lightstreamer-client-web` och Leaflet gör att den bundlade JS-filen blir >700 kB. Detta är accepterat med tanke på realtidsbiblioteket, men går att koda-splitta vid behov (se Vite-varningen efter build).

## Strukturen i koden
```
src/
 ├─ App.tsx                – router + layout (nav, footer)
 ├─ pages/                 – Home och IssDashboard
 ├─ components/            – uppdelade UI-byggstenar (kort, karta, status)
 ├─ hooks/                 – Lightstreamer-prenumeration + ISS-position
 ├─ data/telemetry.ts      – definitioner av varje telemetrikort och formattering
 ├─ lib/formatters.ts      – numeriska formatterare och konverteringar
 ├─ lib/lightstreamer...   – klientinställningar
 ├─ lib/restroomPersistence.ts – API-klient för delad tidsstämpel
 └─ lib/telemetryUtils.ts  – statusbedömningar + tidsformatteringar
```

## Vidareutveckling
- Lägg till fler projektkort på landningssidan och peka dem till nya undersidor.
- Lagra historik i `useRef` och rita minidiagram för varje kort.
- Integrera fler externa dataströmmar, t.ex. visuella ISS-pass över Sverige.

All telemetri är publik NASA-data. Den enda backend-komponenten är PHP-API:t som persisterar den gemensamma WC-tidsstämpeln.
