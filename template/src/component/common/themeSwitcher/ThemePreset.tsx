'use client';

import { THEME, THEME_KEY } from '@ui-lib/button/ButtonSwapThemeSwitch';
import { useEffect } from 'react';

const ThemePreset = () => {
	useEffect(() => {
		let localStoredTheme = window.localStorage.getItem(THEME_KEY);
		// initialise theme using localstorage
		if (localStoredTheme === undefined) {
			window.localStorage.setItem(THEME_KEY, THEME.LIGHT);
			localStoredTheme = THEME.LIGHT;
		}

		document.querySelector('html')?.setAttribute('data-theme', localStoredTheme as string);
	}, []);

	return <></>;
};

export default ThemePreset;
