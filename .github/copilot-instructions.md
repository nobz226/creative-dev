# PathwayHub Development Guide

## Project Overview
Static website for BCIT New Media students - peer-created resources, community connections, and academic support. **No build process, no frameworks** - pure HTML/CSS/JS served directly.

## Architecture & File Structure

### Single CSS File Pattern
All styles live in `css/styles.css` (1700+ lines). Organized top-to-bottom:
1. Font declarations (@font-face)
2. CSS custom properties (:root)
3. Reset & base styles
4. Shared typography classes
5. Navigation components
6. Page sections (Hero, Features, Stories, etc.)
7. Component library (cards, forms, buttons)
8. Responsive media queries

**Critical**: Never split CSS into multiple files. Add new components following existing sections.

### Page Templates
All 8 HTML pages share identical structure:
- **Navigation**: Same markup across all pages (nav-container → nav-wrapper → nav-content)
- **Hero sections**: Page-specific hero with title + subtitle pattern
- **Footer**: Consistent 4-column layout with logo, description, links
- Logo variants: Use `logo-darkbrown.svg` on non-index pages, `logo.png` on homepage

## Typography System - STRICT HIERARCHY

### Three-Font Rule (Never Break This)
```css
/* Futura ExtraBold: Major headings, hero titles, section headings */
.hero-title, .section-title, .footer-main-title { 
    font-family: var(--futura-extrabold); 
    text-transform: uppercase;
    letter-spacing: 0.05em;
}

/* Futura Medium: Subheadings, buttons, navigation, card titles */
.nav-link, .feature-title, .cta-button { 
    font-family: var(--futura-medium); 
    text-transform: uppercase;
    letter-spacing: 0.025em;
}

/* DM Sans Light: Body text, paragraphs, descriptions */
.feature-text, .body-text, .footer-description { 
    font-family: var(--dm-sans-light); 
    font-weight: 300;
    line-height: 1.6-1.7;
}
```

### Fluid Typography Pattern
Always use `clamp()` for responsive sizing:
```css
font-size: clamp(min-mobile, viewport-scaled, max-desktop);
/* Example: clamp(2rem, 5vw, 2.5rem) */
```

## Component Patterns

### Card Components
All cards follow this structure:
```html
<div class="[component]-card">
    <h3 class="[component]-title">Title (Futura Medium)</h3>
    <p class="[component]-text">Body text (DM Sans Light)</p>
</div>
```
**Hover pattern**: `translateY(-4px)` with shadow increase on all cards.

### Button Styling
```css
.cta-button {
    font-family: var(--futura-medium); /* Always */
    text-transform: uppercase;
    padding: clamp(0.8rem, 2vw, 1rem) clamp(2rem, 4vw, 2.5rem);
    transition: all 0.3s ease;
    transform: translateY(0); /* Enables hover lift */
}
```

### Color Accent Top Border
Feature cards use 4px colored top border pattern:
```css
.feature-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 4px;
    background-color: var(--sapphire-blue);
}
```

## Responsive Breakpoints & Strategy

### Mobile-First Approach
Base styles target 375px+, then enhance:
- **640px**: Two-column grids for stories/features
- **768px**: Desktop nav appears, mobile menu hidden
- **1024px**: Increased padding (1rem → 2rem)
- **1200px**: Maximum typography scaling

### Navigation Behavior
```javascript
// Desktop (≥768px): Horizontal nav-links, centered
// Mobile (<768px): Hamburger → slide-down mobile-menu
// Auto-close on resize crossing 768px breakpoint
```

## JavaScript Conventions

### Mobile Menu Pattern
Located in `script.js`, handles:
1. Toggle on hamburger click (changes icon ☰ → ✕)
2. Close on outside click
3. Close on nav link click
4. Close on window resize to desktop
5. ARIA state management (`aria-expanded`)

### Filter System
Filter buttons use data attributes + active class toggle:
```javascript
button.setAttribute('data-filter', 'category-name');
button.classList.add('filter-button--active');
```

### Active Page Highlighting
Script automatically adds `.nav-link--active` based on current URL:
```javascript
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
```

