import React from 'react';
import IconSearch from '../icon/IconSearch';
import TextInputBase from './TextInputBase';
import ButtonRound from '../button/ButtonRound';

interface TextInputWithButtonProps extends Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'ref'> {}

const TextInputWithButton = React.forwardRef<HTMLInputElement, TextInputWithButtonProps>(({ ...props }: TextInputWithButtonProps, ref): React.ReactElement => {
	return (
		<label className="input input-bordered flex items-center gap-2">
			<TextInputBase {...props} ref={ref} />
			<ButtonRound label={<IconSearch />} />
		</label>
	);
});

TextInputWithButton.displayName = 'TextInputWithButton';
export default TextInputWithButton;
