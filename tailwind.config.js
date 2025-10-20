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
      transitionDuration: {
        'standard': '300ms',
      },
      spacing: {
        '15': '3.75rem',
      },
    },
  },
  plugins: [],
}