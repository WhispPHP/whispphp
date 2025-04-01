module.exports = {
  content: [
    './resources/**/*.js',
    './resources/**/*.antlers.html',
    './resources/**/*.antlers.php',
    './resources/**/*.blade.php',
    './resources/**/*.vue',
    './content/**/*.md'
  ],
  darkMode: 'class',
  theme: {
    extend: {
        colors: {
            'brand-yellow': '#F2C94C',
        },
        fontFamily: {
            montserrat: ['Montserrat', 'sans-serif'],
        },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ],
}
