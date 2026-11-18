#!/bin/zsh
set -e
cd -- "$(dirname -- "$0")"
if ! command -v npm >/dev/null 2>&1; then
  echo 'Node.js 22.12+ is required. Install Node.js, then reopen this file.'
  read '?Press Enter to close.'
  exit 1
fi
if [[ ! -d node_modules ]]; then npm ci; fi
npm run dev -- --open /space-x-ipo
