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
        'bg': '#080a10',
        'accent': '#f97316',
        'accent2': '#fbbf24',
        'glow': 'rgba(249,115,22,0.35)',
        'text': '#f0f0f0',
        'muted': '#8a8fa8',
        'border': 'rgba(255,255,255,0.07)',
      },
      fontFamily: {
        'bebas': ['Bebas Neue', 'cursive'],
        'barlow': ['Barlow', 'sans-serif'],
        'barlow-condensed': ['Barlow Condensed', 'sans-serif'],
      },
    },
  },
  plugins: [],
}