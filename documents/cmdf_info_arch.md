# CMDF Website — Information Architecture

Current state of the Cacapon Music and Dance Foundation website.

## Navigation Structure

### Primary Nav (Left, Desktop)
- About (`about.html`)
- Programs (`programs.html`)
- Events (`events.html`)
- Partners (`partners.html`)

### Branded Nav (Right, Desktop)
- Donate (`donate.html`) — with gold bell icon
- Scholarships (`scholarships.html`)
- Dance (`dance.html`)

### Mobile
- All items stacked vertically in toggle menu

---

## Site Map

```
Home (index.html)
├── About (about.html)
│   ├── Mission
│   ├── What We Do
│   ├── Impact Ribbon (stats)
│   ├── Annual Report CTA (PDF)
│   ├── Our Values
│   └── Our Leadership
│
├── Programs (programs.html)
│   ├── Scholarships → scholarships.html
│   ├── Community Square Dances → dance.html
│   └── Special Events → events.html
│
├── Events (events.html)
│   └── Google Calendar (agenda view, synced via API)
│
├── Partners (partners.html)
│   ├── Our Sponsors (tier cards: Bronze, Silver, Gold, Platinum)
│   ├── Financial Sponsors (logos + descriptions)
│   ├── Special Thanks — Local Businesses (logos + descriptions)
│   └── Partnership Inquiry CTA
│
├── Donate (donate.html)
│   ├── Testimonial Carousel
│   ├── Who We Serve
│   ├── Trust Block (501(c)(3), EIN)
│   ├── Sponsorship Tiers (Bronze, Silver, Gold, Platinum)
│   ├── FAQ Accordion
│   └── Contact/Newsletter Form
│
├── Scholarships (scholarships.html)
│   ├── Program Overview (Karper Creatives Scholarship)
│   ├── What Students Receive
│   ├── Commitment & Participation
│   └── Apply Now CTA (Google Docs form)
│
├── Dance (dance.html)
│   ├── Typical Schedule (3 time slots)
│   ├── Location (Capon Bridge Firehall)
│   ├── 2026 Square Dances (coming soon)
│   ├── 2025 Square Dances (4 event cards)
│   ├── Video Gallery (3 YouTube embeds)
│   └── FAQ Accordion (5 questions)
│
├── Contact (contact.html)
│   ├── FAQ (4 questions)
│   └── Extended footer with links and contact info
│
└── Secondary Pages
    ├── Contact Success (contact-success.html)
    ├── Thank You (thank-you.html)
    └── Contribute (contribute.html) — placeholder/stub
```

---

## Page Details

### Home (`index.html`)
- Full-screen hero with background video (`square-dance-trimmed.mp4`)
- Dual CTAs: "Learn More" and "Get Involved"
- About section with mission overview and icon cards
- "What We Do" program cards

### About (`about.html`)
- Hero with background image (`recital.jpg`)
- Mission statement (two numbered points: music education + folk dance)
- "What We Do" section with layered image composition and gold overlays
- Impact Ribbon (black background, 5 stats):
  - 300+ hours of music education
  - 3,650+ hours of practice inspired
  - 20+ scholarship students
  - 4 quarterly community dances
  - Daily access to instruments & resources
- CTA: "View Our Full 2025 Annual Report" (PDF link)
- Our Values (6 cards: Excellence, Community, Growth, Respect, Empowerment, Innovation)
- Our Leadership (4 board members with photos and bios)

### Programs (`programs.html`)
- Light blue hero band
- 3 program cards linking to detail pages:
  - Scholarships → `scholarships.html`
  - Community Square Dances → `dance.html`
  - Special Events → `events.html`

### Events (`events.html`)
- Hero with background image (`square-dance-caller-janine.jpg`)
- EventCalendar (agenda-style, CDN library)
  - Google Calendar API integration
  - Month and Year list views
  - CMDF-branded theme (black toolbar, gold accents, Howards Eight titles)
  - Fallback notice if calendar not configured

### Dance (`dance.html`)
- Hero with background image
- Typical Square Dance Schedule:
  - 4–5 PM: Kids Barn Dance
  - 5:30–6 PM: Crash Course for Adults
  - 6–9 PM: Main Square Dance
