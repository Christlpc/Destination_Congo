/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'forest-green': '#2D5016',
        'forest-green-light': '#4A7C2A',
        'forest-green-dark': '#1A3009',
        'golden-yellow': '#D4AF37',
        'golden-yellow-light': '#E8C547',
        'golden-yellow-dark': '#B8941F',
        'cultural-red': '#8B2635',
        'cultural-red-light': '#A63445',
        'cultural-red-dark': '#6B1A25',
        'congo-blue': '#1E3A5F',
        'congo-blue-light': '#2E5A8F',
        'congo-blue-dark': '#0F1D2F',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}


