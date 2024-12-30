// Normal color: Ocean

// import starlightPlugin from '@astrojs/starlight-tailwind';

// // Generated color palettes
// const accent = { 200: '#92d1fe', 600: '#0073aa', 900: '#003653', 950: '#00273d' };
// const gray = { 100: '#f3f7f9', 200: '#e7eff2', 300: '#bac4c8', 400: '#7b8f96', 500: '#495c62', 700: '#2a3b41', 800: '#182a2f', 900: '#121a1c' };

// /** @type {import('tailwindcss').Config} */
// export default {
// 	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
// 	theme: {
// 		extend: {
// 			colors: { accent, gray },
// 		},
// 	},
// 	plugins: [starlightPlugin()],
// };

// Lunar New Year: Pink (Peach blossom - Contrast AAA)

import starlightPlugin from '@astrojs/starlight-tailwind';

// Generated color palettes
const accent = { 200: '#f1b4d0', 600: '#9d0067', 900: '#5a0b3b', 950: '#3e0f29' };
const gray = { 100: '#eef9f8', 200: '#def3f2', 300: '#aec8c7', 400: '#629795', 500: '#2c615f', 700: '#054140', 800: '#002e2d', 900: '#061c1c' };

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: { accent, gray },
		},
	},
	plugins: [starlightPlugin()],
};