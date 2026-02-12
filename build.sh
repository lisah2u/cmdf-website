#!/bin/bash
# build.sh — Injects environment variables into static files before deploy.
# Used by Netlify (via netlify.toml) and for local development.

set -e

# Load .env file if present (local development)
if [ -f .env ]; then
  export $(grep -v '^#' .env | grep -v '^\s*$' | xargs)
fi

# Substitute GOOGLE_API_KEY placeholder in events.html
if [ -z "$GOOGLE_API_KEY" ]; then
  echo "WARNING: GOOGLE_API_KEY is not set. Calendar will show setup notice."
else
  sed "s/__GOOGLE_API_KEY__/${GOOGLE_API_KEY}/g" events.html > events.html.tmp
  mv events.html.tmp events.html
  echo "Injected GOOGLE_API_KEY into events.html"
fi
