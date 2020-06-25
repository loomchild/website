module.exports = {
  purge: [
    './*.html',
    './**/*.html',
  ],
  theme: {
    extend: {
      maxHeight: {
        'almost-screen': '85vh'
      }
    },
  },
  variants: {
    margin: ['responsive']
  },
  plugins: [],
}
