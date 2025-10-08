# Creative Development Landing Page

A modern, responsive landing page built with clean HTML, CSS, and JavaScript. Features custom typography, smooth animations, and a mobile-first design approach.

## Features

- **Custom Typography**: Three carefully selected font families
  - Futura Extra Bold for headings
  - Futura Medium for subheadings and navigation
  - DM Sans Light for body text and paragraphs
- **Responsive Design**: Mobile-first approach with fluid layouts
- **Modern CSS**: Custom properties, CSS Grid, Flexbox
- **Sticky Navigation**: Smooth scrolling navigation with mobile hamburger menu
- **Interactive Elements**: Hover effects and smooth transitions
- **Accessible**: Semantic HTML and proper color contrast

## Project Structure

```
creative-dev/
├── css/
│   └── styles.css          # Main stylesheet with embedded fonts
├── fonts/                  # Custom font files
│   ├── Futura Extra Bold/
│   │   └── Futura Extra Bold.otf
│   ├── Futura-Medium/
│   │   └── Futura-Medium Regular/
│   │       └── Futura-Medium Regular.ttf
│   └── Sans/
│       └── Sans Regular/
│           └── Sans Regular.ttf
├── js/
│   └── script.js          # JavaScript functionality
├── index.html             # Main HTML file
├── font-declarations.css  # Separate font declarations (optional)
└── README.md             # This file
```

## Typography System

### Font Hierarchy
- **Headings** (H1, H2): Futura Extra Bold - Bold, impactful titles
- **Subheadings** (H3, buttons, navigation): Futura Medium - Clean, modern labels
- **Body Text** (paragraphs, descriptions): DM Sans Light - Readable, elegant text

### Color Palette
- **Primary**: Slate Blue (#5b7594)
- **Secondary**: Dark Brown (#483328)
- **Accent**: Medium Brown (#77614d)
- **Background**: Cream (#dacebf)
- **Text**: White (#ffffff)

## Sections

1. **Hero Section**: Eye-catching intro with call-to-action
2. **Features**: Grid layout showcasing key features
3. **Quick Links**: Colorful action cards
4. **Stories**: Customer testimonials with avatars
5. **Call-to-Action**: Final conversion section
6. **Footer**: Links and company information

## Getting Started

### Prerequisites
- Modern web browser
- Local web server (optional, for development)

### Installation

1. Clone or download the project files
2. Ensure all font files are in the correct directory structure
3. Open `index.html` in a web browser

### Development Setup

For local development with live reload:

```bash
# Using Python (if installed)
python -m http.server 8000

# Using Node.js http-server (if installed)
npx http-server

# Using PHP (if installed)
php -S localhost:8000
```

Then visit `http://localhost:8000`

## Customization

### Colors
Update the CSS custom properties in `:root` to change the color scheme:

```css
:root {
    --cream: #dacebf;
    --dark-brown: #483328;
    --slate-blue: #5b7594;
    --medium-brown: #77614d;
    --white: #ffffff;
}
```

### Typography
The font system uses CSS custom properties for easy updates:

```css
:root {
    --futura-extrabold: 'Futura-ExtraBold', Impact, 'Arial Black', sans-serif;
    --futura-medium: 'Futura-Medium', 'Arial Narrow', sans-serif;
    --dm-sans-light: 'DM Sans', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
```

### Layout
- Maximum content width: 1280px
- Responsive breakpoints: 640px, 768px, 1024px, 1200px
- Mobile-first design with `clamp()` for fluid typography

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Features

- `font-display: swap` for custom fonts
- Optimized CSS with minimal unused styles
- Responsive images and scalable typography
- Efficient CSS Grid and Flexbox layouts

## License

This project is for educational and demonstration purposes.

## Contributing

1. Fork the project
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## Contact

For questions or feedback about this project, please create an issue in the repository.