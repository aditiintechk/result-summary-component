/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{html,js}'],
	theme: {
		extend: {
			width: {
				128: '32rem',
			},
			colors: {
				'slate-blue': 'hsl(252, 100%, 67%)',
				'royal-blue': 'hsl(241, 81%, 54%)',
				'violet-blue': 'hsla(256, 72%, 46%, 1)',
				'persian-blue': 'hsla(241, 72%, 46%, 0)',
			},
		},
		fontFamily: {
			sans: ['Hanken Grotesk'],
		},
	},
	plugins: [],
}
