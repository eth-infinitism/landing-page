// tailwind.config.js
module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './sections/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: '#282828',
        green: '#67F2BE',
        grey: '#4F5748',
      },
      fontSize: {
        xs: ['16px', '19px'],
        sm: ['18px', '22px'],
        base: ['20px', '24px'],
        lg: ['28px', '34px'],
        xl: ['32px', '39px'],
        ['2xl']: ['60px', '73px'],
        ['3xl']: ['200px', '242px'],
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
