import cx from 'classnames';
import React from 'react';

interface FlexRowProps {
	children: Readonly<React.ReactNode>;
	classNames?: string;
}

const FlexRow = ({ classNames, children }: FlexRowProps) => {
	return <div className={cx('flex flex-row h-full', classNames)}>{children}</div>;
};

export default FlexRow;
