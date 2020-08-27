const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	purge: [
		'./src/**/*.html',
		'./src/**/*.njk',
		'./src/**/*.md',
		'./src/_data/colors.js',
		'./src/_data/structure.js',
	],
	experimental: {
		applyComplexClasses: true,
	},
	future: {
		removeDeprecatedGapUtilities: true,
	},
	theme: {
		extend: {
			// created my own heights so can specify when using a carousel
			height: (theme) => ({
				'1/2': '50vh',
				'3/4': '75vh',
				'9/10': '90vh',
				'1/1': '100vh',
				'1/3': 'calc(100vh / 3)',
				'1/4': 'calc(100vh / 4)',
				'1/5': 'calc(100vh / 5)',
			}),
		},
	},
	variants: {},
	plugins: [require('@tailwindcss/custom-forms')],
}
