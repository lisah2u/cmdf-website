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

# Build Tailwind CSS from source (tree-shaken + minified)
if command -v npx &> /dev/null; then
  echo "Building Tailwind CSS..."
  npx --yes tailwindcss@3 -i assets/tailwind-input.css -o assets/tailwind-built.css --minify
  echo "Built assets/tailwind-built.css"
fi

# Minify JS and CSS if terser/clean-css are available
if command -v npx &> /dev/null; then
  # Minify main.js
  if npx --yes terser assets/js/main.js -o assets/js/main.min.js -c -m 2>/dev/null; then
    mv assets/js/main.min.js assets/js/main.js
    echo "Minified assets/js/main.js"
  fi

  # Minify CSS files
  for cssfile in assets/cmdf-components.css assets/palette.css; do
    if npx --yes clean-css-cli "$cssfile" -o "${cssfile}.min" 2>/dev/null; then
      mv "${cssfile}.min" "$cssfile"
      echo "Minified $cssfile"
    fi
  done
fi
