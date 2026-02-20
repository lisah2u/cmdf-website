# Cacapon Music and Dance Foundation — Website

Static website for the [Cacapon Music and Dance Foundation](https://cacaponmusicanddance.org/) (CMDF), a 501(c)(3) nonprofit in Capon Bridge, West Virginia dedicated to youth music education and community folk dance.

## Tech Stack

- **HTML5** — Semantic, static pages (no build step)
- **Tailwind CSS** — Utility-first styling via CDN with custom brand config
- **Vanilla JavaScript** — Lightweight interactivity (`js/main.js`)
- **EventCalendar** — Google Calendar-powered events page ([event-calendar](https://github.com/vkurko/calendar) CDN build)
- **Netlify** — Hosting, form handling, redirects
- **Google Fonts** — Roboto, Inter, Fredericka the Great, Elms Sans
- **Font Awesome 6.5** — Icons

## Pages

| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Hero with background video, mission overview, program cards |
| About | `about.html` | Mission, impact stats, values, leadership bios, annual report CTA |
| Programs | `programs.html` | Cards linking to Scholarships, Dance, and Events |
| Events | `events.html` | Live calendar synced with Google Calendar API |
| Dance | `dance.html` | Square dance schedule, event cards, video gallery, FAQ |
| Donate | `donate.html` | Testimonial carousel, sponsorship tiers, FAQ, contact form |
| Scholarships | `scholarships.html` | Karper Creatives Scholarship details and application link |
| Partners | `partners.html` | Sponsor tiers, financial sponsors, local business supporters |
| Contact | `contact.html` | FAQ and extended footer with contact info |
| Contact Success | `contact-success.html` | Post-submission confirmation |
| Thank You | `thank-you.html` | Post-donation/newsletter confirmation |
| Contribute | `contribute.html` | Placeholder/stub |

## Project Structure

```
├── index.html                  # Homepage
├── about.html                  # About page
├── programs.html               # Programs hub
├── events.html                 # Events calendar (Google Calendar integration)
├── dance.html                  # Community square dances
├── donate.html                 # Donation and sponsorship
├── scholarships.html           # Karper Creatives Scholarship
├── partners.html               # Sponsors and partners
├── contact.html                # Contact and FAQ
├── contact-success.html        # Form submission success
├── thank-you.html              # Donation/newsletter success
├── contribute.html             # Stub page
│
├── assets/
│   ├── tailwind-config.js      # Tailwind theme extensions (brand colors, fonts)
│   ├── palette.css             # CSS custom properties + form/footer components
│   ├── cmdf-components.css     # Custom fonts, typography, buttons, animations
│   ├── Gilroy-Regular.ttf      # Brand body font
│   └── howards-eight.ttf       # Brand display/heading font
│
├── js/
│   └── main.js                 # Mobile menu, scroll animations, FAQ accordion,
│                               #   testimonial carousel, form validation, counters
│
├── images/                     # Photos, logos, video (square-dance-trimmed.mp4)
├── documents/                  # Content source docs, style guides, architecture docs
├── 2025 Annual Report.pdf      # Linked from About page and site-wide footer
│
├── netlify/
│   └── functions/
│       └── get-calendar.js     # Serverless proxy: fetches Google Calendar events
│                               #   server-side so the API key is never in the browser
│
├── netlify.toml                # Netlify build config, security headers, caching
├── _redirects                  # Netlify URL redirects (trailing slashes, aliases)
├── CLAUDE.md                   # AI assistant project instructions
└── .gitignore
```

## Local Development

No build step required. Open any HTML file directly in a browser, or run a local server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Events Calendar

The events page (`events.html`) displays a live calendar powered by the [EventCalendar](https://github.com/vkurko/calendar) library, connected to Google Calendar via a server-side Netlify Function proxy. The Google API key is stored as a Netlify environment variable and is never exposed to the browser.

### How It Works

1. EventCalendar loads in list/agenda view with Month and Year toggles
2. On each view change, it calls `/.netlify/functions/get-calendar` with the visible date range
3. The Netlify Function reads `GOOGLE_API_KEY` from the server environment, fetches from Google Calendar API, and returns the events
4. Events render with title, time, and location in CMDF brand styling

### Architecture: API Key Security

```
Browser                    Netlify (server)           Google
  │                              │                       │
  │  GET /.netlify/functions/    │                       │
  │       get-calendar?timeMin=… │                       │
  │ ──────────────────────────▶  │                       │
  │                              │  GET /calendar/v3/…   │
  │                              │       ?key=SECRET     │
  │                              │ ─────────────────────▶│
  │                              │                       │
  │                              │  ◀─ events JSON ──────│
  │  ◀─── events JSON ───────────│                       │
  │  (API key never appears here)│                       │
```

The API key lives only in Netlify's environment — it is absent from the browser, the page source, and network logs visible to visitors.

### Google Calendar Setup

To connect a new Google Calendar:

1. Create a project at [Google Cloud Console](https://console.cloud.google.com)
2. Enable the **Google Calendar API**
3. Create an API key (restrict to Google Calendar API and your domain)
4. Make the Google Calendar **public** (Settings > Access permissions)
5. Set `GOOGLE_API_KEY` in Netlify → Site configuration → Environment variables
6. The Calendar ID (`cacaponmusicanddancefoundation@gmail.com`) is hardcoded in `netlify/functions/get-calendar.js` — update it there if it ever changes

### Netlify Function: `get-calendar.js`

- **Location**: `netlify/functions/get-calendar.js`
- **Endpoint**: `/.netlify/functions/get-calendar`
- **Environment variable required**: `GOOGLE_API_KEY`
- **Query params forwarded to Google**: `timeMin`, `timeMax`, `singleEvents`, `orderBy`, `maxResults`
- **Runtime**: Node.js 18 (set in `netlify.toml`)

### CMDF Theme

The calendar is fully branded with CMDF styles via CSS custom properties on `#events-calendar .ec`:

- **Toolbar**: Black background, white text, Howards Eight title font
- **Buttons**: Pill-shaped, gold active state, hover glow
- **Events**: Gilroy body font, gold accent bar, warm hover highlight
- **Day headers**: Howards Eight headings, gold underline

## CSS Architecture

The site uses a hybrid approach: Tailwind CSS utilities + custom CSS for brand typography and components.

**Loading order** (every page):
1. Tailwind CSS CDN
2. `assets/tailwind-config.js` — Brand colors, fonts, shadows
3. Google Fonts
4. Font Awesome
5. `assets/palette.css` — CSS custom properties, form/footer component styles
6. `assets/cmdf-components.css` — Custom font faces, semantic typography, buttons, cards, animations

See `documents/🎨 CSS-Architecture-Overview.md` for full details.

### Brand Colors

| Name | Hex | Tailwind Class | CSS Variable |
|------|-----|----------------|--------------|
| Steel Blue | `#437CA5` | `text-steel-blue` | `--steel-blue` |
| Celestial Blue | `#549ED2` | `text-celestial-blue` | `--celestial-blue` |
| Hunyadi Yellow (Gold) | `#E7BB5F` | `text-gold` | `--hunyadi-yellow` |
| Lion | `#B29251` | `text-lion` | `--lion` |
| CMDF Black | `#07070A` | `text-cmdf-black` | `--cmdf-black` |

### Typography

| Purpose | Font | Tailwind Class |
|---------|------|----------------|
| Body text | Gilroy | `font-gilroy` |
| Headings/display | Howards Eight | `font-howards` |
| Navigation/UI | Inter | `font-nav` |
| Hero titles | Fredericka the Great | `font-display` |

## Forms

All forms use [Netlify Forms](https://docs.netlify.com/forms/setup/) with the `data-netlify="true"` attribute. No backend required.

- **Contact form** (`contact.html`) — Redirects to `contact-success.html`
- **Donation/newsletter form** (`donate.html`) — Redirects to `thank-you.html`
- **Footer email signup** (all pages) — `footer-signup` form

## Deployment

The site deploys to Netlify from the `main` branch. No build command — Netlify serves the static files directly from the repo root.

- **Publish directory**: `.` (repo root)
- **Functions directory**: `netlify/functions/` (auto-detected by Netlify)
- **Security headers**: X-Frame-Options, X-XSS-Protection, X-Content-Type-Options, Referrer-Policy
- **Caching**: Static assets cached with 1-year `max-age`
- **HTTPS**: Forced via redirect rule

### Environment Variables

Set these in Netlify → Site configuration → Environment variables:

| Variable | Required | Description |
|----------|----------|-------------|
| `GOOGLE_API_KEY` | Yes | Google Calendar API key (restricted to Calendar API + your domain) |

## Documentation

Detailed reference docs live in the `documents/` directory:

- `cmdf_info_arch.md` — Full information architecture and site map
- `cmdf_style_guide.md` — Visual patterns, component usage, spacing
- `🎨 CSS-Architecture-Overview.md` — CSS files, loading order, typography system
- `seo-optimization.md` — SEO checklist and implementation priorities
- `design-principles.md` — Design checklist for visual development

## Organization

| | |
|---|---|
| **Name** | Cacapon Music and Dance Foundation |
| **Status** | 501(c)(3) Nonprofit |
| **EIN** | 93-3118214 |
| **Location** | 152 Capon School Street, Capon Bridge, WV 26711 |
| **Email** | admin@cacaponmusicanddance.org |
