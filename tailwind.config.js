module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				cream: {
					50: '#fefcf8',
					100: '#fdf9f0',
					200: '#fbf2d9',
					300: '#f8e8b8',
					400: '#f4d98a',
					500: '#f0c75c',
					600: '#e8b23a',
					700: '#d99a2e',
					800: '#b47a28',
					900: '#926425',
				},
			},
		},
	},
	plugins: [require('tailwindcss-safe-area')],
}
