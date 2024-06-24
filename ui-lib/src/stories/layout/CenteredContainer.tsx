import cx from 'classnames';
import React from 'react';

interface CenteredContainerProps {
	children: Readonly<React.ReactNode>;
	classNames?: string;
}

const CenteredContainer = ({ children, classNames }: CenteredContainerProps) => {
	return <div className={cx('h-full flex justify-center items-center', classNames)}>{children}</div>;
};

export default CenteredContainer;
