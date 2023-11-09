import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1024px',
      xxl:'1536px'
    },
    extend: {
      colors: {
        primary: '#FF6900',
        secondary: '#393A47',
        accent: '#F13024',
      },
      boxShadow: {
        "custom": '0px 0px 0px rgba(6, 5, 50, 0.12)'
      },
      transitionDuration: {
        '2000': '2000ms',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require('tailwind-scrollbar'),],
}
export default config
