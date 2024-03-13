import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
       keyframes: {
                'fade-in-down': {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(-20px)',
                        
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)'
                    },
                },
                'fade-out-down': {
                    'from': {
                        opacity: '1',
                        transform: 'translateY(0px)'
                    },
                    'to': {
                        opacity: '0',
                        transform: 'translateY(10px)'
                    },
                },
                'fade-in-up': {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(10px)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)'
                    },
                },
                'fade-out-up': {
                    'from': {
                        opacity: '1',
                        transform: 'translateY(0px)'
                    },
                    'to': {
                        opacity: '0',
                        transform: 'translateY(10px)'
                    },
                },
                 'zoom-in': {
                    '0%': {
                        opacity: '0.5',
                        transform: 'scale(1.1)'
                    },
                    '100%':{
                        opacity: '1',
                        transform: 'scale(1)'
                    },
                },
                'pulse': {
                    '0%': {
                        opacity: '1',
                    },
                    '50%': {
                        opacity: '0.3',
                    },
                    '100%':{
                        opacity: '1',
                    },
                },
            },
            animation: {
                'fade-in-down': 'fade-in-down 0.5s ease-out',
                'fade-out-down': 'fade-out-down 0.5s ease-out',
                'fade-in-up': 'fade-in-up 0.5s ease-out',
                'fade-out-up': 'fade-out-up 0.5s ease-out',
                'zoom-in': 'zoom-in 0.5s linear',
                'pulse': ' pulse 1.4s cubic-bezier(0.4, 0, 0.6, 1) infinite'
            },
           
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
