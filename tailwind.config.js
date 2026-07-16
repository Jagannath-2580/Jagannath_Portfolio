/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        ink: '#08090f',
        mist: '#f6f8fb',
        electric: '#5b8cff',
        aurora: '#1fd6a5',
        ember: '#ff7a59',
      },
      boxShadow: {
        glow: '0 22px 80px rgba(91, 140, 255, 0.28)',
        soft: '0 18px 60px rgba(15, 23, 42, 0.12)',
      },
      backgroundImage: {
        mesh: 'radial-gradient(circle at 15% 20%, rgba(91,140,255,.35), transparent 28%), radial-gradient(circle at 82% 18%, rgba(31,214,165,.22), transparent 28%), radial-gradient(circle at 48% 78%, rgba(255,122,89,.18), transparent 32%)',
      },
    },
  },
  plugins: [],
};
