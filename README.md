# andreasmartensson.com

Portal and project index for `andreasmartensson.com`.

This repo owns:

- the main landing page and project cards
- static project pages/download pages for Android projects, such as `AMCDM/` and `SlopeTrace/`
- static hosted builds that intentionally live under the main domain, such as `99-natter-pa-kronan/`

Project source code should live in its own repo. The portal links to those projects and may host static download pages when needed.

## Related Repos

- `iss-dashboard` -> `https://iss.andreasmartensson.com`
- `bosse-hoppar` -> `https://andreasmartensson.com/bosse-hoppar/`
- `tidlapp` -> `https://tidlapp.andreasmartensson.com`
- `AMC-Download-Manager` -> Android app source, linked from `/AMCDM/`

## Local Development

```bash
npm install
npm run dev
```

## Deploy

Deploy is manual through GitHub Actions. Use `action=check` to verify the target and `action=deploy` to publish after an explicit deploy decision.

Required repository secrets:

```text
DEPLOY_HOST
DEPLOY_PORT
DEPLOY_USER
DEPLOY_PATH
SFTP_PASS
```
