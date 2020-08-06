const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.njk',
    './src/**/*.md'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/ui'),
    require('@tailwindcss/typography'),
  ],
}