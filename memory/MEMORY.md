# CMDF Website Memory

## Tailwind Build Gotcha
`tailwind-built.css` only contains utilities actually used at build time. `text-white/50` is NOT in the build — use `text-white/60` instead (confirmed working). If a color/opacity utility appears invisible, check computed color; if it resolves to `rgb(0,0,0)` the class is missing from the build.

## Font Awesome
Pages load FA via `media="print" onload="this.media='all'"` async pattern from cdnjs. Brand icons use `fa-brands fa-facebook` (FA 6 syntax). Font file confirmed loading in browser (status: loaded).

## Footer Pattern (all main pages)
Standard footer: `bg-black py-6`, copyright text, address, EIN/annual report link, then Facebook icon `<i class="fa-brands fa-facebook text-2xl">` wrapped in `<a class="text-white/60 hover:text-gold transition-colors">`.

## Key Files
- `assets/tailwind-built.css` — compiled Tailwind (not all utilities present)
- `assets/cmdf-components.css` — custom CMDF component styles
- `assets/js/main.js` — handles mobile menu, FAQ accordion, testimonial carousel
- `netlify/functions/get-calendar.js` — proxies Google Calendar API (key in GOOGLE_API_KEY env var)
- `llms.txt` — LLM discoverability file (keep updated when adding pages)
- `sitemap.xml` — search engine sitemap (keep updated when adding pages)
