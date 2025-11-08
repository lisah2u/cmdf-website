# 🎨 CSS Architecture Overview

Your CMDF website uses a **hybrid approach** combining Tailwind CSS with custom CSS for brand-specific styling and semantic typography.

## 📋 CSS Loading Sequence

### 1. **Tailwind Configuration** (Line 10)
```html
<script src="assets/tailwind-config.js"></script>
```
- Loads **before** Tailwind CDN
- Defines custom colors, fonts, and theme extensions
- Extends Tailwind with CMDF brand colors and typography

### 2. **Tailwind CSS CDN** (Line 13)
```html
<script src="https://cdn.tailwindcss.com"></script>
```
- Provides utility classes framework
- Uses configuration from `tailwind-config.js`

### 3. **Google Fonts** (Line 18)
```html
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=Fredericka+the+Great&family=Elms+Sans:ital,wght@0,100..900;1,100..900&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
```
**Fonts loaded**: Roboto (fallback), Fredericka the Great (hero), Elms Sans, Inter (navigation)

### 4. **Font Awesome** (Line 21)
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
```
**Purpose**: Icons for social media, UI elements, forms

### 5. **Brand Color Palette** (Line 23)
```html
<link rel="stylesheet" href="assets/palette.css">
```
**Purpose**: CSS custom properties for brand colors (single source of truth)

### 6. **Component Styles** (Line 28)
```html
<link rel="stylesheet" href="assets/cmdf-components.css">
```
**Purpose**: Custom fonts, semantic typography, animations, branded components

## 🎯 CSS Files Architecture

### **`assets/palette.css`** - Brand Color System
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
}
```
**Purpose**: Centralized color definitions using CSS custom properties

### **`assets/tailwind-config.js`** - Tailwind Extensions
```javascript
colors: {
  'steel-blue': '#437CA5',
  'celestial-blue': '#549ED2',
  'gold': '#E7BB5F',
  'cmdf-black': '#07070A'
},
fontFamily: {
  'gilroy': ['Gilroy', 'Inter', 'system-ui', 'sans-serif'],
  'howards': ['Howards Eight', 'Georgia', 'Times New Roman', 'serif'],
  'nav': ['Inter', 'system-ui', 'sans-serif'],
}
```
**Purpose**: Maps brand colors and fonts to Tailwind utilities

### **`assets/cmdf-components.css`** - Custom Typography & Components
**Features**:
- **Custom fonts**: Howards Eight, Gilroy (local files with fallbacks)
- **Semantic typography**: `.text-display-xl`, `.text-heading-lg`, `.text-body`
- **Brand buttons**: `.btn-cmdf-primary`, `.btn-nav-gold`
- **Form inputs**: `.input-cmdf` with focus states
- **Cards**: `.card-cmdf` with hover effects
- **Animations**: `.fade-in`, staggered delays

## 🔤 Typography System

### **Font Hierarchy**
```css
/* Display Text (Howards Eight) */
.text-display-xl     /* Hero headings: 2.5rem-4rem, fluid */
.text-display-lg     /* Section headings: 2rem-3rem, fluid */

/* Content Headings (Howards Eight) */
.text-heading-xl     /* Main headings: 1.75rem-2.25rem */
.text-heading-lg     /* Sub headings: 1.5rem-1.875rem */
.text-heading-md     /* Small headings: 1.25rem-1.5rem */

/* Body Text (Gilroy) */
.text-body-xl        /* Large body: 1.125rem-1.25rem */
.text-body-lg        /* Standard body: 1rem-1.125rem */
.text-body           /* Regular body: 1rem */
.text-caption        /* Labels/small text: 0.875rem */
```

### **Font Stack Strategy**
- **Primary Body**: Gilroy → Inter → system-ui → sans-serif
- **Display/Headings**: Howards Eight → Georgia → Times New Roman → serif
- **Navigation**: Inter → system-ui → sans-serif
- **Hero Titles**: Fredericka the Great → cursive
- **Fallback**: Roboto → system fonts

### **Responsive Typography**
- **Fluid scaling**: Uses `clamp()` for responsive font sizes
- **Optimized line heights**: 1.1-1.6 based on font purpose
- **Letter spacing**: Negative for large headings, neutral for body

## 🎨 Color Usage Patterns

### **1. Tailwind Utilities with Brand Colors**
```html
<div class="bg-gold text-cmdf-black">
<h2 class="text-steel-blue">
<button class="border-celestial-blue">
```

### **2. Custom Component Classes**
```html
<button class="btn-cmdf-primary">
<div class="card-cmdf">
<input class="input-cmdf">
```

### **3. CSS Custom Properties**
```html
<div style="color: var(--steel-blue)">
```

## 📱 Responsive Strategy

### **Tailwind Breakpoints**
- **Mobile-first**: Base styles for mobile
- **Responsive prefixes**: `md:`, `lg:`, `xl:`
- **Custom breakpoints**: Defined in components

### **Typography Responsiveness**
- **Fluid scaling**: `clamp()` functions in typography classes
- **Consistent spacing**: Tailwind utilities for margins/padding
- **Readable line lengths**: `max-w-*` classes for optimal reading

## 💡 Usage Examples

### **Semantic Typography (Recommended)**
```html
<!-- Large hero headings -->
<h1 class="text-display-xl text-cmdf-black">

<!-- Section headings -->
<h2 class="text-display-lg text-cmdf-black">

<!-- Content headings -->
<h3 class="text-heading-xl text-cmdf-black">

<!-- Body content -->
<p class="text-body-lg text-medium-gray max-w-3xl mx-auto">

<!-- Form labels -->
<label class="text-caption text-cmdf-black block font-medium">

<!-- Buttons -->
<button class="text-body-lg btn-cmdf-primary">
```

### **Mixing Tailwind + Custom Components**
```html
<!-- Layout with Tailwind, Typography with Custom Classes -->
<div class="container mx-auto px-6">           <!-- Tailwind layout -->
  <div class="card-cmdf fade-in-delay-1">      <!-- Custom component -->
    <h3 class="text-heading-lg text-gold">     <!-- Custom typography + color -->
    <button class="btn-cmdf-primary">          <!-- Custom branded button -->
  </div>
</div>
```

## ✅ Architecture Benefits

**🚀 Performance**
- Tailwind CDN with selective custom CSS
- Optimized font loading with fallbacks
- Efficient caching strategies

**🛠 Maintainability**
- Centralized color system
- Semantic typography classes
- Single source of truth for design tokens

**🎨 Brand Consistency**
- Custom color palette integration
- Professional typography hierarchy
- Consistent component styling

**💻 Developer Experience**
- Tailwind utilities + brand components
- Clear naming conventions
- Responsive-first approach

**♿ Accessibility**
- Optimized line heights and spacing
- High contrast color combinations
- Semantic HTML structure

## 🔧 File Structure

```
assets/
├── palette.css           # Brand colors (CSS custom properties)
├── tailwind-config.js    # Tailwind extensions (colors, fonts)
├── cmdf-components.css   # Typography, components, animations
├── Gilroy-Regular.ttf    # Custom brand font
└── howards-eight.ttf     # Custom display font
```

Your CSS architecture provides a solid foundation for scalable, maintainable, and brand-consistent styling across the entire website! 🎯