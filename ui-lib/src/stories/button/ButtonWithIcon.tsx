import cx from 'classnames';
import React from 'react';

interface ButtonWithIconProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	label: string | React.ReactNode;
	icon: React.ReactNode;
	iconAtLeft?: boolean;
}

const ButtonWithIcon = React.forwardRef<HTMLButtonElement, ButtonWithIconProps>(
	({ label, icon, iconAtLeft = true, ...props }: ButtonWithIconProps, ref): React.ReactElement => {
		return (
			<button {...props} type="button" className={cx('btn', props.className)} ref={ref}>
				{iconAtLeft && icon}
				{label}
				{!iconAtLeft && icon}
			</button>
		);
	}
);

ButtonWithIcon.displayName = 'ButtonWithIcon';
export default ButtonWithIcon;
