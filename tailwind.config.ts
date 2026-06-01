import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        gold: '#F5C518',
        'gold-light': '#FFE878',
        'bg-base': '#0F0E1A',
        'card-bg': '#1A1A2E',
        muted: '#A0A0B0',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #FFE878, #F5C518)',
        'purple-pink': 'linear-gradient(135deg, #9B2BE0, #E91E8C)',
      },
    },
  },
  plugins: [],
}
export default config