## Color System - Use Custom Properties Only

```css
--ghost-white: #E8E9F3;      /* Page backgrounds */
--eerie-black: #222222;      /* Primary text */
--sapphire-blue: #1255AB;    /* Links, accents, CTAs */
--yellow-green: #a2d543;     /* Hero section, highlights */
--light-gray: #a6a6a8;       /* Secondary text, borders */
```
**Never hardcode colors.** Always reference CSS variables.

## Development Workflow

### Local Server Setup
```bash
# Recommended: Python built-in server
python -m http.server 8000
# Then visit http://localhost:8000

# Alternative: Node.js
npx http-server
```
**Why**: Font loading and some browser security features require HTTP protocol.

### Testing Checklist
1. Mobile menu functionality (toggle, close, icon change)
2. Navigation active states on each page
3. Hover effects on all cards/buttons
4. Typography scaling at 375px, 768px, 1200px viewports
5. Logo variants correct per page

## Common Pitfalls to Avoid

❌ **Don't** create separate CSS files for pages  
✅ **Do** add new sections to `styles.css` following existing structure

❌ **Don't** use generic fonts or mix typography  
✅ **Do** strictly follow the three-font hierarchy

❌ **Don't** hardcode pixel values for text sizes  
✅ **Do** use `clamp()` for all font-size declarations

❌ **Don't** forget `text-transform: uppercase` on Futura fonts  
✅ **Do** apply uppercase to all Futura ExtraBold and Medium usage

❌ **Don't** use different hover transitions  
✅ **Do** use `transition: all 0.3s ease` consistently

## Adding New Pages

1. Copy existing HTML structure from similar page
2. Update navigation active state (script handles automatically)
3. Choose correct logo variant (see logo-container in nav)
4. Add page-specific components using existing CSS classes
5. Test mobile menu and responsive breakpoints

## Accessibility Requirements

- Use semantic HTML5 elements (`<nav>`, `<section>`, `<article>`)
- Add ARIA labels on interactive elements (buttons, toggles)
- Maintain color contrast ratios (already compliant)
- Ensure keyboard navigation works (focus states defined)
- Test with screen readers on navigation changes

## Performance Notes

- `font-display: swap` prevents FOIT (Flash of Invisible Text)
- Debounce scroll/resize listeners (utility in `script.js`)
- No image optimization pipeline - manually optimize before adding
- CSS is intentionally monolithic for HTTP/2 efficiency

## Tailwind CSS Migration Plan

### Migration Requirements
**CRITICAL**: This is a visual preservation port - zero visual changes allowed. Every pixel, animation, color, and hover effect must remain identical.

### Pre-Migration Audit
Before starting the Tailwind port:
1. **Screenshot all pages** at 375px, 768px, 1024px, 1200px viewports
2. **Record all animations**: hover lifts, transitions, icon changes
3. **Document exact measurements**: All `clamp()` values, gaps, padding
4. **Catalog custom behaviors**: Mobile menu toggle, filter states, active nav links

### Tailwind Configuration Setup

