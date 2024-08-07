/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{html,js}'],
	theme: {
		extend: {
			width: {
				512: '32rem',
				192: '12rem',
			},
			colors: {
				'slate-blue': 'hsl(252, 100%, 67%)',
				'royal-blue': 'hsl(241, 81%, 54%)',
				'violet-blue': 'hsla(256, 72%, 46%, 1)',
				'persian-blue': 'hsla(241, 72%, 46%, 0)',
				'dark-gray-blue': 'hsl(224, 30%, 27%)',
				'light-red': 'hsl(0, 100%, 67%)',
				'orangey-yellow': 'hsl(39, 100%, 56%)',
				'green-teal': 'hsl(166, 100%, 37%)',
				'cobalt-blue': 'hsl(234, 85%, 45%)',
				'light-red-bg': 'hsla(0, 100%, 67%, 0.15)',
				'orangey-yellow-bg': 'hsla(39, 100%, 56%, 0.15)',
				'green-teal-bg': 'hsla(166, 100%, 37%, 0.15)',
				'cobalt-blue-bg': 'hsla(234, 85%, 45%, 0.15)',
			},
		},
		fontFamily: {
			sans: ['Hanken Grotesk'],
		},
		screens: {
			mobile: { max: '400px' },
		},
	},
	plugins: [],
}
