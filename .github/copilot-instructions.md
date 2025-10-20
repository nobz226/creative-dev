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
```markdown
# Copilot instructions — PathwayHub (creative-dev)

This repo is a small, static landing site (vanilla HTML/CSS/JS). These instructions capture the specific patterns, workflows and examples an AI coding agent should follow to be productive here.

Key facts (quick):
- Static site: HTML files at repo root (index.html, about.html, courses.html, etc.).
- Single stylesheet: `css/styles.css` drives layout, spacing and the design system.
- Small vanilla JS: `script.js` handles mobile nav, filtering stubs, and small utilities.
- Fonts live in `fonts/` and are required for correct typography.

What to change vs not-change:
- Change content, layout, micro-interactions and accessibility fixes freely.
- Do NOT replace the three-font system or hardcode alternative fonts. Use CSS custom properties in `:root`.

Important patterns and examples (use these as templates):
- Typography: all font families and weights are defined as custom properties in `:root` (see `css/styles.css` and README). Example property names: `--futura-extrabold`, `--futura-medium`, `--dm-sans-light`.
- Fluid typography & spacing: prefer `clamp(min, vw, max)` for font sizes and paddings. Media queries are used only for layout breakpoints (640px, 768px, 1024px, 1200px).
- Component naming: `.section-container` for main wrappers; section components use prefixes like `.hero-*`, `.features-*`, `.stories-*`. BEM-like modifiers exist (e.g., `.filter-button--active`).
- Mobile nav: `script.js` implements the hamburger toggle and sets `aria-expanded`. When editing, preserve ARIA behavior and the `hidden` class toggle.

Developer workflows / commands (concrete):
- Serve locally (recommended): `python -m http.server 8000` then open `http://localhost:8000`.
- Alternative: `npx http-server` or `php -S localhost:8000`.
- There is no build pipeline. Editing `index.html` or `css/styles.css` is reflected immediately when served.

Files to check when making changes:
- `css/styles.css` — update color vars, spacing, typography. Example: change `--sapphire-blue` in `:root`.
- `script.js` — mobile menu, smooth scrolling, filter button active states and small utilities (debounce, formatDate). Keep `DOMContentLoaded` wrappers intact.
- Fonts: verify `fonts/` structure when changing font-face declarations.

Examples to follow when implementing new features:
- Add a new filter for courses: follow `filter-button` conventions (use `data-filter` attribute and `filter-button--active` class). See `script.js` for filter button handling.
- Add a responsive card component: follow existing card styles (feature/course/story/blog cards described in README). Use `.section-container` and `clamp()` for spacing.

Project-specific conventions (non-obvious):
- Prefer local server when testing anchor scrolling and mobile menu (file:// can break some JS behaviors).
- Use uppercase Futura for headings where present (visual identity relies on letter-spacing and caps).
- Use `svg` logos from `logos/` — prefer vector variants for header and favicons.

Accessibility and behavior rules:
- Maintain ARIA attributes on interactive elements (e.g., `aria-expanded` on mobile menu button).
- Preserve keyboard focus states and visible outlines for interactive elements.

When you commit:
- Keep commit messages concise and reference the affected pages (e.g., `css: tweak hero spacing on index.html`).

If you need to scaffold tests or a build process, note it as a separate task; the repo currently has no test or build tooling.

References / quick pointers:
- Mobile menu logic: `script.js` (DOMContentLoaded -> mobile menu handlers)
- Font files and organization: `fonts/` (README has exact layout)
- Main CSS: `css/styles.css` (colors, clamp, container widths)

Please ask if any section needs more concrete examples or if you'd like me to add a short checklist for PR reviewers.
```