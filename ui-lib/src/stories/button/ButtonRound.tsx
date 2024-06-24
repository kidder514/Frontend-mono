import cx from 'classnames';
import React from 'react';

interface ButtonRoundProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	label: string | React.ReactNode;
}

const ButtonRound = React.forwardRef<HTMLButtonElement, ButtonRoundProps>(({ label, ...props }: ButtonRoundProps, ref): React.ReactElement => {
	return (
		<button {...props} type="button" className={cx('btn btn-ghost btn-circle', props.className)} ref={ref}>
			{label}
		</button>
	);
});

ButtonRound.displayName = 'ButtonRound';
export default ButtonRound;
