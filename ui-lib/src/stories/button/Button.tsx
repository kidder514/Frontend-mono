import cx from 'classnames';
import React from 'react';

interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	label: string | React.ReactNode;
	theme?: 'neutral' | 'primary' | 'secondary' | 'accent' | 'ghost' | 'link';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ label, theme, ...props }: ButtonProps, ref): React.ReactElement => {
	let computedStyleClass;
	switch (theme) {
		case 'primary':
			computedStyleClass = 'btn-primary';
			break;
		case 'secondary':
			computedStyleClass = 'btn-secondary';
			break;
		case 'accent':
			computedStyleClass = 'btn-accent';
			break;
		case 'ghost':
			computedStyleClass = 'btn-ghost';
			break;
		case 'link':
			computedStyleClass = 'btn-link';
			break;
		default:
			computedStyleClass = '';
			break;
	}
	return (
		<button {...props} type="button" className={cx('btn', computedStyleClass, props.className)} ref={ref}>
			{label}
		</button>
	);
});

Button.displayName = 'Button';
export default Button;