#### tailwind.config.js
```javascript
module.exports = {
  content: ['./*.html', './script.js'],
  theme: {
    extend: {
      colors: {
        'ghost-white': '#E8E9F3',
        'eerie-black': '#222222',
        'sapphire-blue': '#1255AB',
        'yellow-green': '#a2d543',
        'light-gray': '#a6a6a8',
      },
      fontFamily: {
        'futura-extrabold': ['Futura-ExtraBold', 'Impact', 'Arial Black', 'sans-serif'],
        'futura-medium': ['Futura-Medium', 'Arial Narrow', 'sans-serif'],
        'dm-sans': ['DM Sans', 'Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
      },
      letterSpacing: {
        'futura-extra': '0.05em',
        'futura-med': '0.025em',
      },
      fontSize: {
        // Preserve all clamp() values
        'hero-title': 'clamp(2.5rem, 8vw, 4rem)',
        'hero-subtitle': 'clamp(1.1rem, 3vw, 1.5rem)',
        'section-title': 'clamp(2rem, 5vw, 2.5rem)',
        'feature-title': 'clamp(1.3rem, 3vw, 1.6rem)',
        'body': 'clamp(0.9rem, 2vw, 1rem)',
        'nav-link': 'clamp(0.8rem, 1.5vw, 0.9rem)',
        'logo': 'clamp(1.1rem, 2.5vw, 1.4rem)',
        'header-main': 'clamp(1.2rem, 2.5vw, 1.6rem)',
        'header-sub': 'clamp(0.65rem, 1.5vw, 0.8rem)',
      },
      lineHeight: {
        'body': '1.7',
        'title': '1.1',
      },
      maxWidth: {
        'container': '1280px',
      },
      boxShadow: {
        'card': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 8px 30px rgba(0, 0, 0, 0.12)',
        'nav': '0 2px 10px rgba(0, 0, 0, 0.08)',
      },
      transitionProperty: {
        'all': 'all',
      },
      transitionDuration: {
        'standard': '300ms',
      },
      transitionTimingFunction: {
        'standard': 'ease',
      },
    },
  },
  plugins: [],
}
```

#### Custom CSS (@layer components)
Some patterns require custom CSS - add to new `tailwind-custom.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  @font-face {
    font-family: 'Futura-ExtraBold';
    src: url('../fonts/Futura Extra Bold/Futura Extra Bold.otf') format('opentype');
    font-weight: 900;
    font-display: swap;
  }
  @font-face {
    font-family: 'Futura-Medium';
    src: url('../fonts/Futura-Medium/Futura-Medium Regular/Futura-Medium Regular.ttf') format('truetype');
    font-weight: 600;
    font-display: swap;
  }
  @font-face {
    font-family: 'DM Sans';
    src: url('../fonts/Sans/Sans Regular/Sans Regular.ttf') format('truetype');
    font-weight: 300;
    font-display: swap;
  }
}

@layer components {
  /* Preserve exact card hover pattern */
  .card-hover-lift {
    @apply transition-all duration-standard;
    transform: translateY(0);
  }
  .card-hover-lift:hover {
    transform: translateY(-4px);
  }

  /* Feature card top border accent */
  .feature-card-accent::before {
    content: '';
    @apply absolute top-0 left-0 w-full h-1 bg-sapphire-blue;
  }

  /* Hero section texture overlay */
  .hero-texture::before {
    content: '';
    @apply absolute inset-0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="white" opacity="0.03"/><circle cx="75" cy="75" r="1" fill="white" opacity="0.03"/><circle cx="50" cy="10" r="1" fill="white" opacity="0.03"/><circle cx="10" cy="60" r="1" fill="white" opacity="0.03"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
  }

  /* Section title underline */
  .section-title-underline::after {
    content: '';
    @apply block mx-auto mt-4 w-15 h-1 bg-eerie-black rounded-sm;
  }
}
```

### Migration Strategy - Component by Component

#### 1. Typography Classes
Replace CSS classes with Tailwind utilities:

**Before (CSS)**:
```html
<h1 class="hero-title">BY STUDENTS, FOR STUDENTS</h1>
```

**After (Tailwind)**:
```html
<h1 class="font-futura-extrabold text-hero-title uppercase tracking-futura-extra leading-title text-shadow">
  BY STUDENTS, FOR STUDENTS
</h1>
```

**Typography Mapping**:
- `.hero-title` → `font-futura-extrabold text-hero-title uppercase tracking-futura-extra leading-title`
- `.section-title` → `font-futura-extrabold text-section-title uppercase tracking-futura-extra text-light-gray text-center mb-12 section-title-underline`
- `.feature-title` → `font-futura-medium text-feature-title uppercase tracking-futura-med text-sapphire-blue mb-5`
- `.body-text` → `font-dm-sans font-light text-body leading-body text-eerie-black`
- `.nav-link` → `font-futura-medium text-nav-link uppercase tracking-futura-med text-eerie-black`

