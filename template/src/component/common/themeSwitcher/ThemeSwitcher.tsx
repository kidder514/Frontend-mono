'use client';

import ButtonSwapThemeSwitch, { THEME, THEME_KEY } from '@ui-lib/button/ButtonSwapThemeSwitch';
import { isDarkTheme } from '@util/browser';
import { useEffect, useState } from 'react';

const ThemeSwitcher = () => {
	const [theme, setTheme] = useState<THEME>();

	const handleToggle = () => {
		setTheme((prevTheme) => (prevTheme === THEME.LIGHT ? THEME.BLACK : THEME.LIGHT));
	};

	useEffect(() => {
		// initialise theme using localstorage
		if (theme === undefined) {
			let localStoredTheme = window.localStorage.getItem(THEME_KEY);
			setTheme((localStoredTheme ?? (isDarkTheme() ? THEME.BLACK : THEME.LIGHT)) as THEME);
			return;
		}

		window.localStorage.setItem(THEME_KEY, theme as string);
		document.querySelector('html')?.setAttribute('data-theme', theme as string);
	}, [theme]);

	return <ButtonSwapThemeSwitch theme={theme} onChange={handleToggle} />;
};

export default ThemeSwitcher;
