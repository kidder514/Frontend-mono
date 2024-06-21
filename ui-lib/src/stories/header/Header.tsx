import cx from 'classnames';

interface HeaderProps {
	leftNode?: React.ReactNode;
	midNode?: React.ReactNode;
	rightNode?: React.ReactNode;
	className?: string;
}

const Header = ({ leftNode, midNode, rightNode, className }: HeaderProps) => (
	<div className={cx('navbar bg-base-200 shadow-xl rounded-box', className)}>
		<div className="navbar-start">{leftNode}</div>
		<div className="navbar-center">{midNode}</div>
		<div className="navbar-end gap-2">{rightNode}</div>
	</div>
);

export default Header;
