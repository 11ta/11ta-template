module.exports = {
	purge: ['./src/**/*.html', './src/**/*.njk', './src/**/*.md'],
	experimental: {
		applyComplexClasses: true,
	},
	future: {
		removeDeprecatedGapUtilities: true,
	},
	theme: {
		extend: {},
	},
	variants: {},
	plugins: [require('@tailwindcss/custom-forms')],
}
