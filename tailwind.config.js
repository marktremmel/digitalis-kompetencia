/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    fontFamily: {
      sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
    },
    extend: {
      colors: {
        background: 'var(--bg-color)',
        card: {
          bg: 'var(--card-bg)',
          border: 'var(--card-border)',
        },
        primary: {
          light: '#e0e7ff',
          DEFAULT: '#4f46e5',
          hover: '#4338ca',
          transparent: 'rgba(79, 70, 229, 0.1)',
        },
        success: {
          bg: 'var(--success-bg)',
          DEFAULT: '#10b981',
        },
        warning: {
          bg: 'var(--warning-bg)',
          DEFAULT: '#f59e0b',
        },
        danger: {
          bg: 'var(--danger-bg)',
          DEFAULT: '#ef4444',
        },
        text: {
          main: 'var(--text-main)',
          muted: 'var(--text-muted)',
        },
      },
      boxShadow: {
        glow: '0 0 15px rgba(79, 70, 229, 0.3)',
      },
    },
  },
  plugins: [],
}
