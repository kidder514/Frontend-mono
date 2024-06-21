import IconSwap from '../icon/IconSwap';
import IconSun from '../icon/IconSun';
import IconMoon from '../icon/IconMoon';
import cx from 'classnames';

export const THEME_KEY = 'theme';
export enum THEME {
	BLACK = 'black',
	LIGHT = 'light',
}

interface ButtonSwapThemeSwitchProps {
	theme?: THEME;
	onChange: () => void;
	className?: string;
}

const ButtonSwapThemeSwitch = ({ theme = THEME.LIGHT, onChange, className }: ButtonSwapThemeSwitchProps) => {
	return (
		<IconSwap
			className={cx('btn btn-ghost btn-circle', className)}
			iconFrom={<IconSun />}
			iconTo={<IconMoon />}
			checked={theme === THEME.BLACK}
			onChange={onChange}
		/>
	);
};

export default ButtonSwapThemeSwitch;
