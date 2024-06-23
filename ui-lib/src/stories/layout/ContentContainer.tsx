import React from 'react';
import cx from 'classnames';

interface ContentContainerProps {
	title: string;
	children: Readonly<React.ReactNode>;
	classNames?: string;
}

const ContentContainer = ({ title, classNames, children }: ContentContainerProps) => {
	return (
		<div className={cx('flex flex-col', classNames)}>
			<h1 className="text-lg mt-4 mb-4">{title}</h1>
			{children}
		</div>
	);
};

export default ContentContainer;
