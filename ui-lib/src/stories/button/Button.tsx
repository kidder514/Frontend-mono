import React from 'react';
import cx from 'classnames';

interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	label: string | React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ label, ...props }: ButtonProps, ref): React.ReactElement => {
	return (
		<button {...props} type="button" className={cx('btn', props.className)} ref={ref}>
			{label}
		</button>
	);
});

Button.displayName = 'Button';
export default Button;
