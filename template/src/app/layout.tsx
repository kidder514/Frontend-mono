import ThemePreset from '@component/common/themeSwitcher/ThemePreset';
import cx from 'classnames';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import '@style/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'template app',
	description: 'used as template',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="h-full">
			<body className={cx(inter.className, 'h-full')}>{children}</body>
			<ThemePreset />
		</html>
	);
}
