// tailwind.config.js
module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './sections/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: '#282828',
        green: '#F8FFF6',
        grey: '#D9D9D9',
        pink: '#FFF3F6',
        ['table-gray']: 'rgba(217, 217, 217, 0.19)',
      },
      fontSize: {
        xxs: ['12px', '14px'],
        xs: ['16px', '19px'],
        sm: ['18px', '22px'],
        base: ['20px', '24px'],
        lg: ['28px', '34px'],
        xl: ['36px', '44px'],
        ['2xl']: ['48px', '59px'],
        ['3xl']: ['56px', '68px'],
      },
    },
  },
  // variants: {
  //   extend: {},
  // },
  plugins: [
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
    // require('@tailwindcss/aspect-ratio'),
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/line-clamp'),
  ],
};
