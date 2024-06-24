import React from 'react';

interface CheckboxProps extends Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'ref'> {
	label?: string | React.ReactNode;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(({ label, ...props }: CheckboxProps, ref): React.ReactElement => {
	return (
		<div className="form-control py-4">
			<label className="cursor-pointer label">
				<input {...props} type="checkbox" className="checkbox" ref={ref} />
				<span className="label-text">{label}</span>
			</label>
		</div>
	);
});

Checkbox.displayName = 'Checkbox';
export default Checkbox;
