import cx from 'classnames';

interface IconSwapProps {
	iconFrom: React.ReactNode;
	iconTo: React.ReactNode;
	checked?: boolean;
	onChange: () => void;
	className?: string;
}

export default function IconSwap({ iconFrom, iconTo, checked, onChange, className }: IconSwapProps) {
	return (
		<label className={cx('swap swap-rotate', className)}>
			<input type="checkbox" checked={checked} onChange={onChange} />
			{iconFrom}
			{iconTo}
		</label>
	);
}
