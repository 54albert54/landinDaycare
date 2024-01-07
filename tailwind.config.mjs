/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				mainWhite:'#f7f7f7',
				mainColor:'#9293fd',
				callToAction:'#1c1819',
				importantText:'#dc2777',
				normaltext:'#202028'

			}
		},
	},
	plugins: [],
}
