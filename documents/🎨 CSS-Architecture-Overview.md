# CSS Architecture Overview

The CMDF website uses a **hybrid approach** combining Tailwind CSS with custom CSS for brand-specific styling and semantic typography.

## CSS Loading Sequence

Every page loads stylesheets in this order:

### 1. Tailwind CSS (Static Build)
```html
<link rel="stylesheet" href="assets/tailwind-built.css">
```
Pre-generated utility class CSS, produced at deploy time by the Netlify build process. Contains only the classes actually used in HTML files (not the full Tailwind library). See [Build Pipeline](#build-pipeline) for details.

> **Historical note**: Before commit `7b3b7d5`/`6d77c73`, the site used `<script src="https://cdn.tailwindcss.com">` + `<script src="assets/tailwind-config.js">`. The CDN approach generated classes dynamically in the browser using JIT. The static build generates classes at deploy time — see [Migration from CDN to Static Build](#migration-from-cdn-to-static-build) for the full story.

### 2. Google Fonts
```html
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=Fredericka+the+Great&family=Elms+Sans:ital,wght@0,100..900;1,100..900&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
```
Fonts loaded: Roboto (fallback body), Fredericka the Great (hero display), Elms Sans, Inter (navigation/UI).

### 3. Font Awesome
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
```
Icons for UI elements, social media, forms, and decorative accents.

### 4. Brand Color Palette
```html
<link rel="stylesheet" href="assets/palette.css">
```
CSS custom properties for brand colors, plus form/footer/thank-you component styles.

### 5. Component Styles
```html
<link rel="stylesheet" href="assets/cmdf-components.css">
```
Custom fonts, semantic typography, animations, branded buttons, cards, and textures. Loads **after** `tailwind-built.css`, making it the correct place for any Tailwind overrides.

### 6. Page-Specific Styles
Several pages include inline `<style>` blocks for page-only CSS:
- `index.html` — Hero background, video overlay
- `donate.html` — FAQ accordion, testimonial carousel, sponsorship cards
- `dance.html` — Hero background
- `events.html` — Hero background, EventCalendar CMDF theme overrides
- `scholarships.html` — Hero background
- `programs.html` — Hero band, program card stripes
- `contact-success.html` — Success background

---

## Build Pipeline

The site uses a Netlify build that runs `build.sh` before deploying static files.

### How Tailwind CSS is generated

```
tailwind-input.css  +  tailwind.config.js  +  *.html files
        ↓
  npx tailwindcss@3 --minify
        ↓
  assets/tailwind-built.css   (deployed, not committed to git)
```

**Key files:**

| File | Committed? | Purpose |
|---|---|---|
| `tailwind-input.css` | **Yes** | Source directives (`@tailwind base/components/utilities`) |
| `tailwind.config.js` | **Yes** | CLI config: brand colors, fonts, content paths |
| `assets/tailwind-built.css` | **No** (gitignored) | Generated output, produced by Netlify at deploy time |

### `build.sh` — what it does

```bash
# Generate Tailwind CSS from HTML files
npx --yes tailwindcss@3 -i assets/tailwind-input.css -o assets/tailwind-built.css --minify

# Minify JS and custom CSS in-place
npx --yes terser assets/js/main.js -o assets/js/main.js --compress --mangle
npx --yes clean-css-cli assets/cmdf-components.css -o assets/cmdf-components.css
npx --yes clean-css-cli assets/palette.css -o assets/palette.css
```

> **Important**: `tailwindcss@3` is pinned to v3. Without the `@3` version pin, `npx --yes tailwindcss` installs whatever is current-latest — which is now v4. Tailwind v4 completely removed `@tailwind base/components/utilities` directives, so the build would fail silently with exit code 1.

### `tailwind.config.js` — CLI format

```javascript
// Node.js module format (NOT the browser global "tailwind.config = {...}" format)
module.exports = {
    content: ['./*.html'],   // scan all HTML files for class names
    theme: {
        extend: {
            colors: {
                'steel-blue': '#437CA5',
                'celestial-blue': '#549ED2',
                'gold': '#E7BB5F',
                // ... etc
            }
        }
    }
}
```

The `content` array tells the CLI which files to scan. Only classes found in those files are included in the output CSS. If a class is added to a new file type (e.g., a `.js` template), add that pattern to `content`.

---

## CSS Files

### `assets/palette.css` — Brand Colors + Form Components

**CSS Custom Properties** (single source of truth for colors):
```css
:root {
  /* Primary Brand Colors */
  --steel-blue: #437CA5;
  --celestial-blue: #549ED2;
  --hunyadi-yellow: #E7BB5F;
  --lion: #B29251;
  --cmdf-black: #07070A;

  /* Utility Colors */
  --light-gray: #f5f5f5;
  --medium-gray: #666666;

  /* Semantic Aliases */
  --color-primary: var(--steel-blue);
  --color-secondary: var(--celestial-blue);
  --color-accent: var(--hunyadi-yellow);
  --color-accent-dark: var(--lion);
  --color-dark: var(--cmdf-black);
}
```

**Component Styles** also defined in this file:
- `.contact-newsletter` — Contact/newsletter form on donate page (warm cream background, 2-column grid, rounded inputs)
- `.footer-strip` — Email signup strip (soft warm tone, centered layout, pill-shaped inputs/button)
- `.thankyou-wrapper` — Thank-you page card (centered, shadowed, rounded)
- `.btn` — Generic button style (steel blue, rounded)
- Mobile breakpoint at `700px` for form/footer responsiveness

### `assets/cmdf-components.css` — Typography, Components & Animations

**Custom Font Declarations**:
- `Howards Eight` (local TTF, display/heading font)
- `Gilroy` (local TTF, body font)

**Font Assignment Rules** (with `!important` for specificity):
- `body` — Gilroy, Roboto, system sans-serif
- `header`, `nav`, `.btn-nav-gold` — Inter
- `#hero`, `.font-hero` — Gilroy, Elms Sans
- `#title`, `.font-fredericka` — Fredericka the Great
- `.font-howards-eight` — Howards Eight
- `.font-gilroy` — Gilroy

**Semantic Typography Classes** (all use `clamp()` for fluid sizing):

| Class | Font | Size Range | Line Height |
|---|---|---|---|
| `.text-display-xl` | Howards Eight | 2.5rem–4rem | 1.1 |
| `.text-display-lg` | Howards Eight | 2rem–3rem | 1.15 |
| `.text-heading-xl` | Howards Eight | 1.75rem–2.25rem | 1.2 |
| `.text-heading-lg` | Howards Eight | 1.5rem–1.875rem | 1.25 |
| `.text-heading-md` | Howards Eight | 1.25rem–1.5rem | 1.3 |
| `.text-body-xl` | Gilroy | 1.125rem–1.25rem | 1.6 |
| `.text-body-lg` | Gilroy | 1rem–1.125rem | 1.6 |
| `.text-body` | Gilroy | 1rem | 1.6 |
| `.text-caption` | Gilroy | 0.875rem | 1.4 |

**Branded Button Classes**:
- `.btn-cmdf-primary` — Gold gradient background, black text, rounded, shadow, hover lift
- `.btn-cmdf-secondary` — Solid gold background, black text, hover darkens
- `.btn-nav-gold` — Gold pill button for navbar (pill-shaped, shadow, hover to dark gold)

**Animation Classes**:
- `.fade-in` — Opacity 0 → 1, translateY(30px) → 0 on `.visible`
- `.fade-in-delay-1` through `.fade-in-delay-4` — Staggered variants (0.1s–0.7s delay)
- `.bell-ring` / `.bell-continuous` — Bell ringing keyframe for donate nav icon
- `.leadership-photo` — Scale + shadow on hover

**Background Textures**:
- `.bg-linen-texture` — Earthy linen pattern (#f0ebe3 base with SVG dot pattern)

**Navigation Styles**:
- `.nav-link` — Underline grow-on-hover effect (gold, 2px, expands from left)
- Header nav link hover — Gold color on hover

**Desktop Nav Visibility Override** (bottom of file):
```css
@media (min-width:1024px) {
  header nav > div.hidden { display: flex !important; }
  #mobile-menu-btn { display: none !important; }
}
```
This explicit override ensures desktop nav is visible regardless of Tailwind cascade issues. See [Troubleshooting](#troubleshooting) for why this exists.

---

## Typography System

### Font Stack Strategy
| Purpose | Primary | Fallbacks |
|---|---|---|
| Body text | Gilroy | Inter → system-ui → sans-serif |
| Headings/Display | Howards Eight | Georgia → Times New Roman → serif |
| Navigation/UI | Inter | system-ui → sans-serif |
| Hero titles | Fredericka the Great | cursive |
| Hero body | Gilroy / Elms Sans | sans-serif |
| Fallback body | Roboto | system fonts |

### Responsive Typography
- **Fluid scaling**: All heading/body classes use `clamp()` for smooth scaling
- **Optimized line heights**: 1.1 for display, 1.2–1.3 for headings, 1.6 for body
- **Letter spacing**: Negative for large headings (`-0.025em`), neutral for body

---

## Color Usage Patterns

### 1. Tailwind Utilities with Brand Colors
```html
<div class="bg-gold text-cmdf-black">
<h2 class="text-steel-blue">
<button class="border-celestial-blue">
```

### 2. Custom Component Classes
```html
<button class="btn-cmdf-primary">
<div class="card-cmdf">
<input class="input-cmdf">
```

### 3. CSS Custom Properties (inline styles)
```html
<div style="color: var(--steel-blue)">
<div style="background-color: var(--cmdf-black)">
```

### Common Background Patterns
- `bg-white` — Default content sections
- `bg-light-gray` — Alternating sections (#f5f5f5)
- `bg-linen-texture` — Earthy texture for visual breaks (about values, partners sponsors)
- `bg-black` / `var(--cmdf-black)` — Header, footer, impact ribbon
- `#FBF5E6` / `#FFF8E9` — Warm cream tones for forms, signup strips

---

## Responsive Strategy

### Tailwind Breakpoints (mobile-first)
- Base: Mobile styles
- `md:` — Tablet (768px)
- `lg:` — Desktop (1024px)
- `xl:` — Large desktop (1280px)

### Custom Breakpoints
- `700px` — Form grid and footer strip stack to single column (in `palette.css`)

### Responsive Patterns Used
- `clamp()` for fluid typography
- Tailwind grid responsive: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- `max-w-*` classes for readable line lengths
- `container mx-auto px-6` for consistent page margins
- `hidden lg:flex` / `lg:hidden` for nav desktop/mobile toggle

---

## File Structure

```
assets/
├── palette.css              # Brand colors (CSS vars) + form/footer/thank-you components
├── cmdf-components.css      # Custom fonts, typography, buttons, cards, animations, textures
├── tailwind-built.css       # GENERATED at deploy — do not edit, gitignored
├── Gilroy-Regular.ttf       # Custom brand body font (145KB)
└── howards-eight.ttf        # Custom display/heading font (56KB)

(project root)
├── tailwind-input.css       # Tailwind source directives — committed to git
└── tailwind.config.js       # Tailwind CLI config — committed to git
```

---

## Third-Party CSS Dependencies

| Library | Source | Used For |
|---|---|---|
| Tailwind CSS | CLI build (v3) | Utility-first CSS framework |
| Google Fonts | CDN | Roboto, Fredericka the Great, Elms Sans, Inter |
| Font Awesome 6.5.1 | CDN (cdnjs) | Icons throughout site |
| EventCalendar | CDN (jsDelivr) | Calendar component on events.html (CSS + JS) |

---

## Migration from CDN to Static Build

### What changed

**Before (CDN approach, pre-commit `7b3b7d5`):**
```html
<!-- Tailwind loaded as JS CDN — generates classes in the browser at runtime -->
<script src="https://cdn.tailwindcss.com"></script>

<!-- Config used browser global format -->
<script src="assets/tailwind-config.js"></script>
<!-- tailwind-config.js content: tailwind.config = { theme: { extend: {...} } } -->
```

**After (static build, current):**
```html
<!-- Tailwind loaded as pre-built CSS — no runtime class generation -->
<link rel="stylesheet" href="assets/tailwind-built.css">
<!-- tailwind-config.js removed; tailwind.config.js (Node format) used by CLI -->
```

### Why the migration happened

The CDN approach has several production drawbacks:
- **Performance**: Tailwind CDN downloads ~300KB of JS, then generates CSS on the client. The static CSS file is ~30-50KB and loads instantly.
- **No build control**: CDN version updates automatically. Pinning to a specific version requires workarounds.
- **Hydration flash**: Page may render briefly without styles before the CDN script parses all classes.

### Key differences to understand

| Aspect | CDN | Static Build |
|---|---|---|
| When CSS is generated | In the browser, on every page load | At deploy time, once |
| Config file format | `tailwind.config = {...}` (browser global) | `module.exports = {...}` (Node.js) |
| Unused class removal | No — CDN generates all possible classes | Yes — only scanned classes included |
| Adding new classes | Works immediately | Must rebuild (Netlify handles this) |
| Version control | Auto-updates to latest | Pinned with `tailwindcss@3` |

### What to watch out for

**Dynamic class names**: If you build class names with string concatenation in JS, the Tailwind CLI won't find them during the content scan. Use complete class names:
```javascript
// Bad — CLI can't detect these:
const color = 'blue';
el.className = `text-${color}-500`;

// Good — full class names are scannable:
el.className = condtion ? 'text-blue-500' : 'text-red-500';
```

**New HTML files**: If you add a new `.html` file, its Tailwind classes will be found automatically because `tailwind.config.js` scans `./*.html`. If you add templates in a subdirectory, add that path to `content` in `tailwind.config.js`.

---

## Troubleshooting

### "Specified input file assets/tailwind-input.css does not exist"

**Cause**: `assets/tailwind-input.css` was missing from the git repository (was gitignored).

**Fix**: Ensure `tailwind-input.css` is committed. It should contain:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
Check `.gitignore` — only `assets/tailwind-built.css` should be ignored, not `tailwind-input.css`.

---

### Tailwind build fails with exit code 1 (no useful error message)

**Most likely cause**: Tailwind v4 was installed instead of v3.

Tailwind v4 (released 2025) completely removed `@tailwind base/components/utilities` directives. If `npx --yes tailwindcss` runs without a version pin, it installs the latest — which is now v4.

**Fix**: Pin the version in `build.sh`:
```bash
# Wrong — installs latest (currently v4):
npx --yes tailwindcss -i ...

# Correct — pins to v3:
npx --yes tailwindcss@3 -i ...
```

**To check which version is running locally**:
```bash
npx tailwindcss@3 --version
# Should output: tailwindcss v3.x.x
```

---

### A Tailwind class exists in HTML but has no effect on the live site

Several possible causes:

**1. Class name is dynamically constructed (not scannable)**
The Tailwind CLI scans HTML as text. If a class is built with string concatenation in JS, it won't be included in the build. Use complete, literal class names in HTML.

**2. CSS cache serving stale file**
The `netlify.toml` sets `Cache-Control: public, max-age=31536000, immutable` for CSS files. If a browser or CDN edge cached the old version with `immutable`, it will never re-fetch.

To force cache-bust, add or change a query string on the `<link>` tag:
```html
<link rel="stylesheet" href="assets/tailwind-built.css?v=2">
```

**3. Class conflicts with `cmdf-components.css`**
`cmdf-components.css` uses `!important` on many font and color rules. If a Tailwind utility isn't applying, check if `cmdf-components.css` has a conflicting `!important` rule.

---

### Desktop navigation disappears (hidden lg:flex not working)

This was an actual production issue encountered in February 2025. The root cause was a combination of Netlify CDN edge caching (`immutable`) and a cascade order problem.

**How `hidden lg:flex` is supposed to work:**
```css
/* From tailwind-built.css: */
.hidden { display: none; }          /* specificity: 0-1-0 */

@media (min-width: 1024px) {
  .lg\:flex { display: flex; }      /* specificity: 0-1-0, but LATER in file = wins */
}
```

The mobile-first pattern requires `.lg:flex` to appear **after** `.hidden` in the stylesheet. Tailwind's CLI output always does this correctly.

**Why it can fail in production:**
- Netlify CDN edge nodes may serve a stale `tailwind-built.css` from before the build that generates the correct output
- The `immutable` cache directive prevents browsers from revalidating

**The fix applied**: An explicit, higher-specificity override was added to `cmdf-components.css` (which loads after `tailwind-built.css` and is always delivered fresh):
```css
@media (min-width: 1024px) {
  header nav > div.hidden { display: flex !important; }  /* specificity: 0-1-1 */
  #mobile-menu-btn { display: none !important; }
}
```

This is intentional — `cmdf-components.css` loads after `tailwind-built.css` and serves as the reliable override layer.

---

### A class works in development but not in the Netlify build

**Check 1**: Does the class appear as a complete string in a `.html` file? The CLI only scans `*.html` files (per `tailwind.config.js` `content`).

**Check 2**: Is the HTML file in the project root? The scan is `./*.html` — subdirectory HTML files are not scanned.

**Check 3**: Is the class a Tailwind core class or a custom extension? Custom colors like `bg-gold` and `text-steel-blue` are defined in `tailwind.config.js`. If `tailwind.config.js` isn't committed or is malformed, custom classes won't appear in the output.

**Check 4**: Look at the Netlify build log for the actual `npx tailwindcss@3` output — it will show how many classes were generated and any warnings.
