# Website Generation Prompt
## Task
Generate a complete, working static website that accurately replicates the design, functionality, and content of the provided source website. You will be given both a URL reference and a screenshot of the landing page.

Input Information

- Source URL: [The Roots of Music](https://therootsofmusic.org/)
- Screenshot: screencapture-therootsofmusic-org.png in the documents directory

## Analysis Phase
Before generating code, please analyze the provided materials and identify:

### Visual Design Elements

- Color scheme and branding
- Typography (fonts, sizes, hierarchy)
- Layout structure and grid system
- Spacing and margins
- Visual hierarchy and content organization
- UI components (buttons, forms, cards, etc.)

### Interactive Elements

- Navigation patterns and menu structures
- Animations and transitions
- Hover effects and micro-interactions
- Form elements and user inputs
- Call-to-action buttons
- Modal dialogs or overlays

### Content Structure

- Main sections and their purposes
- Text content and messaging
- Image placements and types
- Icons and graphic elements
- Links and navigation paths

### Technical Requirements

- Responsive design breakpoints
- Accessibility considerations
- Performance optimization needs
- Cross-browser compatibility

- Generation Requirements
- Code Structure

## Generate a complete static website with:

- Clean, semantic HTML5 structure
- Tailwind CSS for all styling with utility-first approach
- Vanilla JavaScript for interactions (or specify framework preference)
- Organized file structure with Tailwind configuration
- Responsive design using Tailwind's responsive prefixes (sm:, md:, lg:, xl:, 2xl:)

### Design Fidelity

- Match colors, fonts, and spacing as closely as possible
- Recreate all visible UI components and layouts
- Implement hover states and interactive elements
- Ensure visual hierarchy matches the original
- Include all graphics and icons (use placeholders if needed)

### Functionality Replication

- Working navigation between sections/pages
- Functional forms (with validation)
- Interactive elements and animations
- Smooth scrolling and transitions
- Mobile-responsive hamburger menus
- Any carousel/slider functionality

### Sub-pages and Content

- Analyze the main navigation to infer sub-page structure
- Create realistic sub-pages based on navigation items
- Maintain consistent design language across all pages
- Include realistic placeholder content where original content isn't visible

### Animation and Interactions

- Recreate any visible animations or transitions
- Add appropriate hover effects on interactive elements
- Implement smooth scrolling for anchor links
- Create loading animations if present in the original
- Add CSS animations for elements that appear to move or transition

## Technical Specifications

### HTML Requirements

- Use semantic HTML5 elements
- Include proper meta tags for SEO and responsive design
- Add appropriate ARIA labels for accessibility
- Structure content with proper heading hierarchy

### CSS Requirements

- Use Tailwind CSS as the primary styling framework
- Implement mobile-first responsive design with Tailwind's responsive utilities
- Use Tailwind's utility classes for layout (grid, flexbox) and spacing
- Include smooth transitions and animations using Tailwind's transition utilities
- Leverage Tailwind's color palette and design tokens for consistency
- Use custom CSS only when Tailwind utilities are insufficient
- Include Tailwind CSS via CDN or provide build configuration

### JavaScript Requirements

- Write clean, modern ES6+ JavaScript
- Implement smooth scrolling and navigation
- Add form validation and interaction handling
- Create reusable functions for common interactions
- Ensure all interactive elements work properly

## File Organization
project/
├── index.html
├── about.html (and other sub-pages)
├── tailwind.config.js (if using custom build)
├── src/
│   └── input.css (for custom Tailwind directives)
├── dist/
│   └── output.css (compiled Tailwind CSS)
├── js/
│   ├── main.js
│   └── animations.js
├── images/
│   └── (placeholder images)
└── assets/
    └── (fonts, icons, etc.)

## Information Architecture
- Use information provided in cmdf_info_arch.md. Specific webpages are indicated by (/page-name/).

## Deliverables

- Complete HTML files for all pages with Tailwind CSS classes
- Tailwind CSS setup (CDN link or build configuration with tailwind.config.js)
- Custom CSS file (if needed for styles not achievable with Tailwind utilities)
- JavaScript files for all interactive functionality
- README.md with setup instructions, Tailwind build process, and feature overview
- Asset list noting any images/fonts that need to be replaced with actual content

## Quality Assurance

### Ensure the generated website:

- Loads quickly and renders correctly
- Is fully responsive across all device sizes
- Has working navigation and all interactive elements
- Matches the original design as closely as possible
- Includes proper error handling for forms
- Is accessible with keyboard navigation
- Works in all modern browsers

## Additional Notes

- Use Tailwind CSS CDN for quick setup or provide build configuration for production
- Leverage Tailwind's extensive utility classes before writing custom CSS
- Use Tailwind's color palette and spacing scale for consistency
- Include placeholder images with proper dimensions using Tailwind's aspect ratio utilities
- Include comments in HTML explaining Tailwind class combinations for complex layouts
- Provide instructions for Tailwind CSS optimization and purging unused styles
- Consider using Tailwind UI components as reference for common patterns
- Include instructions for customization and deployment with Tailwind build process

Please generate the complete website code following these specifications, ensuring high fidelity to the original design while creating a fully functional static website.