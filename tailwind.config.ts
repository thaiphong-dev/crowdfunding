import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'login': "url('/image/Background.png')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        
      },
      colors: {
        'primary-1': '#77D7D3',
        'primary-2': '#FF6D6D',
        'primary-3': '#2E4049',
        'primary-4': '#F1EEEC',
        'primary-5': '#ECF1F0',
        'primary-6': '#F2F2F2',
        'primary-7': '#727272',
        'primary-8': '#384C56',
        'primary-bg-bar': '#ff2e5b1a',
        'primary-def': '#E6E6E6',
      },
      fontSize: {
        'banner-sub': '50px',
        'banner-main': '90px'
      }
    },
  },
  plugins: [],
}
export default config
