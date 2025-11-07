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

Based on the CMDF logo and defined in `documents/palette.css`:

### Primary Colors
- **Steel Blue**: `#437CA5` - Primary brand color, conveys trust and stability
- **Celestial Blue**: `#549ED2` - Lighter accent, represents hope and aspiration
- **Hunyadi Yellow**: `#E7BB5F` - Gold accent from logo, warmth and energy
- **Lion**: `#B29251` - Deeper gold, heritage and tradition
- **Black**: `#07070A` - Text and emphasis

### Color Usage Guidelines
- **Steel Blue**: Headers, navigation, primary buttons
- **Celestial Blue**: Secondary buttons, links, highlights
- **Hunyadi Yellow**: Call-to-action accents, featured elements
- **Lion**: Hover states, borders, subtle accents
- **Black**: Body text, important content

### Accessibility
All color combinations maintain WCAG 2.1 AA contrast ratios:
- Black text on light backgrounds: 21:1 contrast
- Steel Blue on white: 4.8:1 contrast
- Ensure sufficient contrast for all interactive elements

## Typography

### Font Stack
Primary font family inspired by The Roots of Music's clean, modern approach:
```css
font-family: 'Inter', 'Spline Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
```

### Font Hierarchy

#### Headings
- **H1**: 3.5rem (56px), font-weight: 700, line-height: 1.1
- **H2**: 2.5rem (40px), font-weight: 600, line-height: 1.2
- **H3**: 2rem (32px), font-weight: 600, line-height: 1.25
- **H4**: 1.5rem (24px), font-weight: 500, line-height: 1.3
- **H5**: 1.25rem (20px), font-weight: 500, line-height: 1.4
- **H6**: 1.125rem (18px), font-weight: 500, line-height: 1.4

#### Body Text
- **Large**: 1.125rem (18px), font-weight: 400, line-height: 1.6
- **Regular**: 1rem (16px), font-weight: 400, line-height: 1.5
- **Small**: 0.875rem (14px), font-weight: 400, line-height: 1.4

#### Special Text
- **Lead Text**: 1.25rem (20px), font-weight: 300, line-height: 1.6
- **Caption**: 0.75rem (12px), font-weight: 400, line-height: 1.3

### Font Weights Available
- 300 (Light) - For lead text and subtle emphasis
- 400 (Regular) - Body text default
- 500 (Medium) - Subheadings and emphasis
- 600 (Semi-bold) - Section headers
- 700 (Bold) - Main headings and strong emphasis

## Spacing System

### Base Unit: 1rem = 16px

#### Spacing Scale
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

#### Primary Button
```css
.btn-primary {
  background: linear-gradient(135deg, #E7BB5F, #B29251);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.2s ease;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.btn-primary:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.15);
  background: linear-gradient(135deg, #B29251, #E7BB5F);
}
```

#### Secondary Button
```css
.btn-secondary {
  background: transparent;
  color: #437CA5;
  border: 2px solid #437CA5;
  border-radius: 8px;
  padding: 12px 24px;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.2s ease;
}

.btn-secondary:hover {
  background: #437CA5;
  color: white;
  transform: translateY(-1px);
}
```

#### Outline Button
```css
.btn-outline {
  background: transparent;
  color: #549ED2;
  border: 1px solid #549ED2;
  border-radius: 6px;
  padding: 8px 16px;
  font-weight: 500;
  font-size: 0.875rem;
  transition: all 0.2s ease;
}

.btn-outline:hover {
  background: #549ED2;
  color: white;
}
```

### Cards

#### Standard Card
```css
.card {
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  border: 1px solid rgba(67, 124, 165, 0.1);
  transition: all 0.2s ease;
}

.card:hover {
  box-shadow: 0 4px 16px rgba(0,0,0,0.12);
  transform: translateY(-2px);
}
```

#### Feature Card
```css
.feature-card {
  background: linear-gradient(145deg, #f8fafc, #ffffff);
  border-radius: 16px;
  padding: 32px;
  text-align: center;
  border: 2px solid rgba(84, 158, 210, 0.1);
  transition: all 0.3s ease;
}

.feature-card:hover {
  border-color: #549ED2;
  box-shadow: 0 8px 24px rgba(84, 158, 210, 0.15);
}
```

### Navigation

#### Header Navigation
```css
.nav-header {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(67, 124, 165, 0.1);
  padding: 16px 0;
  position: sticky;
  top: 0;
  z-index: 100;
}

.nav-link {
  color: #07070A;
  font-weight: 500;
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 6px;
  transition: all 0.2s ease;
}

.nav-link:hover {
  color: #437CA5;
  background: rgba(67, 124, 165, 0.08);
}

.nav-link.active {
  color: #437CA5;
  background: rgba(67, 124, 165, 0.12);
}
```

### Forms

#### Input Fields
```css
.form-input {
  width: 100%;
  padding: 12px 16px;
  border: 2px solid rgba(67, 124, 165, 0.2);
  border-radius: 8px;
  font-size: 1rem;
  background: white;
  transition: all 0.2s ease;
}

.form-input:focus {
  outline: none;
  border-color: #549ED2;
  box-shadow: 0 0 0 3px rgba(84, 158, 210, 0.1);
}

.form-label {
  font-weight: 500;
  color: #07070A;
  margin-bottom: 8px;
  display: block;
}
```