#### 2. Navigation Component
```html
<!-- Tailwind Navigation Structure -->
<nav class="bg-ghost-white shadow-nav sticky top-0 z-50">
  <div class="max-w-container mx-auto px-4">
    <div class="flex justify-between items-center h-[4.5rem] min-h-[4.5rem] gap-8">
      <!-- Logo container -->
      <div class="flex items-center flex-shrink-0 flex-none">
        <div class="flex items-center gap-2">
          <img src="logos/logo.png" alt="Logo" class="h-[clamp(4rem,6vw,4.5rem)] w-auto flex-shrink-0">
        </div>
        <div class="flex flex-col gap-1">
          <h1 class="font-futura-extrabold text-header-main text-sapphire-blue uppercase tracking-futura-extra leading-none m-0">
            PathwayHub
          </h1>
          <h3 class="font-futura-medium text-header-sub text-yellow-green uppercase tracking-futura-med leading-none m-0">
            BCIT Media and Web Development
          </h3>
        </div>
      </div>
      
      <!-- Desktop nav -->
      <div class="hidden md:flex flex-1 justify-center">
        <div class="flex items-center gap-[clamp(1.5rem,3vw,2.5rem)] flex-nowrap">
          <a href="about.html" 
             class="font-futura-medium text-nav-link uppercase tracking-futura-med text-eerie-black no-underline py-3 px-[clamp(0.8rem,1.5vw,1.2rem)] rounded-md transition-all duration-standard hover:text-sapphire-blue hover:bg-sapphire-blue/8 whitespace-nowrap flex-shrink-0">
            About
          </a>
          <!-- Repeat for all nav links -->
        </div>
      </div>
      
      <!-- Mobile menu button -->
      <div class="md:hidden flex-shrink-0 flex-none">
        <button id="mobile-menu-btn" 
                class="text-eerie-black bg-transparent border-0 cursor-pointer p-3 rounded-md transition-all duration-standard hover:text-sapphire-blue hover:bg-sapphire-blue/8"
                aria-expanded="false">
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
  </div>
  
  <!-- Mobile menu -->
  <div id="mobile-menu" class="hidden bg-ghost-white border-t border-light-gray shadow-md">
    <div class="p-4 flex flex-col gap-2">
      <a href="about.html" 
         class="font-futura-medium text-[0.9rem] uppercase tracking-futura-med text-eerie-black no-underline block py-3 px-4 rounded-md transition-all duration-standard hover:text-sapphire-blue hover:bg-sapphire-blue/8">
        About
      </a>
      <!-- Repeat for all mobile nav links -->
    </div>
  </div>
</nav>
```

#### 3. Card Components
**Feature Card**:
```html
<div class="bg-ghost-white p-[clamp(1.5rem,4vw,2.5rem)] rounded-xl shadow-card border border-sapphire-blue/10 transition-all duration-standard relative overflow-hidden card-hover-lift hover:shadow-card-hover feature-card-accent">
  <h3 class="font-futura-medium text-feature-title uppercase tracking-futura-med text-sapphire-blue mb-5">
    Academic Support
  </h3>
  <p class="font-dm-sans font-light text-body leading-body text-eerie-black">
    Get program and course information...
  </p>
</div>
```

#### 4. Hero Section
```html
<section class="bg-yellow-green text-ghost-white py-[clamp(4rem,8vw,6rem)] text-center relative hero-texture">
  <div class="max-w-container mx-auto px-4 relative z-10">
    <h1 class="font-futura-extrabold text-hero-title uppercase tracking-futura-extra leading-title mb-6 shadow-[0_2px_4px_rgba(0,0,0,0.1)]">
      BY STUDENTS,<br>FOR STUDENTS
    </h1>
    <p class="font-dm-sans font-light text-hero-subtitle leading-normal mb-10 max-w-[50rem] mx-auto opacity-95">
      The Creative Dev supports New Media students...
    </p>
    <a href="resources.html" 
       class="inline-block text-center no-underline bg-sapphire-blue text-ghost-white py-[clamp(1rem,2vw,1.2rem)] px-[clamp(2rem,4vw,2.5rem)] font-futura-medium font-semibold text-[clamp(1rem,2vw,1.1rem)] uppercase tracking-futura-med border-0 cursor-pointer rounded-lg shadow-[0_4px_15px_rgba(0,0,0,0.2)] transition-all duration-standard hover:bg-light-gray hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(0,0,0,0.25)]"
       style="transform: translateY(0)">
      EXPLORE RESOURCES
    </a>
  </div>
</section>
```

