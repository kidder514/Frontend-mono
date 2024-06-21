import React from 'react';
interface TextInputBaseProps extends Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'ref'> {}

const TextInputBase = React.forwardRef<HTMLInputElement, TextInputBaseProps>(({ ...props }: TextInputBaseProps, ref): React.ReactElement => {
	return <input {...props} type="text" className="grow" ref={ref} />;
});

TextInputBase.displayName = 'TextInputBase';
export default TextInputBase;
