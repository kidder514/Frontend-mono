import FlexColumn from '../layout/FlexColumn';

interface MenuItem {
	label?: React.ReactNode;
	link?: React.ReactNode; // the <Link /> element from nextjs
	childrenList?: MenuItem[];
}

interface SideMenuProps {
	logoLight?: string;
	logoDark?: string;
	menuList: MenuItem[];
}

const SideMenu = ({ logoDark, logoLight, menuList }: SideMenuProps) => (
	<FlexColumn classNames={'shadow-sm rounded-lg w-[240px]'}>
		<header className="flex h-16 items-center justify-center ">
			<img alt="logo-light" loading="lazy" width="100" height="20" decoding="async" className="block=" src={logoLight} />
			<img alt="logo-dark" loading="lazy" width="100" height="20" decoding="async" className="hidden=" src={logoDark} />
		</header>
		<ul className="menu menu-md w-full flex-1">{renderMenu(menuList)}</ul>
		<span className="h-8 text-center text-xs">Version 1.0.0</span>
	</FlexColumn>
);

const renderMenu = (menu: MenuItem[], classNames = ''): React.ReactNode => {
	return menu.map((item, index) => {
		const className = `${classNames}-${index}`;
		if (item.childrenList?.length) {
			return (
				<li className={className}>
					<details>
						<summary>{item.label && item.label}</summary>
						<ul>{renderMenu(item.childrenList, className)}</ul>
					</details>
				</li>
			);
		} else {
			return <li className={className}>{item.link && item.link}</li>;
		}
	});
};

export default SideMenu;