#### 5. Button Patterns
```html
<!-- Primary CTA Button -->
<button class="py-[clamp(0.8rem,2vw,1rem)] px-[clamp(2rem,4vw,2.5rem)] font-futura-medium font-semibold uppercase tracking-futura-med border-2 border-transparent cursor-pointer rounded-lg text-[clamp(0.9rem,2vw,1rem)] transition-all duration-standard min-w-[clamp(180px,30vw,200px)] no-underline inline-block text-center bg-sapphire-blue text-white hover:bg-sapphire-blue/90 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(0,0,0,0.2)]"
        style="transform: translateY(0)">
  BUTTON TEXT
</button>

<!-- Filter Button -->
<button class="py-2 px-4 font-futura-medium text-[0.85rem] font-semibold uppercase tracking-futura-med border-2 border-sapphire-blue bg-ghost-white text-sapphire-blue rounded-md cursor-pointer transition-all duration-standard hover:bg-sapphire-blue hover:text-ghost-white">
  Filter
</button>
```

### Migration Testing Protocol

#### Visual Regression Testing
After each component migration:
1. **Compare screenshots** side-by-side at all breakpoints
2. **Test hover states** - verify exact translateY values
3. **Check spacing** - use browser DevTools to compare padding/margins
4. **Validate typography** - confirm clamp() values render identically
5. **Test animations** - mobile menu toggle, icon changes must match

#### JavaScript Compatibility
- All `script.js` functionality must work unchanged
- Test: Mobile menu toggle, filter buttons, active states
- Verify: All class selectors still work (may need data attributes)

#### Measurement Tools
```javascript
// Add to script.js temporarily for verification
const measureElement = (selector) => {
  const el = document.querySelector(selector);
  const styles = window.getComputedStyle(el);
  console.log({
    fontSize: styles.fontSize,
    padding: styles.padding,
    margin: styles.margin,
    color: styles.color,
    backgroundColor: styles.backgroundColor
  });
};
```

### Migration Checklist Per Page
- [ ] Screenshot baseline (before)
- [ ] Replace CSS classes with Tailwind utilities
- [ ] Test at 375px, 768px, 1024px, 1200px
- [ ] Verify all hover effects work identically
- [ ] Check mobile menu functionality
- [ ] Validate color accuracy (use color picker)
- [ ] Compare screenshots (after)
- [ ] Document any deviations (there should be zero)

### Critical Tailwind Gotchas

1. **Arbitrary values**: Use `[clamp(...)]` for fluid sizing
2. **Opacity utilities**: Use `text-sapphire-blue/8` for rgba colors
3. **Transform origin**: Explicitly set if different from default
4. **Custom shadows**: Define exact box-shadow values in config
5. **Line height conflicts**: Tailwind resets may override - check carefully
6. **Transition all**: Must explicitly include `transition-all` class

### When to Use Custom CSS vs Tailwind Classes

**Use Tailwind** for:
- Spacing (padding, margin)
- Colors
- Typography sizes
- Borders and shadows
- Flex/Grid layouts

**Use Custom CSS** (@layer components) for:
- Pseudo-elements (::before, ::after)
- Complex animations
- SVG backgrounds
- Multi-step transitions
- Content property usage

### Post-Migration Cleanup

After successful port:
1. **Remove old `styles.css`** (keep as backup initially)
2. **Update `<link>` tags** in all HTML files
3. **Optimize Tailwind** with PurgeCSS in production
4. **Run lighthouse** to verify no performance regression
5. **Update README** with new build process

### Rollback Plan
- Keep `styles.css` as `styles.css.backup` for 2 weeks
- Create `tailwind-migration` branch separate from main
- Only merge after all 8 pages verified pixel-perfect
- Document any edge cases requiring custom CSS
