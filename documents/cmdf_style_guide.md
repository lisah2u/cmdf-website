# CMDF Website Style Guide

## Brand Identity

### Logo & Mission
The Cacapon Music and Dance Foundation logo features a circular design with golden figures dancing in a circle, symbolizing community, connection, and cultural preservation. The logo represents our mission to nurture West Virginia's cultural heritage through music and dance education.

Logo file: `images/CMDF_LOGO_COLOR_8_x8_300_dpi.png`

### Brand Voice
- Warm and welcoming
- Community-focused
- Heritage-conscious
- Inspiring and uplifting
- Professional yet approachable

---

## Color Palette

Defined in `assets/palette.css` and `assets/tailwind-config.js`.

### Primary Brand Colors

| Name | Hex | Tailwind Class | Usage |
|---|---|---|---|
| Steel Blue | `#437CA5` | `text-steel-blue`, `bg-steel-blue` | Headers, navigation, primary elements, form buttons |
| Celestial Blue | `#549ED2` | `text-celestial-blue`, `bg-celestial-blue` | Secondary buttons, links, highlights, focus rings |
| Gold (Hunyadi Yellow) | `#E7BB5F` | `text-gold`, `bg-gold` | CTAs, branded buttons, accents, nav bell icon |
| Gold Light | `#F3D9A3` | `text-gold-light`, `bg-gold-light` | Subtle gold highlights |
| Gold Dark (Lion) | `#B29251` | `text-gold-dark`, `bg-gold-dark` | Hover states, borders, gradient endpoints |
| CMDF Black | `#07070A` | `text-cmdf-black`, `bg-cmdf-black` | Body text, headings, header, footer |

### Utility Colors

| Name | Hex | Tailwind Class | Usage |
|---|---|---|---|
| Light Gray | `#f5f5f5` | `bg-light-gray` | Alternating section backgrounds |
| Medium Gray | `#666666` | `text-medium-gray` | Secondary text, descriptions |

### Background Colors

| Name | Hex/Class | Usage |
|---|---|---|
| White | `bg-white` | Default content sections |
| Light Gray | `bg-light-gray` | Alternating sections for visual rhythm |
| Linen Texture | `bg-linen-texture` | Earthy textured sections (values, sponsors) |
| Black | `bg-black` | Header, footer, impact ribbon |
| Warm Cream | `#FBF5E6` | Hero backgrounds, thank-you page |
| Soft Warm | `#FFF8E9` | Email signup strip, event hover, calendar highlights |

### Section Background Pattern
Sections alternate backgrounds to create visual rhythm:
```
White → Light Gray → White → Linen Texture → White → Black (impact) → ...
```
Full-width backgrounds must be on `<section>` elements, not nested containers.

### Accessibility
All color combinations maintain WCAG 2.1 AA contrast ratios:
- Black text on light backgrounds: 21:1 contrast
- Steel Blue on white: 4.8:1 contrast
- Gold provides sufficient contrast when used on dark backgrounds
- Ensure sufficient contrast for all interactive elements

---

## Typography System

### Font Families

| Font | Type | Usage |
|---|---|---|
| Howards Eight | Local TTF, serif | Display headings, section titles, calendar day headers |
| Gilroy | Local TTF, sans-serif | Body text, descriptions, UI content |
| Inter | Google Fonts, sans-serif | Navigation, buttons, UI labels |
| Fredericka the Great | Google Fonts, cursive | Hero page titles |
| Elms Sans | Google Fonts, sans-serif | Hero body text |
| Roboto | Google Fonts, sans-serif | System fallback |

### Font Stacks
- **Display/Headings**: Howards Eight > Georgia > Times New Roman > serif
- **Body Text**: Gilroy > Inter > system-ui > sans-serif
- **Navigation**: Inter > system-ui > sans-serif
- **Hero Titles**: Fredericka the Great > cursive
- **Hero Body**: Gilroy / Elms Sans > sans-serif
- **System Fallback**: Roboto > Apple/Windows system fonts

### Semantic Typography Classes

All heading classes use `clamp()` for fluid responsive scaling.

#### Display Text (Howards Eight)
```css
.text-display-xl    /* 2.5rem-4rem, line-height 1.1 — Hero headings */
.text-display-lg    /* 2rem-3rem, line-height 1.15 — Section headings */
```

