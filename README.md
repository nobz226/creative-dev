# PathwayHub - BCIT New Media Student Resource Hub

A comprehensive student-led platform supporting BCIT New Media and Web Development students with peer-created resources, community connections, and academic support. Built by students, for students.

## Overview

PathwayHub is a static website designed to help BCIT New Media students navigate their program journey through honest insights, peer support, and practical resources. The platform bridges the gap between official program information and real student experiences.

## Features

### Core Sections
- **Program Hub**: Comprehensive program information, specialization paths, and what to expect
- **Course Breakdown**: Honest student insights into each course with difficulty ratings and success tips
- **Student Resources**: Mental health support, software tools, study guides, and peer tutoring
- **Community**: Student stories, alumni spotlights, and peer mentorship connections
- **Blog & News**: Student-written articles, tutorials, industry insights, and program updates
- **Contact/Join**: Ways to contribute, join the team, and get involved

### Technical Features
- **Custom Typography System**: Three-tier font hierarchy using Futura ExtraBold, Futura Medium, and DM Sans Light
- **Responsive Design**: Mobile-first approach with fluid layouts and breakpoints at 640px, 768px, 1024px, 1200px
- **Modern CSS**: Custom properties, CSS Grid, Flexbox, and `clamp()` for fluid typography
- **Sticky Navigation**: Persistent header with mobile hamburger menu
- **Interactive Elements**: Smooth transitions, hover effects, and filtering functionality
- **Accessibility**: Semantic HTML, proper ARIA labels, and color contrast compliance

## Project Structure

```
creative-dev/
├── css/
│   └── styles.css              # Main stylesheet (17KB+) with all component styles
├── fonts/                      # Custom font files
│   ├── Futura Extra Bold/
│   │   └── Futura Extra Bold.otf
│   ├── Futura-Medium/
│   │   └── Futura-Medium Regular/
│   │       └── Futura-Medium Regular.ttf
│   └── Sans/
│       └── Sans Regular/
│           └── Sans Regular.ttf
├── logos/                      # Logo variants
│   ├── logo.png
│   ├── logo-darkbrown.svg
│   ├── logo-lightbrown.svg
│   └── logo-black.svg
├── js/
│   └── script.js              # Interactive functionality
├── images/                     # Team photos and content images
│   ├── founder.jpg
│   ├── res-manager.jpg
│   └── comm-manager.jpg
├── index.html                  # Homepage
├── about.html                  # About the initiative
├── program-hub.html            # Program information
├── courses.html                # Course breakdowns
├── community.html              # Student stories and connections
├── resources.html              # Student resources and tools
├── blog.html                   # Blog and news section
├── contact.html                # Contact and contribution forms
├── .github/
│   └── copilot-instructions.md # Development guidelines
└── README.md                   # This file
```

## Design System

### Typography Hierarchy
The visual identity is typography-driven with a strict 3-font hierarchy:

- **Futura ExtraBold** (900 weight)
  - Usage: H1, H2, section headings, hero titles
  - Purpose: Bold, impactful statements
  - Characteristics: Uppercase, 0.05em letter-spacing

- **Futura Medium** (600 weight)
  - Usage: H3, buttons, navigation, card titles
  - Purpose: Clean, modern labels and calls-to-action
  - Characteristics: Uppercase, 0.025em letter-spacing

- **DM Sans Light** (300 weight)
  - Usage: Body text, paragraphs, descriptions
  - Purpose: Readable, elegant content
  - Characteristics: Normal case, 1.6-1.7 line-height

### Color Palette
Earth tones create a professional, approachable aesthetic:

```css
--ghost-white: #E8E9F3;      /* Background */
--eerie-black: #222222;      /* Primary text */
--sapphire-blue: #1255AB;    /* Primary accent */
--yellow-green: #a2d543;     /* Secondary accent */
--light-gray: #a6a6a8;       /* Tertiary text */
```

### Responsive Design
- **Mobile-first**: Base styles designed for 375px+ devices
- **Fluid typography**: Extensive use of `clamp(min, viewport, max)` for all font sizes
- **Breakpoints**: 
  - 640px (sm): Two-column grids
  - 768px (md): Desktop navigation, three-column layouts
  - 1024px (lg): Increased padding, larger feature grids
  - 1200px (xl): Maximum typography scaling
- **Container max-width**: 1280px with responsive padding

## Page Descriptions

### index.html
Homepage featuring hero section, "What We Offer" features, quick navigation links, student story previews, and community call-to-action.

### about.html
Mission statement, team introduction, values showcase, and contribution opportunities.

### program-hub.html
Comprehensive program overview, specialization paths (front-end, full-stack, creative tech), year-by-year expectations, and student insights.

### courses.html
Filterable course cards with difficulty ratings, student tips, course codes, and year/term information. Includes study resource links.

### community.html
Student success stories, alumni spotlights, company placement showcase, study groups, peer mentorship, and alumni network access.

### resources.html
Mental health resources, software/tool recommendations, study guides, peer tutoring program, and quick access navigation.

### blog.html
Featured posts, category filtering (student stories, tutorials, industry news, program updates, career advice), event calendar, and newsletter signup.

### contact.html
Contact options, contribution forms, team contact cards, and ways to get involved (content creation, tutoring, team membership).

## Component Library

### Cards
- **Feature Cards**: White background, sapphire blue accent strip, hover lift effect
- **Course Cards**: Difficulty bars, student tips sections, term/year labels
- **Story Cards**: Avatar initials, italic quotes, student attribution
- **Blog Cards**: Category badges, metadata displays, gradient image placeholders
- **Quick Link Cards**: Colored backgrounds (purple, green, pink, teal, blue), icon circles

