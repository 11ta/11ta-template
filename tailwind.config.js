module.exports = {
	purge: ['./src/**/*.html', './src/**/*.njk', './src/**/*.md'],
	theme: {
		extend: {},
	},
	variants: {},
	plugins: [require('@tailwindcss/custom-forms')],
}
