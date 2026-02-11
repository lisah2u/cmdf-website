# SEO & LLM Optimization Checklist

Recommendations for improving search engine and LLM discoverability of the [Cacapon Music and Dance Foundation](https://cacaponmusicanddancefoundation.netlify.app/) site.

Think in three layers:
1. **Classical SEO** (crawl, index, rank)
2. **Semantic clarity** (entities, structure, intent)
3. **LLM-facing affordances** (retrieval, grounding, citation)

The site is already in a good place structurally (clean HTML, real text, not a JS-only blob). Clarity and structure are the main wins.

---

## 1. Essential Metadata

Add these on **every page**, with page-specific values:

### Title & Description

```html
<title>Cacapon Music and Dance Foundation | Community Music & Dance in WV</title>

<meta name="description"
      content="The Cacapon Music and Dance Foundation provides music education, folk dance, and community programs for children and families in Capon Bridge, West Virginia." />
```

- Search engines heavily weight `title` + `description`
- LLMs use these as page summaries when grounding answers
- The description is the snippet shown in search results

### Open Graph Tags

Control how the site appears when shared on social media, Slack, iMessage, etc:

```html
<meta property="og:title" content="Cacapon Music and Dance Foundation" />
<meta property="og:description" content="Empowering youth through music education and community folk dance in West Virginia." />
<meta property="og:image" content="https://cacaponmusicanddancefoundation.org/images/CMDF_LOGO_COLOR_8_x8_300_dpi.png" />
```

### Canonical URLs

Important for Netlify sites — prevents duplicate content issues. Each page should self-canonicalize:

```html
<link rel="canonical" href="https://cacaponmusicanddancefoundation.org/about" />
```

---

## 2. Structured Data (JSON-LD)

Search engines and LLMs both love explicit structure. Add Schema.org markup via JSON-LD.

### Homepage — NonprofitOrganization

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "NonprofitOrganization",
  "name": "Cacapon Music and Dance Foundation",
  "url": "https://cacaponmusicanddancefoundation.org",
  "logo": "https://cacaponmusicanddancefoundation.org/images/CMDF_LOGO_COLOR_8_x8_300_dpi.png",
  "description": "A nonprofit organization providing music education and folk dance programs for children and the community in Capon Bridge, West Virginia.",
  "areaServed": {
    "@type": "Place",
    "name": "Capon Bridge, West Virginia"
  },
  "sameAs": [
    "https://www.facebook.com/...",
    "https://www.instagram.com/..."
  ]
}
</script>
```

### Per-page schema types

- `/events` → `Event`
- `/programs` → `EducationalProgram`
- `/dance` → `DanceEvent` or `Course`

Benefits:
- Google can generate rich results (e.g., Events box in search)
- LLMs can reliably infer what kind of organization this is
- Disambiguates from similarly named groups

---

## 3. Heading Hierarchy

### One H1 per page, explicit and descriptive

```html
<h1>Cacapon Music and Dance Foundation</h1>
<h2>Community Music Education and Folk Dance in Capon Bridge, WV</h2>
```

Then use section-level headings with clear intent:

```html
<h2>Music Education Programs for Children and Youth</h2>
<h2>Community Square Dances and Folk Traditions</h2>
<h2>Ensemble Sessions and Jam Opportunities</h2>
```

- Search engines infer page topics from heading hierarchy
- LLMs use headings as semantic anchors when chunking pages
- Avoid multiple `<h1>` tags per page

---

## 4. Textual Clarity

Replace vague phrases with explicit, descriptive nouns. Search engines and LLMs don't click — they **parse**.

| Instead of | Use |
|---|---|
| "What We Do" | "Our Music Education and Community Dance Programs" |
| "Learn More" | "Learn More About Our Music and Dance Programs" |

Also ensure important information (dates, mission statements, locations) is always in actual text, not embedded inside graphic images.

---

## 5. Image Alt Text

Make alt text descriptive and contextual — include organization name and location where relevant:

```html
<img src="kids-performing.jpg"
     alt="Children receiving folk music instruction at the Cacapon Music and Dance Foundation in Capon Bridge, West Virginia" />
```

This helps image search, page relevance, and LLM grounding.

---

## 6. Internal Linking

Add contextual links inside paragraph text, not just in navigation:

> We provide **music education for children and youth** through our [instrument instruction and ensemble programs](programs.html).

Benefits:
- Improves crawl depth
- Reinforces concept relationships
- Improves LLM retrieval coherence

---

## 7. Location Signals

Since the organization is based in Capon Bridge, WV, ensure the full address and service area appear in the footer or a consistent location. This helps with "music lessons near me" and "West Virginia folk dance" queries.

---

## 8. Robots.txt & Sitemap

### `robots.txt`

```txt
User-agent: *
Allow: /
Sitemap: https://cacaponmusicanddancefoundation.org/sitemap.xml
```

### `sitemap.xml`

```xml
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://cacaponmusicanddancefoundation.org/</loc></url>
  <url><loc>https://cacaponmusicanddancefoundation.org/about</loc></url>
  <url><loc>https://cacaponmusicanddancefoundation.org/programs</loc></url>
  <url><loc>https://cacaponmusicanddancefoundation.org/events</loc></url>
  <url><loc>https://cacaponmusicanddancefoundation.org/dance</loc></url>
  <url><loc>https://cacaponmusicanddancefoundation.org/donate</loc></url>
  <url><loc>https://cacaponmusicanddancefoundation.org/scholarships</loc></url>
  <url><loc>https://cacaponmusicanddancefoundation.org/partners</loc></url>
</urlset>
```

Netlify can also auto-generate sitemaps via plugins.

---

## 9. LLM-Specific: `llms.txt`

An emerging best practice — place at site root to help LLMs understand your site:

```txt
# Cacapon Music and Dance Foundation

This site describes a nonprofit organization providing music education,
folk dance, and community events in Capon Bridge, West Virginia.

Key pages:
- /about : mission and organizational background
- /programs : music education and ensemble programs
- /events : community dances and performances
- /dance : folk and square dance activities

Preferred citation name:
Cacapon Music and Dance Foundation
```

Reduces hallucination and misclassification by LLMs.

---

## 10. Content Additions (High ROI)

Even one short page or section can dramatically improve discoverability:

- **FAQ section** — Q&A format about classes, locations, and how to join. LLMs often scrape FAQ content to answer queries directly.
- **"Who we serve"** — ages, community, accessibility info
- **"Why folk music and dance matter"** — mission + cultural context
- **"History of the foundation"** — dates, place, continuity

These are valuable for long-tail search, LLM summarization, and grant reviewers/donors.

---

## What You Can Skip (For Now)

- Heavy keyword stuffing
- AI-generated blog spam
- Complex analytics dashboards
- JavaScript SEO hacks

---

## Implementation Priority

1. **Quick wins**: Metadata (title, description, OG tags, canonical) on every page
2. **Medium effort**: JSON-LD schema on homepage, heading hierarchy cleanup
3. **Ongoing**: Alt text improvements, internal linking, FAQ content
4. **When ready**: robots.txt, sitemap.xml, llms.txt, per-page schema types