- Location: Capon Bridge Volunteer Firehall (Google Maps link)
- 2026 Events: Coming soon placeholder
- 2025 Events: 4 cards (Feb 1, Apr 4, Sep 13, Nov 29) with callers and bands
- Video Gallery: 3 YouTube embeds
- FAQ Accordion: 5 questions (experience, partner, attire, what to bring, schedule)

### Donate (`donate.html`)
- Hero with stats and image
- Testimonial carousel (6 slides, auto-rotate)
- Who We Serve (2 cards: children in need, home-schooled children)
- Trust block: 501(c)(3) status, EIN
- Sponsorship Tiers:
  - Bronze: $120/year ($10/month)
  - Silver: $600/year ($50/month) — "Most Popular"
  - Gold: $1,200/year ($100/month)
  - Platinum: $2,500/year
- FAQ Accordion (7 questions)
- Contact/newsletter form (Netlify, redirects to `thank-you.html`)

### Scholarships (`scholarships.html`)
- Karper Creatives Scholarship
- Eligibility: Grades 3–10, reapplicants to age 18, Hampshire County, year-round enrollment
- What Students Receive: 30 weeks private lessons, group ensemble, instrument access, performance opportunities, workshops, support
- Commitment: Weekly lessons, group participation, 3+ community events, regular practice
- Apply Now CTA: Links to Google Docs application

### Partners (`partners.html`)
- Hero with warm background and photo card
- Intro section with 3 value points
- Our Sponsors: 4 tier cards (Bronze, Silver, Gold, Platinum) with descriptions
  - Platinum listing: Rebecca Keiver
- Financial Sponsors (with linked logos):
  - Hampshire County Community Foundation
  - Mid-Atlantic Arts — CALT
  - SJ Morse
- Special Thanks — Local Businesses (with linked logos):
  - The Kettle Stop
  - El Puente Mexican Restaurant
  - Nino's Pizzarama
- Partnership inquiry CTA (email link)

### Contact (`contact.html`)
- FAQ section (4 questions: enrollment, costs, experience, support)
- Extended multi-column footer (different from standard footer)

---

## Site-Wide Elements

### Footer Email Signup
Appears on most pages. Netlify form (`footer-signup`) with email input and "Stay Connected" button.

### Standard Footer
- Copyright: 2025
- 501(c)(3) Nonprofit Organization
- EIN: 93-3118214
- Link to 2025 Annual Report (PDF)

### Top-Level Files
- `2025 Annual Report.pdf`
- `robots.txt` — TBD
- `sitemap.xml` — TBD
- `llms.txt` — TBD (see `seo-optimization.md`)

---

## Organizational Info

| Field | Value |
|---|---|
| Name | Cacapon Music and Dance Foundation |
| Founded | 2023 |
| Founder | Dakota Karper |
| Status | 501(c)(3) Nonprofit |
| EIN | 93-3118214 |
| Mission | Empower children and youth via music education; celebrate cultural heritage through community folk dance |
| Target | Low-income households, ages 3–18, families and community |
| Location | 152 Capon School Street, Capon Bridge, WV 26711 |
| Email | admin@cacaponmusicanddance.org |

---

## Partners & Sponsors

### Financial Sponsors
- Hampshire County Community Foundation — ewvcf.org/hampshireccf/
- Mid-Atlantic Arts — Central Appalachian Living Traditions (CALT) — midatlanticarts.org
- SJ Morse — sjmorse.com

### Local Business Supporters
- The Kettle Stop — facebook.com/The-Kettle-Stop
- El Puente Mexican Restaurant — facebook.com/elpuentewva
- Nino's Pizzarama — ninos-pizzarama.com

### Individual Sponsors
- Rebecca Keiver (Platinum)

---

## Core Services

### Music Education
- Instrumental instruction (Karper Creatives Scholarship)
- Community jams
- Performance opportunities
- Workshops and mentorship

### Cultural Preservation
- West Virginia folk tradition
- Community square dances (quarterly)
- Youth performances

---

## Impact Metrics (displayed on About page)

| Metric | Value |
|---|---|
| Hours of Music Education | 300+ |
| Hours of Practice Inspired | 3,650+ |
| Scholarship Students | 20+ |
| Quarterly Community Dances | 4 |
| Instrument Access | Daily |