#### Content Headings (Howards Eight)
```css
.text-heading-xl    /* 1.75rem-2.25rem, line-height 1.2 */
.text-heading-lg    /* 1.5rem-1.875rem, line-height 1.25 */
.text-heading-md    /* 1.25rem-1.5rem, line-height 1.3 */
```

#### Body Text (Gilroy)
```css
.text-body-xl       /* 1.125rem-1.25rem, line-height 1.6 */
.text-body-lg       /* 1rem-1.125rem, line-height 1.6 */
.text-body          /* 1rem, line-height 1.6 */
.text-caption       /* 0.875rem, line-height 1.4 */
```

#### Legacy Classes (still in use across pages)
```css
.typography-display     /* Howards Eight, line-height 1.1 */
.typography-heading     /* Howards Eight, line-height 1.2 */
.typography-body        /* Gilroy, line-height 1.6 */
.typography-caption     /* Gilroy, 0.875rem */
```

### Typography Usage
```html
<!-- Hero heading -->
<h1 class="text-display-xl text-cmdf-black">

<!-- Section heading -->
<h2 class="text-4xl font-bold text-cmdf-black mb-6 typography-heading">

<!-- Body paragraph -->
<p class="text-lg text-medium-gray typography-body">

<!-- Caption / label -->
<label class="text-caption text-cmdf-black block font-medium">
```

---

## Component Styles

### Buttons

#### Primary Button (Gold Gradient)
```html
<a href="#" class="btn-cmdf-primary">Get Involved</a>
```
Gold-to-dark-gold gradient, black text, 3px border, rounded-lg, shadow, lifts on hover.

#### Secondary Button (Solid Gold)
```html
<a href="#" class="btn-cmdf-secondary">Learn More</a>
```
Solid gold background, black text, darkens on hover.

#### Navigation Gold Pill
```html
<a href="donate.html" class="btn-nav-gold">Donate</a>
```
Gold pill button (border-radius 9999px), shadow, used in navbar for branded CTAs.

#### Outline Button
```html
<a href="#" class="btn-cmdf-outline">Details</a>
```
Transparent with celestial-blue border, fills on hover.

#### Generic Button (Steel Blue)
```html
<a href="#" class="btn">Return Home</a>
```
Steel blue, rounded, used on utility pages (thank-you, contact-success).

#### Gold Pill CTA (inline Tailwind)
Used for CTAs like "View Our Full 2025 Annual Report":
```html
<a href="#" class="inline-flex items-center gap-3 bg-gold hover:bg-dark-gold text-cmdf-black font-semibold py-3 px-8 rounded-full transition-all duration-200 hover:-translate-y-1 shadow-lg" style="font-family: 'Inter', sans-serif;">
    <i class="fas fa-file-pdf text-lg"></i>
    View Our Full 2025 Annual Report
</a>
```

### Cards

#### Standard Card
```html
<div class="card-cmdf">
```
White, rounded-xl (12px), padding 1.5rem, subtle border, shadow, lifts on hover (-4px).

#### Leadership Photo
```html
<img class="leadership-photo rounded-full" src="..." alt="...">
```
Scales to 1.08x on hover with gold-tinted shadow.

### Forms

#### Input Fields
```html
<input class="input-cmdf" type="text">
```
Full-width, 2px border (steel-blue tint), rounded-lg, celestial-blue focus ring.

