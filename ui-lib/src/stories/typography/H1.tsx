import cx from 'classnames';

interface H1Type extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {}
const H1 = ({ ...props }: H1Type): React.ReactNode => (
	<h1 {...props} className={cx(props.className, `text-xl py-8`)}>
		{props.children}
	</h1>
);

export default H1;
