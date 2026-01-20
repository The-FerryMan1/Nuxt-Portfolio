
export default defineTailwindConfig({
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Uses 'Inter' defined in nuxt.config
        display: ['Poppins', 'serif'], // Uses 'Poppins' from Google Fonts
      },
    },
  },
})