#### Footer Signup Strip
```html
<section class="footer-strip">
    <div class="footer-strip-inner">
```
Soft warm background (#FFF8E9), centered layout, pill-shaped email input and steel-blue submit button. Used on most pages.

#### Contact/Newsletter Form
```html
<section class="contact-newsletter">
    <div class="contact-wrapper">
```
Warm cream background (#FBF5E6), white card with shadow, 2-column grid layout, steel-blue submit button. Used on donate page.

### FAQ Accordion
```html
<button class="faq-question" aria-expanded="false" aria-controls="faq-1">
    <span>Question text</span>
    <span class="faq-icon">...</span>
</button>
<div id="faq-1" class="faq-answer hidden">
    <p>Answer text</p>
</div>
```
Expand/collapse with smooth max-height transition. Icon rotates 180deg when open. Only one FAQ open at a time. Used on donate and dance pages.

### Testimonial Carousel
```html
<div class="testimonial-slide" data-slide="0">
```
Slides with opacity transition, prev/next arrows, dot navigation, 6-second autoplay. Large decorative quote mark (Georgia, 64px, gold, 30% opacity). Used on donate page.

---

## Layout Patterns

### Page Structure
```
Header (fixed, black, z-50)
  └── Nav: left links | centered logo | right branded links
Hero Section (page-specific background)
Content Sections (alternating backgrounds)
Footer Email Signup (.footer-strip)
Footer (black, copyright + EIN + annual report link)
```

### Header
- Fixed position, black background, full-width
- Centered logo overlaps header bottom edge (`top-full -translate-y-[55%]`)
- Logo: `h-20 md:h-24`, scales on scroll via JS (1.2x at top, shrinks to 0.8x)
- Left nav: About, Programs, Events, Partners
- Right nav: Donate (with gold bell icon), Scholarships, Dance
- Mobile: Hamburger toggle, links stacked vertically

### Standard Section
```html
<section class="py-20 bg-white">
    <div class="container mx-auto px-6">
        <div class="max-w-6xl mx-auto">
            <div class="text-center mb-16 fade-in">
                <h2 class="text-4xl font-bold text-cmdf-black mb-6 typography-heading">Section Title</h2>
                <p class="text-lg text-medium-gray max-w-3xl mx-auto typography-body">Description.</p>
            </div>
            <!-- Grid content -->
        </div>
    </div>
</section>
```

### Hero Sections
Two patterns used across the site:

#### Full background image hero
```html
<section class="relative min-h-[50vh] text-white">
    <!-- Background set via page-specific CSS class -->
    <div class="absolute inset-0 bg-black/20"></div>
    <div class="relative z-10 container mx-auto px-6 text-center flex items-center justify-center min-h-[50vh] fade-in">
        <div>
            <h1 class="text-5xl md:text-6xl font-bold mb-6 typography-heading">Page Title</h1>
            <p class="text-xl md:text-2xl max-w-3xl mx-auto typography-body">Subtitle.</p>
        </div>
    </div>
</section>
```
Background images use CSS gradient overlays: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url('...')`

#### Light hero band (programs page)
```html
<section class="programs-hero-band pt-32 pb-16 text-center">
```
Light blue tinted background, no image.

### Footer
```html
<footer class="bg-black py-6">
    <div class="container mx-auto px-6 text-center">
        <p class="text-white font-medium">
            &copy; 2025 Cacapon Music and Dance Foundation. All rights reserved.
        </p>
        <p class="text-white/60 text-sm mt-2" style="font-family: 'Gilroy', sans-serif;">
            501(c)(3) Nonprofit Organization &middot; EIN: 93-3118214 &middot;
            <a href="2025%20Annual%20Report.pdf" class="text-gold hover:underline">2025 Annual Report</a>
        </p>
    </div>
</footer>
```

### Grid Patterns
- 2-column: `grid md:grid-cols-2 gap-12` (mission, what we do)
- 3-column: `grid md:grid-cols-2 lg:grid-cols-3 gap-8` (values, programs)
- 4-column: `grid md:grid-cols-2 lg:grid-cols-4 gap-8` (leadership, sponsors)
- 5-column: `grid grid-cols-2 md:grid-cols-5 gap-8` (impact stats)

---

## Animations & Effects

### Fade-In on Scroll
Triggered by IntersectionObserver in `js/main.js`:
```html
<div class="fade-in">          <!-- 0.6s ease-out -->
<div class="fade-in-delay-1">  <!-- +0.1s delay -->
<div class="fade-in-delay-2">  <!-- +0.3s delay -->
<div class="fade-in-delay-3">  <!-- +0.5s delay -->
<div class="fade-in-delay-4">  <!-- +0.7s delay -->
```
Elements start at `opacity: 0; translateY(30px)` and animate to visible when scrolled into view.

### Bell Animation
```html
<i class="fas fa-bell text-sm text-gold bell-continuous"></i>
```
Continuous bell ringing animation on the Donate nav link. Gold color always.

### Hover Effects
- **Cards** (`card-cmdf`): `translateY(-4px)` with enhanced shadow
- **Buttons** (`btn-cmdf-primary`, `btn-cmdf-secondary`): `translateY(-2px)` with color transition
- **Leadership photos**: `scale(1.08)` with gold-tinted shadow
- **Nav links**: Gold underline grows from left (`width: 0 → 100%`)
- **Links**: Color transition to brand gold on hover

### Transitions
- **Standard**: `transition: all 0.2s ease` (buttons, cards)
- **Slow**: `transition: all 0.3s ease` (nav links, larger elements)
- **Animations**: `transition: 0.6s-0.8s ease-out` (fade-ins, bell)

---

## Responsive Design

### Breakpoints (mobile-first)
- Base: Mobile (0–767px)
- `md:`: Tablet (768px+)
- `lg:`: Desktop (1024px+)
- `xl:`: Large screens (1280px+)
- `700px`: Custom breakpoint for forms (in `palette.css`)

### Responsive Patterns
- **Typography**: Fluid scaling via `clamp()` — no breakpoint-specific font sizes needed
- **Grids**: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` (progressive columns)
- **Navigation**: `hidden lg:flex` for desktop nav, `lg:hidden` for mobile toggle
- **Container**: `container mx-auto px-6` (consistent margins)
- **Line length**: `max-w-3xl mx-auto` for readable paragraph widths
- **Touch targets**: Minimum 44px for interactive elements

---

## Spacing System

### Base Unit: 1rem = 16px

| Token | Size | Usage |
|---|---|---|
| xs | 0.25rem (4px) | Tight spacing |
| sm | 0.5rem (8px) | Icon gaps |
| md | 1rem (16px) | Standard gaps |
| lg | 1.5rem (24px) | Card padding, grid gaps |
| xl | 2rem (32px) | Container padding |
| 2xl | 3rem (48px) | Section padding (mobile) |
| 3xl | 4rem (64px) | Large spacing |
| 4xl | 6rem (96px) | Section padding (desktop) |

### Layout Spacing
- **Section padding**: `py-20` (5rem/80px)
- **Container max-width**: 1200px (`max-w-6xl` or `max-w-7xl`)
- **Container padding**: `px-6` (1.5rem/24px)
- **Grid gaps**: `gap-8` (2rem/32px) desktop, `gap-4` mobile
- **Heading margin-bottom**: `mb-6` (1.5rem) for headings, `mb-16` (4rem) for section intros

---

## Images & Media

### Image Guidelines
- Use high-quality, authentic photos of music and dance activities
- Maintain consistent color grading that complements the brand palette
- Provide descriptive alt text for all images
- Use local images from `images/` directory (not stock photo URLs where possible)

### Hero Background Pattern
```css
.page-hero-bg {
    background-image: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url('images/photo.jpg');
    background-size: cover;
    background-position: center;
}
```
Dark gradient overlay ensures text readability over images.

### Image Treatments
- **Rounded corners**: `rounded-lg` (8px) for content images, `rounded-full` for portraits
- **Shadow**: `shadow-xl` for standalone images
- **Object fit**: `object-cover` with fixed height (`h-96`, `h-32`) for consistent sizing
- **Gold overlay**: Used on about page images (`bg-gold opacity-60 mix-blend-multiply`)

### Video
- Homepage uses local video background: `square-dance-trimmed.mp4`
- YouTube embeds on dance page: responsive `aspect-video` with `rounded-lg`

---

## Accessibility

### WCAG 2.1 AA Compliance
- Minimum contrast ratio of 4.5:1 for normal text
- Minimum contrast ratio of 3:1 for large text
- All interactive elements keyboard accessible
- Proper heading hierarchy (one H1 per page)
- Alt text for all meaningful images

### Focus States
```css
.input-cmdf:focus {
    outline: none;
    border-color: #549ED2;
    box-shadow: 0 0 0 2px rgba(84, 158, 210, 0.2);
}
```

### Keyboard Support
- ESC closes mobile menu
- FAQ accordions support Enter and Space keys
- All navigation links are focusable
- Testimonial carousel has prev/next buttons (not swipe-only)

### Screen Reader
- Semantic HTML elements throughout
- `aria-expanded` and `aria-controls` on FAQ accordions
- External links use `target="_blank" rel="noopener noreferrer"`
- Form labels associated with inputs

---

## CSS Architecture Reference

For detailed technical documentation of CSS files, loading order, and class definitions, see `documents/CSS-Architecture-Overview.md`.

### File Summary
```
assets/
├── palette.css           # Brand colors (CSS vars) + form/footer components
├── tailwind-config.js    # Tailwind theme extensions (colors, fonts, shadows)
├── cmdf-components.css   # Custom fonts, typography, buttons, cards, animations
├── Gilroy-Regular.ttf    # Brand body font
└── howards-eight.ttf     # Brand display font
```

### Three Ways to Apply Colors
```html
<!-- 1. Tailwind utility -->
<div class="bg-gold text-cmdf-black">

<!-- 2. Custom component class -->
<button class="btn-cmdf-primary">

<!-- 3. CSS custom property -->
<div style="color: var(--steel-blue)">
```
