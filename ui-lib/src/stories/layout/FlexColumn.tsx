import React from 'react';
import cx from 'classnames';

interface FlexColumnProps {
	children: Readonly<React.ReactNode>;
	classNames?: string;
}

const FlexColumn = ({ classNames, children }: FlexColumnProps) => {
	return <div className={cx('flex flex-col h-full', classNames)}>{children}</div>;
};

export default FlexColumn;
