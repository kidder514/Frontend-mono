interface IconWithbadgeProps {
	icon: React.ReactNode;
	badgeText?: string;
}

export default function IconWithBadge({ icon, badgeText }: IconWithbadgeProps) {
	return (
		<div className="indicator">
			{icon}
			<span className="badge badge-xs badge-primary indicator-item">{badgeText}</span>
		</div>
	);
}
