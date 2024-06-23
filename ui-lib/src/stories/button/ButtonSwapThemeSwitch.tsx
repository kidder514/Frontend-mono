import IconSwap from '../icon/IconSwap';
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi2';
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
			iconFrom={<HiOutlineSun size={20} />}
			iconTo={<HiOutlineMoon size={20} />}
			checked={theme === THEME.BLACK}
			onChange={onChange}
		/>
	);
};

export default ButtonSwapThemeSwitch;
