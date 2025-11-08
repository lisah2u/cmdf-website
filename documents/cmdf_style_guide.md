# CMDF Website Style Guide

## Brand Identity

### Logo & Mission
The Cacapon Music and Dance Foundation logo features a circular design with golden figures dancing in a circle, symbolizing community, connection, and cultural preservation. The logo represents our mission to nurture West Virginia's cultural heritage through music and dance education.

### Brand Voice
- Warm and welcoming
- Community-focused
- Heritage-conscious
- Inspiring and uplifting
- Professional yet approachable

## Color Palette

Based on the CMDF logo and defined in `assets/palette.css`:

### Primary Colors
- **Steel Blue**: `#437CA5` - Primary brand color, conveys trust and stability
- **Celestial Blue**: `#549ED2` - Lighter accent, represents hope and aspiration
- **Hunyadi Yellow** (Gold): `#E7BB5F` - Gold accent from logo, warmth and energy
- **Lion**: `#B29251` - Deeper gold, heritage and tradition
- **CMDF Black**: `#07070A` - Text and emphasis

### Utility Colors
- **Light Gray**: `#f5f5f5` - Background and neutral tones
- **Medium Gray**: `#666666` - Secondary text and subtle elements

### Color Usage Guidelines
- **Steel Blue**: Headers, navigation, primary elements
- **Celestial Blue**: Secondary buttons, links, highlights
- **Gold (Hunyadi Yellow)**: Call-to-action accents, featured elements, branded buttons
- **Lion**: Hover states, borders, subtle accents
- **CMDF Black**: Body text, headings, important content

### Accessibility
All color combinations maintain WCAG 2.1 AA contrast ratios:
- Black text on light backgrounds: 21:1 contrast
- Steel Blue on white: 4.8:1 contrast
- Gold provides sufficient contrast when used appropriately
- Ensure sufficient contrast for all interactive elements

## Typography System

### Font Architecture
The CMDF website uses a sophisticated typography hierarchy with custom brand fonts:

#### Primary Font Families
```css
/* Custom Brand Fonts */
'Howards Eight'    /* Display and headings - serif, elegant */
'Gilroy'          /* Body text and UI - sans-serif, clean */

/* Web Fonts */
'Fredericka the Great'  /* Hero titles - decorative */
'Inter'                 /* Navigation - modern sans-serif */
'Roboto'               /* Fallback font */
```

#### Font Stack Strategy
- **Display/Headings**: Howards Eight → Georgia → Times New Roman → serif
- **Body Text**: Gilroy → Inter → system-ui → sans-serif
- **Navigation**: Inter → system-ui → sans-serif
- **Hero Titles**: Fredericka the Great → cursive
- **System Fallback**: Roboto → Apple/Windows system fonts

### Semantic Typography Classes

#### Display Text (Howards Eight - Large Headings)
```css
.text-display-xl    /* Hero headings: 2.5rem-4rem, fluid responsive */
.text-display-lg    /* Section headings: 2rem-3rem, fluid responsive */
```

#### Content Headings (Howards Eight - Content Structure)
```css
.text-heading-xl    /* Main headings: 1.75rem-2.25rem */
.text-heading-lg    /* Sub headings: 1.5rem-1.875rem */
.text-heading-md    /* Small headings: 1.25rem-1.5rem */
```

#### Body Text (Gilroy - Readable Content)
```css
.text-body-xl       /* Large body text: 1.125rem-1.25rem */
.text-body-lg       /* Standard body text: 1rem-1.125rem */
.text-body          /* Regular body text: 1rem */
.text-caption       /* Labels/small text: 0.875rem */
```

### Typography Features
- **Fluid Responsive**: Uses `clamp()` for automatic scaling across devices
- **Optimized Line Heights**: 1.1-1.6 based on text purpose
- **Letter Spacing**: Negative for large headings, optimized for readability
- **Font Loading**: Efficient fallbacks prevent layout shift

### Usage Examples
```html
<!-- Large hero headings -->
<h1 class="text-display-xl text-cmdf-black">

<!-- Section headings -->
<h2 class="text-display-lg text-cmdf-black">

<!-- Content headings -->
<h3 class="text-heading-xl text-cmdf-black">

<!-- Body content -->
<p class="text-body-lg text-medium-gray">

<!-- Form labels -->
<label class="text-caption text-cmdf-black block font-medium">
```

## Spacing System

### Base Unit: 1rem = 16px

#### Spacing Scale (Tailwind)
- **xs**: 0.25rem (4px)
- **sm**: 0.5rem (8px)
- **md**: 1rem (16px)
- **lg**: 1.5rem (24px)
- **xl**: 2rem (32px)
- **2xl**: 3rem (48px)
- **3xl**: 4rem (64px)
- **4xl**: 6rem (96px)

#### Layout Spacing
- **Section padding**: 4xl (96px) desktop, 2xl (48px) mobile
- **Container max-width**: 1200px
- **Container padding**: xl (32px) desktop, lg (24px) mobile
- **Grid gaps**: lg (24px) desktop, md (16px) mobile

## Component Styles

### Buttons

#### Primary Button (CMDF Gold)
```css
.btn-cmdf-primary {
  background: linear-gradient(to right, #E7BB5F, #B29251);
  color: #07070A;
  border: 3px solid #E7BB5F;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  transition: all 0.2s ease;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.btn-cmdf-primary:hover {
  background: linear-gradient(to right, #B29251, #A08245);
  transform: translateY(-2px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}
```

#### Secondary Button
```css
.btn-cmdf-secondary {
  background: #E7BB5F;
  color: #07070A;
  border: 3px solid #E7BB5F;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  transition: all 0.2s ease;
}

.btn-cmdf-secondary:hover {
  background: #B29251;
  border-color: #B29251;
  transform: translateY(-2px);
}
```