### Forms
- **Contact Form**: Large padding, rounded corners, custom input styling
- **Newsletter Form**: Inline input/button group with white background
- **Filter Buttons**: Toggle active states, uppercase Futura Medium font

### Navigation
- **Desktop**: Horizontal links, center-justified, hover states
- **Mobile**: Hamburger menu, slide-down panel, full-width links
- **Logo Area**: Reduced gap (0.5rem) between logo and titles for tighter grouping

## Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge - latest versions)
- Local web server for development (optional but recommended)
- Text editor (VS Code recommended)

### Installation

1. **Clone or download the repository**
```bash
git clone [repository-url]
cd creative-dev
```

2. **Verify font files** are in correct directory structure
```
fonts/
├── Futura Extra Bold/Futura Extra Bold.otf
├── Futura-Medium/Futura-Medium Regular/Futura-Medium Regular.ttf
└── Sans/Sans Regular/Sans Regular.ttf
```

3. **Open in browser**
   - Direct: Open `index.html` in browser
   - With server (recommended): See development setup below

### Development Setup

Run a local server for optimal development experience:

```bash
# Python (built-in)
python -m http.server 8000

# Node.js http-server
npx http-server

# PHP (built-in)
php -S localhost:8000
```

Then visit `http://localhost:8000`

## Customization Guide

### Updating Colors
Modify CSS custom properties in `styles.css`:

```css
:root {
    --sapphire-blue: #1255AB;  /* Change primary color */
    --yellow-green: #a2d543;   /* Change accent color */
}
```

### Adjusting Typography
Font families use custom properties for easy updates:

```css
:root {
    --futura-extrabold: 'Futura-ExtraBold', Impact, 'Arial Black', sans-serif;
    --futura-medium: 'Futura-Medium', 'Arial Narrow', sans-serif;
    --dm-sans-light: 'DM Sans', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
```

### Modifying Layouts
- Content width: Adjust `.section-container` max-width (default: 1280px)
- Grid columns: Modify `grid-template-columns` values in respective sections
- Spacing: Update `clamp()` values for responsive padding/margins

## JavaScript Functionality

### Mobile Navigation
- Toggle hamburger menu
- Icon animation (hamburger ↔ X)
- Click outside to close
- Auto-close on window resize

### Filter System
- Course filtering by year/category
- Blog post filtering by topic
- Active state management

### Form Handling
- Basic validation for required fields
- Loading states for buttons
- Error highlighting

### Utility Functions
- Debounce for performance
- Date formatting for blog posts
- Loading state management

## Browser Support

- **Chrome**: Latest version ✓
- **Firefox**: Latest version ✓
- **Safari**: Latest version ✓
- **Edge**: Latest version ✓
- **Mobile browsers**: iOS Safari 12+, Chrome Mobile

## Performance Optimizations

- `font-display: swap` prevents flash of invisible text
- Minimal CSS with no unused styles
- Efficient Grid/Flexbox layouts
- Debounced scroll and resize listeners
- Lazy loading considerations for images

## Contributing

### Ways to Contribute
1. **Content Creation**: Write blog posts, create study guides, share experiences
2. **Resource Development**: Build tutorials, code examples, design templates
3. **Peer Support**: Offer tutoring, mentor new students
4. **Platform Development**: Improve code, fix bugs, add features

### Development Workflow
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Follow coding instructions in `.github/copilot-instructions.md`
4. Commit changes (`git commit -m 'Add amazing feature'`)
5. Push to branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

### Coding Standards
- **Mobile-first**: Start with mobile styles, enhance for larger screens
- **CSS organization**: Follow existing component structure and naming
- **Typography**: Use only the three designated font families
- **Colors**: Use CSS custom properties, no hardcoded colors
- **Responsive**: Use `clamp()` for fluid sizing, media queries for layout only
- **Comments**: Document complex CSS patterns and JavaScript functions

## Accessibility

- Semantic HTML5 elements (`<nav>`, `<main>`, `<section>`, `<article>`)
- ARIA labels on interactive elements
- Keyboard navigation support
- Color contrast ratios meeting WCAG AA standards
- Focus states on all interactive elements
- Screen reader-friendly navigation

## Future Enhancements

### Planned Features
- [ ] User authentication for personalized content
- [ ] Student forum/discussion board
- [ ] File upload for study materials
- [ ] Calendar integration for events
- [ ] Search functionality
- [ ] Newsletter email integration
- [ ] Portfolio showcase section
- [ ] Job board integration

### Technical Improvements
- [ ] Convert to static site generator (11ty, Hugo)
- [ ] Add build process for CSS optimization
- [ ] Implement proper asset pipeline
- [ ] Set up automated testing
- [ ] Add analytics integration
- [ ] Optimize images with responsive sizing

## Team

### Current Core Team
- **Sarah Chen** - Founder & Content Lead
- **Marcus Rodriguez** - Resource Coordinator
- **Emma Thompson** - Community Manager

### Contact
- **General inquiries**: hello@pathwayhub.ca
- **Content contributions**: contribute@pathwayhub.ca
- **Join the team**: join@pathwayhub.ca

## License

This project is for educational and community support purposes. Created by BCIT New Media students for BCIT New Media students.

## Acknowledgments

- BCIT New Media and Web Development program
- Contributing students and alumni
- Faculty advisors
- Student volunteers

---

**Built with ❤️ by BCIT students, for BCIT students**

*Last updated: October 2024*