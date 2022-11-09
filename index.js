const plugin = require('tailwindcss/plugin');

const childSelect = plugin(function ({addVariant, theme}) {
  const classVariants = theme('classVariants');
  for (const variant in classVariants) {
    addVariant(`${variant}`, ` .${classVariants[variant]} &`);
  }
});

module.exports = childSelect;