import React from 'react';
import cx from 'classnames';

interface PaddingContainerRoundProps {
	children: Readonly<React.ReactNode>;
	classNames?: string;
}

const PaddingContainerRound = ({ classNames, children }: PaddingContainerRoundProps) => {
	return <div className={cx('m-4', classNames)}>{children}</div>;
};

export default PaddingContainerRound;
