const plugin = require('tailwindcss/plugin')
module.exports = {
  content: ['test/index.html'],
  theme: {
    extend: {},
  },
  plugins: [
    require('./index'),
  ],
}