#!/usr/bin/env bash

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"

cd "$ROOT_DIR"

if [[ -f .deploy.env ]]; then
  set -a
  # shellcheck disable=SC1091
  . ./.deploy.env
  set +a
elif [[ -f .env ]]; then
  set -a
  # shellcheck disable=SC1091
  . ./.env
  set +a
fi

required_vars=(DEPLOY_HOST DEPLOY_PORT DEPLOY_USER DEPLOY_PASS DEPLOY_PATH)

for var_name in "${required_vars[@]}"; do
  if [[ -z "${!var_name:-}" ]]; then
    echo "Missing required deploy variable: $var_name" >&2
    exit 1
  fi
done

case "$DEPLOY_PATH" in
  ""|"."|"./"|"/"|"~"|"/home"|"/root")
    echo "Refusing to deploy to unsafe DEPLOY_PATH: $DEPLOY_PATH" >&2
    exit 1
    ;;
esac

if ! command -v lftp >/dev/null 2>&1; then
  echo "Missing required command: lftp" >&2
  exit 1
fi

if ! command -v npm >/dev/null 2>&1; then
  echo "Missing required command: npm" >&2
  exit 1
fi

tmp_lftp_script=""

cleanup() {
  if [[ -n "$tmp_lftp_script" && -f "$tmp_lftp_script" ]]; then
    rm -f "$tmp_lftp_script"
  fi
}

trap cleanup EXIT

run_lftp_script() {
  tmp_lftp_script="$(mktemp)"
  cat >"$tmp_lftp_script"
  lftp -f "$tmp_lftp_script"
  rm -f "$tmp_lftp_script"
  tmp_lftp_script=""
}

resolve_remote_path() {
  run_lftp_script <<EOF
set cmd:fail-exit yes
set sftp:auto-confirm yes
open -u "$DEPLOY_USER","$DEPLOY_PASS" "sftp://$DEPLOY_HOST:$DEPLOY_PORT"
cd "$DEPLOY_PATH"
pwd
bye
EOF
}

remote_path_output="$(resolve_remote_path)"
remote_path="$(printf '%s\n' "$remote_path_output" | tail -n 1)"

if [[ "$remote_path" == sftp://* ]]; then
  remote_path="/${remote_path#*://*/}"
fi

if [[ -z "$remote_path" ]]; then
  echo "Failed to resolve remote deploy path." >&2
  exit 1
fi

case "$remote_path" in
  */webroots/www|*/webroots/www/*)
    ;;
  *)
    if [[ "${ALLOW_NONSTANDARD_DEPLOY_PATH:-0}" != "1" ]]; then
      echo "Resolved remote path '$remote_path' does not look like a live webroot." >&2
      echo "Set ALLOW_NONSTANDARD_DEPLOY_PATH=1 only if you have verified the target manually." >&2
      exit 1
    fi
    ;;
esac

if [[ "${1:-}" == "--check" ]]; then
  echo "Deploy target OK: $remote_path"
  exit 0
fi

npm run build

if [[ -d public/99-natter-pa-kronan ]]; then
  find public/99-natter-pa-kronan -type d -exec chmod 755 {} +
  find public/99-natter-pa-kronan -type f -exec chmod 644 {} +
fi

run_lftp_script <<EOF
set cmd:fail-exit yes
set sftp:auto-confirm yes
set net:max-retries 2
set net:timeout 20
set xfer:clobber yes
open -u "$DEPLOY_USER","$DEPLOY_PASS" "sftp://$DEPLOY_HOST:$DEPLOY_PORT"
cd "$DEPLOY_PATH"
lcd "$ROOT_DIR"
mirror -R --delete --verbose --scan-all-first public/AMCDM AMCDM
mirror -R --delete --verbose --scan-all-first public/SlopeTrace SlopeTrace
mirror -R --delete --verbose --scan-all-first public/99-natter-pa-kronan 99-natter-pa-kronan
chmod 755 99-natter-pa-kronan
chmod 755 99-natter-pa-kronan/assets
rm -rf sigge-hoppar
mirror -R --delete --verbose --scan-all-first --exclude-glob storage --exclude-glob storage/* public/api api
mirror -R --delete --verbose --scan-all-first dist/assets assets
mirror -R --delete --verbose --scan-all-first public/vibe vibe
put -O . dist/index.html
put -O . public/.htaccess
put -O . public/vite.svg
bye
EOF
