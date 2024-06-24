import cx from 'classnames';
import React from 'react';

interface TextInputProps extends Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'ref'> {
	label?: string;
	subLabel?: string;
	errorMessage?: string;
	innerNode?: React.ReactNode;
	innerNodeLeft?: boolean;
}

const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
	({ label, subLabel, errorMessage, innerNode, innerNodeLeft = true, ...props }: TextInputProps, ref): React.ReactElement => {
		return (
			<label className={cx('form-control w-full max-w-xs py-4', props.className)}>
				<div className="label">
					{label && <span className="label-text">{label}</span>}
					{subLabel && <span className="label-text-alt">{subLabel}</span>}
				</div>
				<label className="input input-sm input-bordered flex items-center gap-2">
					{innerNode && innerNodeLeft && innerNode}
					<input {...props} placeholder="Type here" className="grow input-sm" ref={ref} />
					{innerNode && !innerNodeLeft && innerNode}
				</label>
				{errorMessage && (
					<div className="label">
						<span className="label-text-alt text-error">{errorMessage}</span>
					</div>
				)}
			</label>
		);
	}
);

TextInput.displayName = 'TextInput';
export default TextInput;