#### Navigation Gold Button
```css
.btn-nav-gold {
  background-color: #E7BB5F;
  color: #07070A;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-weight: 600;
  font-size: 0.875rem;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.25);
  transition: all 0.2s ease;
}

.btn-nav-gold:hover {
  background-color: #B29251;
  color: white;
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.3);
}
```

### Cards

#### Standard Card (CMDF Style)
```css
.card-cmdf {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  border: 1px solid rgba(67, 124, 165, 0.1);
  transition: all 0.2s ease;
}

.card-cmdf:hover {
  box-shadow: 0 10px 25px rgba(0,0,0,0.15);
  transform: translateY(-4px);
}
```

### Forms

#### Input Fields (CMDF Style)
```css
.input-cmdf {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 2px solid rgba(67, 124, 165, 0.2);
  border-radius: 0.5rem;
  font-size: 1rem;
  background: white;
  transition: all 0.2s ease;
  font-family: 'Gilroy', sans-serif;
}

.input-cmdf:focus {
  outline: none;
  border-color: #549ED2;
  box-shadow: 0 0 0 2px rgba(84, 158, 210, 0.2);
}
```

## Layout Guidelines

### CSS Architecture
The website uses a hybrid approach combining Tailwind CSS with custom brand components:

- **Tailwind CSS**: Layout, spacing, responsive utilities
- **Custom CSS**: Brand typography, colors, animations
- **Components**: Branded buttons, forms, cards with CMDF styling

### Grid System & Breakpoints
- **Container**: max-width 1200px, centered with padding
- **Tailwind Responsive**:
  - Mobile: Default (0-768px)
  - `md:`: Tablet (768px+)
  - `lg:`: Desktop (1024px+)
  - `xl:`: Large screens (1280px+)

### Section Structure
```html
<!-- Standard section with semantic typography -->
<section class="py-20 bg-white">
  <div class="container mx-auto px-6">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-display-lg text-cmdf-black mb-6">Section Title</h2>
        <p class="text-body-lg text-medium-gray max-w-3xl mx-auto">
          Section description using semantic typography.
        </p>
      </div>
    </div>
  </div>
</section>
```

## Interactive Elements

### Animations & Effects
```css
/* Fade-in animations with staggered delays */
.fade-in {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}

.fade-in-delay-1 { transition-delay: 0.1s; }
.fade-in-delay-2 { transition-delay: 0.3s; }
.fade-in-delay-3 { transition-delay: 0.5s; }
```

### Hover Effects
- **Cards**: `translateY(-4px)` with enhanced shadow
- **Buttons**: `translateY(-2px)` with color transitions
- **Links**: Color change to brand colors
- **Images**: Subtle scale or overlay effects

### Transitions
- **Standard**: `transition: all 0.2s ease`
- **Slow**: `transition: all 0.3s ease` for larger elements
- **Fast**: `transition: all 0.15s ease` for small interactions

## CSS Custom Properties

### Brand Color Variables
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

### Tailwind Integration
Colors are mapped to Tailwind utilities for easy use:
```html
<div class="bg-gold text-cmdf-black">
<h2 class="text-steel-blue">
<button class="border-celestial-blue">
```

## Images & Media

### Image Guidelines
- Use high-quality, authentic photos of music and dance activities
- Maintain consistent color grading that complements the brand palette
- Optimize for web (WebP format when possible)
- Provide alt text for all images

### Image Treatments
```css
.image-rounded {
  border-radius: 12px;
  overflow: hidden;
}

.hero-bg {
  background-image: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('image.jpg');
  background-size: cover;
  background-position: center;
}
```

## Responsive Design

### Mobile-First Approach
- Design for mobile first, enhance for larger screens
- Touch-friendly button sizes (minimum 44px)
- Readable font sizes on small screens (fluid scaling)
- Semantic typography automatically scales

### Responsive Typography Usage
```html
<!-- Automatically responsive with clamp() -->
<h1 class="text-display-xl">   <!-- Scales from 2.5rem to 4rem -->
<h2 class="text-display-lg">   <!-- Scales from 2rem to 3rem -->
<p class="text-body-lg">       <!-- Scales from 1rem to 1.125rem -->
```

## Accessibility Standards

### WCAG 2.1 AA Compliance
- Minimum contrast ratio of 4.5:1 for normal text
- Minimum contrast ratio of 3:1 for large text
- All interactive elements keyboard accessible
- Proper heading hierarchy using semantic classes
- Alt text for all meaningful images

### Screen Reader Considerations
- Use semantic HTML elements
- Provide skip links for navigation
- Use ARIA labels when necessary
- Ensure focus management in dynamic content

### Focus States
```css
.input-cmdf:focus,
.btn-cmdf-primary:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(84, 158, 210, 0.3);
}
```

## Implementation Best Practices

### CSS Architecture Files
1. **`assets/palette.css`** - Brand colors (CSS custom properties)
2. **`assets/tailwind-config.js`** - Tailwind extensions (colors, fonts)
3. **`assets/cmdf-components.css`** - Typography, components, animations

### Performance Considerations
- Custom fonts with efficient fallbacks prevent layout shift
- Tailwind CDN with selective custom CSS
- Optimized images and modern formats
- Critical CSS for above-the-fold content

### Development Workflow
1. Use semantic typography classes for all text
2. Apply Tailwind utilities for layout and spacing
3. Use CMDF components for branded elements
4. Test across devices and browsers
5. Validate accessibility compliance

---

*This style guide ensures the CMDF website maintains visual consistency while honoring West Virginia's cultural heritage through thoughtful design choices that leverage professional typography and brand-focused components.*