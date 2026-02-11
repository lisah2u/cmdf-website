# CSS Architecture Overview

The CMDF website uses a **hybrid approach** combining Tailwind CSS with custom CSS for brand-specific styling and semantic typography.

## CSS Loading Sequence

Every page loads stylesheets in this order:

### 1. Tailwind CSS CDN
```html
<script src="https://cdn.tailwindcss.com"></script>
```
Provides the utility class framework.

### 2. Tailwind Configuration
```html
<script src="assets/tailwind-config.js"></script>
```
Extends Tailwind with CMDF brand colors, fonts, and design tokens. Loads *after* the CDN so it can reference `tailwind.config`.

### 3. Google Fonts
```html
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=Fredericka+the+Great&family=Elms+Sans:ital,wght@0,100..900;1,100..900&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
```
Fonts loaded: Roboto (fallback body), Fredericka the Great (hero display), Elms Sans, Inter (navigation/UI).

### 4. Font Awesome
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
```
Icons for UI elements, social media, forms, and decorative accents.

### 5. Brand Color Palette
```html
<link rel="stylesheet" href="assets/palette.css">
```
CSS custom properties for brand colors, plus form/footer/thank-you component styles.

### 6. Component Styles
```html
<link rel="stylesheet" href="assets/cmdf-components.css?v=2">
```
Custom fonts, semantic typography, animations, branded buttons, cards, and textures. Cache-busted with `?v=2` on pages that need the latest version.

### 7. Page-Specific Styles
Several pages include inline `<style>` blocks for page-only CSS:
- `index.html` — Hero background, video overlay
- `donate.html` — FAQ accordion, testimonial carousel, sponsorship cards
- `dance.html` — Hero background
- `events.html` — Hero background, EventCalendar CMDF theme overrides
- `scholarships.html` — Hero background
- `programs.html` — Hero band, program card stripes
- `contact-success.html` — Success background

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

### `assets/tailwind-config.js` — Tailwind Extensions

```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                'steel-blue': '#437CA5',
                'celestial-blue': '#549ED2',
                'gold': '#E7BB5F',
                'gold-light': '#F3D9A3',
                'gold-dark': '#B29251',
                'cmdf-black': '#07070A',
                'medium-gray': '#666666',
                'light-gray': '#f5f5f5',
                'dark-gray': '#07070A',     // legacy alias
                'brand-steel': '#437CA5',   // legacy alias
                'brand-celestial': '#549ED2', // legacy alias
                'lion': '#B29251'
            },
            fontFamily: {
                'sans': ['Roboto', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
                'gilroy': ['Gilroy', 'Inter', 'system-ui', 'sans-serif'],
                'howards': ['Howards Eight', 'Georgia', 'Times New Roman', 'serif'],
                'hero': ['Elms Sans', 'sans-serif'],
                'display': ['Fredericka the Great', 'cursive'],
                'nav': ['Inter', 'system-ui', 'sans-serif'],
            },
            borderRadius: { 'xl': '12px', '2xl': '16px' },
            boxShadow: {
                'cmdf': '0 4px 6px -1px rgba(67, 124, 165, 0.1), ...',
                'cmdf-lg': '0 10px 15px -3px rgba(67, 124, 165, 0.1), ...'
            }
        }
    }
}
```

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

**Legacy Typography Classes** (used via Tailwind-style class names):
- `.typography-display` — Howards Eight, line-height 1.1
- `.typography-heading` — Howards Eight, line-height 1.2
- `.typography-body` — Gilroy, line-height 1.6
- `.typography-caption` — Gilroy, 0.875rem

**Branded Button Classes**:
- `.btn-cmdf-primary` — Gold gradient background, black text, rounded, shadow, hover lift
- `.btn-cmdf-secondary` — Solid gold background, black text, hover darkens
- `.btn-cmdf-outline` — Transparent with celestial-blue border (uses `@apply`)
- `.btn-nav-gold` — Gold pill button for navbar (pill-shaped, shadow, hover to dark gold)

**Card & Input Components**:
- `.card-cmdf` — White, rounded-xl, shadow, border, hover lift (`@apply`)
- `.input-cmdf` — Full-width, border, rounded-lg, focus ring (`@apply`)
- `.icon-circle-gold` — Small gold circle for inline icons (`@apply`)

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
├── palette.css           # Brand colors (CSS vars) + form/footer/thank-you components
├── tailwind-config.js    # Tailwind theme extensions (colors, fonts, shadows)
├── cmdf-components.css   # Custom fonts, typography, buttons, cards, animations, textures
├── Gilroy-Regular.ttf    # Custom brand body font (145KB)
└── howards-eight.ttf     # Custom display/heading font (56KB)
```

---

## Third-Party CSS Dependencies

| Library | Source | Used For |
|---|---|---|
| Tailwind CSS | CDN (`cdn.tailwindcss.com`) | Utility-first CSS framework |
| Google Fonts | CDN | Roboto, Fredericka the Great, Elms Sans, Inter |
| Font Awesome 6.5.1 | CDN (cdnjs) | Icons throughout site |
| EventCalendar | CDN (jsDelivr) | Calendar component on events.html (CSS + JS) |
