/// <reference types="vitest" />
import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
	plugins: [react(), tsconfigPaths()],
	test: {
		environment: 'jsdom',
		setupFiles: ['./vitest.setup.ts'],
		alias: {
			'@': path.resolve(__dirname, './src'),
			'@ui-lib': path.resolve(__dirname, '../ui-lib/src/stories'),
		},
	},
});