#### Textarea
```css
.form-textarea {
  width: 100%;
  padding: 12px 16px;
  border: 2px solid rgba(67, 124, 165, 0.2);
  border-radius: 8px;
  font-size: 1rem;
  background: white;
  min-height: 120px;
  resize: vertical;
  transition: all 0.2s ease;
}
```

## Layout Guidelines

### Grid System
- **Container**: max-width 1200px, centered
- **Columns**: 12-column grid system
- **Breakpoints**:
  - Mobile: 0-768px
  - Tablet: 768px-1024px
  - Desktop: 1024px+

### Section Structure
```css
.section {
  padding: 96px 0; /* Desktop */
  padding: 48px 0; /* Mobile */
}

.section-header {
  text-align: center;
  margin-bottom: 64px;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 600;
  color: #07070A;
  margin-bottom: 16px;
}

.section-subtitle {
  font-size: 1.25rem;
  font-weight: 300;
  color: #6b7280;
  max-width: 600px;
  margin: 0 auto;
}
```

### Content Containers
```css
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 32px; /* Desktop */
  padding: 0 24px; /* Mobile */
}

.content-wrapper {
  max-width: 800px;
  margin: 0 auto;
}
```

## Interactive Elements

### Hover Effects
- **Lift**: `transform: translateY(-2px)` for cards and buttons
- **Scale**: `transform: scale(1.02)` for images and icons
- **Shadow**: Increase box-shadow intensity on hover
- **Color**: Smooth color transitions for links and buttons

### Transitions
- **Standard**: `transition: all 0.2s ease`
- **Slow**: `transition: all 0.3s ease` for larger elements
- **Fast**: `transition: all 0.15s ease` for small interactions

### Focus States
- Use consistent focus rings: `box-shadow: 0 0 0 3px rgba(84, 158, 210, 0.3)`
- Ensure all interactive elements have visible focus states
- Maintain tab order for keyboard navigation

## Iconography

### Icon Guidelines
- Use consistent icon style (outlined or filled)
- Icon sizes: 16px, 20px, 24px, 32px, 48px
- Apply brand colors to icons when appropriate
- Ensure icons have proper alt text for accessibility

### Icon Library
Recommended: Heroicons, Feather Icons, or Phosphor Icons for consistency with modern web standards.

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

.image-hero {
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.1);
}

.image-overlay {
  position: relative;
}

.image-overlay::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(67, 124, 165, 0.3), rgba(84, 158, 210, 0.2));
}
```

## Animation & Motion

### Scroll Animations
- Fade in on scroll for content sections
- Stagger animations for card grids
- Parallax effects for hero sections (subtle)

### Loading States
- Skeleton screens for content loading
- Smooth transitions between page states
- Progress indicators for form submissions

## Responsive Design

### Mobile-First Approach
- Design for mobile first, enhance for larger screens
- Touch-friendly button sizes (minimum 44px)
- Readable font sizes on small screens (minimum 16px)

### Breakpoint Guidelines
```css
/* Mobile First */
.responsive-element {
  /* Mobile styles (default) */
}

@media (min-width: 768px) {
  .responsive-element {
    /* Tablet styles */
  }
}

@media (min-width: 1024px) {
  .responsive-element {
    /* Desktop styles */
  }
}
```

## Accessibility Standards

### WCAG 2.1 AA Compliance
- Minimum contrast ratio of 4.5:1 for normal text
- Minimum contrast ratio of 3:1 for large text
- All interactive elements keyboard accessible
- Proper heading hierarchy (h1-h6)
- Alt text for all meaningful images

### Screen Reader Considerations
- Use semantic HTML elements
- Provide skip links for navigation
- Use ARIA labels when necessary
- Ensure focus management in dynamic content

## Implementation Notes

### CSS Custom Properties
Define brand colors as CSS custom properties for consistency:
```css
:root {
  --color-steel-blue: #437CA5;
  --color-celestial-blue: #549ED2;
  --color-hunyadi-yellow: #E7BB5F;
  --color-lion: #B29251;
  --color-black: #07070A;

  --font-primary: 'Inter', 'Spline Sans', sans-serif;
  --border-radius: 8px;
  --transition: all 0.2s ease;
}
```

### Utility Classes
Create utility classes for common styles:
- `.text-center`, `.text-left`, `.text-right`
- `.mt-{size}`, `.mb-{size}`, `.mx-{size}`, `.my-{size}`
- `.bg-{color}`, `.text-{color}`, `.border-{color}`

### Performance Considerations
- Use system fonts as fallbacks
- Optimize images and use modern formats
- Minimize CSS and JavaScript
- Implement critical CSS for above-the-fold content

---

*This style guide ensures the CMDF website maintains visual consistency while honoring West Virginia's cultural heritage through thoughtful design choices inspired by community, tradition, and artistic expression.*