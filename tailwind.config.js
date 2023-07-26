/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'main': '#010101',
        'card': '#101010',
        'primary': '#FFFFFF',
        'disabled': 'rgba(255, 255, 255, 0.2)',
        'line-progress': '#F2F2F2',
        'line-progress-null': '#505050',
        'tabs-active': '#EDEDED',
        'user-info-main': '#D9D9D9',
        'list-item': '#202020',
        'user-info-others': '#828282',
        'ghost': '#6F6F6F'
      },
      borderColor: {
        tabs: '#282828',
        'user-info-main': '#D9D9D9',
        'user-info-others': '#828282',
        '5C5C5C': '#5C5C5C',
        'ghost': '#6F6F6F'
      },
      textColor: {
        'default': '#EDEDED',
        'primary': '#030303',
        'disabled': '#000000',
        'tabs': '#B2B2B2',
        'tabs-active': '#EDEDED',
        'user-info-main': '#D9D9D9',
        'user-info-others': '#828282',
        'user-level-title': '#7D7D7D',
        'ghost': '#6F6F6F'
      },
      borderRadius: {
        'card': '20px'
      },
      width: {
        'line-progress': '275px',
        '37.5': '150px',
        '105px': '105px'
      },
      height: {
        'line-progress': '12px',
        '13': '52px',
        '7.5': '30px',
        '45': '180px'
      },
      margin: {
        '80': '80px',
        '11px': '11px',
        '11.5': '46px',
        '7.5': '30px',
        '6.5': '26px',
        '17': '68px',
        '13.5': '54px',
        '47px': '47px'
      },
      padding: {
        '7.5': '30px'
      },
      borderWidth: {
        '0.5px': '0.5px',
        '1px': '1px'
      },
      spacing: {
        '11.5': '46px'
      },
      fontSize: {
        'button': '14px'
      },
      lineHeight: {
        'button': '15.4px',
        '13': '52px',
        '14px': '14px'
      },
      fontFamily: {
        'button-font': ['NEXT Book']
      },
      backgroundImage: {
        'button-default': 'linear-gradient(180deg, #353535 0%, #2E2E2E 100%)',
        'list': 'linear-gradient(180deg, rgba(16, 16, 16, 0) 0%, #101010 100%)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      
    }
  },
  plugins: [],
}
