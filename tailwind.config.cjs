/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50:  '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
        coral: {
          400: '#ff8080',
          500: '#ff6b6b',
          600: '#ff4f4f',
        },
        'app-bg':       'var(--color-bg)',
        'app-surface':  'var(--color-surface)',
        'app-surface2': 'var(--color-surface2)',
        'app-border':   'var(--color-border)',
        'accent-blue':  'var(--color-accent)',
        'accent-blue-hover': 'var(--color-accent-hover)',
        'accent-coral': 'var(--color-accent-2)',
        'app-text':     'var(--color-text)',
        'app-muted':    'var(--color-text-muted)',
        'app-star':     'var(--color-star)',
        // keep old names for backward compat so no errors on pages not yet updated
        'dark-bg':      'var(--color-bg)',
        'dark-surface': 'var(--color-surface)',
        'dark-surface2':'var(--color-surface2)',
        'dark-border':  'var(--color-border)',
        'accent-neon':  'var(--color-accent)',
        'accent-hover': 'var(--color-accent-hover)',
      },
      fontFamily: {
        sans:   ['Inter', 'Outfit', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.25rem',
        '4xl': '1.75rem',
      },
      boxShadow: {
        'card':       '0 2px 16px rgba(0,0,0,0.07)',
        'card-hover': '0 8px 32px rgba(37,99,235,0.12)',
        'btn':        '0 4px 14px rgba(37,99,235,0.3)',
        'btn-hover':  '0 8px 24px rgba(37,99,235,0.4)',
      },
      animation: {
        'fade-in':    'fadeIn 0.55s ease-out both',
        'slide-up':   'slideUp 0.5s ease-out both',
        'float':      'float 4s ease-in-out infinite',
      },
      keyframes: {
        fadeIn:  { '0%': { opacity: '0', transform: 'translateY(10px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        slideUp: { '0%': { transform: 'translateY(20px)', opacity: '0' }, '100%': { transform: 'translateY(0)', opacity: '1' } },
        float:   { '0%,100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-12px)' } },
      },
    },
  },
  plugins: [],
}