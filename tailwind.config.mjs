/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Some Outdoors brand palette
        lake: '#1B3A4B',
        moss: '#3D5A3A',
        cream: '#F4EFE3',
        rust: '#C75B30',
        bone: '#FBF8F1',
        topo: '#9A8E76',
        stone: '#445158',
        birch: '#E8E0CD',
        success: '#5C7A3F',
        warning: '#C99634',
        error: '#A33D2A',
      },
      fontFamily: {
        sans: ['"Inter Variable"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Fraunces Variable"', 'ui-serif', 'Georgia', 'serif'],
      },
      fontSize: {
        // Fluid typography scale from spec
        'display-xl': ['clamp(3rem, 6vw, 5rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2.5rem, 5vw, 4rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'heading-lg': ['clamp(1.75rem, 3vw, 2.25rem)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'heading-md': ['clamp(1.5rem, 2.5vw, 1.75rem)', { lineHeight: '1.25' }],
        'body-lg': ['clamp(1.125rem, 1.5vw, 1.25rem)', { lineHeight: '1.6' }],
        body: ['clamp(1rem, 1.25vw, 1.0625rem)', { lineHeight: '1.65' }],
        caption: ['clamp(0.75rem, 0.9vw, 0.8125rem)', { lineHeight: '1.5' }],
      },
      maxWidth: {
        content: '64rem', // 1024px
      },
      borderRadius: {
        card: '8px',
        btn: '4px',
      },
      spacing: {
        section: '5rem', // 80px mobile
        'section-lg': '7.5rem', // 120px desktop
      },
    },
  },
  plugins: [],
};
