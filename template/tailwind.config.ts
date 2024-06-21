import type { Config } from 'tailwindcss';

const config: Config = {
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', '../ui-lib/src/stories/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {},
	},
	plugins: [require('daisyui')],
};
export default config;
