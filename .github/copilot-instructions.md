# Copilot Instructions for Creative Dev Landing Page

## Project Architecture

This is a **static landing page** for a new media student resource platform, built with vanilla HTML, CSS, and TailwindCSS. The architecture prioritizes mobile-first responsive design with custom typography as the primary design system foundation.

**Key architectural decisions:**
- **Hybrid CSS approach**: Custom CSS for typography/layout + TailwindCSS CDN for utilities
- **Mobile-first with fluid typography**: Extensive use of `clamp()` for responsive scaling
- **Component-based HTML**: Semantic sections with consistent naming patterns
- **Asset-first design**: Custom font hierarchy drives the visual identity

## Typography System (Critical)

The project's **visual identity is typography-driven** with a strict 3-font hierarchy:

```css
/* Font hierarchy - NEVER change without updating @font-face declarations */
--futura-extrabold: 'Futura-ExtraBold'  /* H1, H2 - Impact headings */
--futura-medium: 'Futura-Medium'        /* H3, buttons, nav - Clean labels */
--dm-sans-light: 'DM Sans'              /* Body text - Readable content */
```

**Font loading patterns:**
- All fonts use `font-display: swap` for performance
- Local font files in `fonts/` directory with complex nested structure
- Fallback fonts carefully selected for similar metrics
- Google Fonts used as secondary fallback for DM Sans only

## CSS Architecture Patterns

**Fluid responsive design:** 
- Uses `clamp(min, viewport, max)` extensively instead of media queries for typography
- Media queries only for layout changes: 640px, 768px, 1024px, 1200px
- Mobile-first approach with progressive enhancement

**CSS custom properties pattern:**
```css
    /* Color palette */
  :root {
    --ghost-white: #E8E9F3;
    --eerie-black: #222222;
    --sapphire-blue: #1255AB;
    --yellow-green: #a2d543;
    --light-gray: #a6a6a8;
}
```

**Component naming convention:**
- `.section-container` for main content wrappers (max-width: 1280px)
- `.hero-*`, `.features-*`, `.stories-*` for section-specific components
- BEM-style naming: `.component-element--modifier`

## Asset Management

**Font organization:**
```
fonts/
├── Futura Extra Bold/Futura Extra Bold.otf
├── Futura-Medium/Futura-Medium Regular/Futura-Medium Regular.ttf
└── Sans/Sans Regular/Sans Regular.ttf
```

**Logo variants:** Multiple color versions in `logos/` (black, darkbrown, lightbrown)

## Development Workflow

**Local development:** Static files - use simple HTTP server:
```bash
python -m http.server 8000  # Python
npx http-server             # Node.js
php -S localhost:8000       # PHP
```

**Missing JavaScript:** The HTML references `script.js` but file doesn't exist - likely for future mobile menu functionality.

## Key Conventions

- **Content width:** 1280px maximum with responsive padding
- **Color usage:** Earth tones only - no bright colors or gradients
- **Spacing system:** Uses `clamp()` for all padding/margins with consistent ratios
- **Button styling:** Futura Medium font, consistent padding patterns
- **Image handling:** SVG logos, no raster images in current implementation

## When Making Changes

- **Typography changes:** Update CSS custom properties, never hardcode fonts
- **Color changes:** Modify `:root` variables, test contrast ratios
- **Responsive changes:** Use `clamp()` first, media queries only for layout shifts
- **Asset additions:** Follow nested directory structure in `fonts/` and `logos/`
- **Content updates:** Maintain semantic HTML structure and section patterns