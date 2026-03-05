# Vibe ISS - Live dashboard

A tailored React/Vite app that visualizes selected telemetry signals from the International Space Station (ISS) in real time via NASA's public ISSLive!/Lightstreamer feed. It focuses on the systems most relevant for quickly understanding station health: life support (ETHOS), water/resource levels (ECLSS), and thermal control.

## Information Architecture
- **/** - Landing page for andreasmartensson.com with description, project cards, and CTAs to current/upcoming builds.
- **/iss** - ISS dashboard with map, telemetry tabs, and status indicators.
- **/AMCDM/** - Static project page for AMC Download Manager (Android) with download for signed release APK.
- **/SlopeTrace/** - Static project page for SlopeTrace (Android) with APK package download.

React Router handles page transitions so the whole solution remains a static SPA that can be published on one.com.

## Main Features
- **Direct Lightstreamer connection** - The browser establishes a MERGE subscription to `push.lightstreamer.com/ISSLIVE` and updates cards when new values arrive.
- **Global ISS map** - Fetches position from `api.wheretheiss.at`, shows an OpenStreetMap view of ISS + Lulea, and calculates distance in km.
- **Responsive premium design** - Space Grotesk/Inter, gradients, and sectioning make the site work on mobile, tablet, and desktop while matching andreasmartensson.com.
- **Restroom tracker** - The urine container card shows "Time since last restroom visit" based on when telemetry last increased.

## Technical Details
- **Framework**: React 18 + TypeScript on Vite 7.
- **Routing**: `react-router-dom` for homepage + subpage routing.
- **Data**: `lightstreamer-client-web` (ESM) + `react-leaflet`/Leaflet for map rendering.
- **Shared persistent state**: Lightweight PHP API (`public/api/last-urine.php`) that reads/writes the timestamp in `public/api/storage/last-urine.json` with file locking, sharing state between all clients.
- **Server-side collection**: `public/api/collect-urine.php` can run on a schedule to log increases even when no client is open.
- **Build**: `npm run build` outputs static files in `dist/`.

## Run Locally
Run both the API (PHP) and Vite in separate terminals:
```bash
# Install dependencies (once per environment)
npm install

# Start PHP server serving /api (requires PHP >= 8)
php -S 127.0.0.1:8787 -t public

# Start development server at http://localhost:5173
npm run dev
```
Vite proxies `/api/*` to `http://127.0.0.1:8787` automatically. If you need another address, set `VITE_API_PROXY_TARGET` before `npm run dev`.

## Build and Deploy on one.com
1. **Build**: `npm run build`.
2. **API**: Upload `public/api/` (including `storage/`) to the corresponding location under web root. Ensure write permissions for the web server, for example `chmod 775 api/storage && chmod 664 api/storage/last-urine.json`.
3. **Rewrite rules**: `public/.htaccess` ensures Apache/one.com routes unknown paths (for example `/iss`) to `index.html`. Upload it to web root together with build artifacts.
4. **SPA**: Upload all files from `dist/` to web root.
5. **Environment variables**: In production, `VITE_API_BASE_URL` is not needed if API is on the same domain. For another domain, set `VITE_API_BASE_URL=https://example.com` before build.
6. **Cache**: Enable optional CDN or cache as needed - everything is static except `/api/last-urine.php`.
7. **Scheduling**: Add a cron job for `collect-urine.php` (for example every minute) so history continues to fill even when no browser is active.
8. **AMC Download Manager page**: Static files for the Android project are in `public/AMCDM/` and are copied to `dist/AMCDM/` on `npm run build`.

Example cron (runs every minute):
```bash
* * * * * /usr/bin/php /path/to/public/api/collect-urine.php >/dev/null 2>&1
```

## Deploy Script (FTP/SFTP)
Populate `.env` (see `.env.example`) and run:
```bash
npm run deploy
```
The script builds the project and syncs `dist/` to `public_html` over SFTP.

> Note: The `lightstreamer-client-web` package and Leaflet make the bundled JS file >700 kB. This is accepted given the real-time library, but can be code-split if needed (see Vite warning after build).

## Code Structure
```
src/
 |- App.tsx                - router + layout (nav, footer)
 |- pages/                 - Home and IssDashboard
 |- components/            - separated UI building blocks (cards, map, status)
 |- hooks/                 - Lightstreamer subscription + ISS position
 |- data/telemetry.ts      - definitions for each telemetry card and formatting
 |- lib/formatters.ts      - numeric formatters and conversions
 |- lib/lightstreamer...   - client configuration
 |- lib/restroomPersistence.ts - API client for shared timestamp
 '- lib/telemetryUtils.ts  - status evaluation + time formatting
```

```
public/
 |- api/                   - PHP endpoints + storage for ISS restroom data
 '- AMCDM/                 - static project page + APK/zip for AMC Download Manager
```

## Next Improvements
- Add more project cards on the landing page and point them to new subpages.
- Store history in `useRef` and draw mini charts for each card.
- Integrate more external data streams, for example visual ISS passes over Sweden.

All telemetry is public NASA data. The only backend component is the PHP API that persists the shared restroom timestamp.
