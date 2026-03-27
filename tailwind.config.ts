import type { Config } from 'tailwindcss';

export default {
  content: [
    './*.html',
    './src/**/*.{ts,js}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F5F0EB',
        'cream-dark': '#EDE6DD',
        charcoal: '#2C2C2C',
        'charcoal-lt': '#5A5A5A',
        gold: '#B8956A',
        'gold-lt': '#D4AF87',
        'gold-dk': '#9A7A52',
      },
      fontFamily: {
        serif: ["'Cormorant Garamond'", 'Georgia', 'serif'],
        sans: ["'DM Sans'", 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
