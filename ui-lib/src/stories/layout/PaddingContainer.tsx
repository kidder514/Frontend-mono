import cx from 'classnames';
import React from 'react';

interface PaddingContainerProps {
	size: 'sm' | 'md' | 'lg' | 'xl';
	children: Readonly<React.ReactNode>;
	classNames?: string;
}

const PaddingContainer = ({ size, classNames, children }: PaddingContainerProps) => {
	let computedPaddingClass;
	switch (size) {
		case 'sm':
			computedPaddingClass = 'p-4';
			break;
		case 'md':
			computedPaddingClass = 'p-8';
			break;
		case 'lg':
			computedPaddingClass = 'p-12';
			break;
		case 'xl':
			computedPaddingClass = 'p-16';
			break;
		default:
			break;
	}
	return <div className={cx(computedPaddingClass, classNames)}>{children}</div>;
};

export default PaddingContainer;
