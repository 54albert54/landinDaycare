/** @type {import('tailwindcss').Config} */
import animations from '@midudev/tailwind-animations'
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				mainWhite:'#c4c6cc',
				mainColor:'#2b2d33',
				callToAction:'#806b7e',
				importantText:'#dc2777',
				normaltext:'#202028',
				textColor:'#c4c6cc'

			}
		},
	},
	plugins: [animations],
}
