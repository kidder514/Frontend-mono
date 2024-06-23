import React from 'react';
import cx from 'classnames';

interface PaddingContainerProps {
	left?: boolean;
	right?: boolean;
	top?: boolean;
	bottom?: boolean;
	children: Readonly<React.ReactNode>;
	classNames?: string;
}

const PaddingContainer = ({ left = true, right = true, top = true, bottom = true, classNames, children }: PaddingContainerProps) => {
	return <div className={cx({ 'pl-4': left }, { 'pr-4': right }, { 'pt-4': top }, { 'pb-4': bottom }, 'flex-1', classNames)}>{children}</div>;
};

export default PaddingContainer;
