import cx from 'classnames';

interface HeaderProps {
	leftNode?: React.ReactNode;
	midNode?: React.ReactNode;
	rightNode?: React.ReactNode;
	className?: string;
}

const Header = ({ leftNode, midNode, rightNode, className }: HeaderProps) => (
	<div className={cx('navbar bg-base-100 shadow-sm rounded-lg', className)}>
		<div className="navbar-start gap-2">{leftNode}</div>
		<div className="navbar-center gap-2">{midNode}</div>
		<div className="navbar-end gap-2">{rightNode}</div>
	</div>
);

export default Header;
