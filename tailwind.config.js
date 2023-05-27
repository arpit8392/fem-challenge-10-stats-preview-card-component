/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				violet: {
					450: '#AB5CDB',
				},
				blue: {
					650: '#1B1937',
					850: '#0A0C1C',
				},
			},
			fontFamily: {
				sans: ['var(--font-inter)'],
				lexendDeca: ['var(--font-lexend-deca)'],
			},
		},
	},
	plugins: [],
}
