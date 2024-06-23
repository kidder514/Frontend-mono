interface LinkListItem {
	text: string;
	url: string;
}

interface AvatarDropdownProps {
	imageUrl: string;
	linkList: LinkListItem[];
}

const AvatarDropdown = ({ imageUrl, linkList }: AvatarDropdownProps) => (
	<div className="dropdown dropdown-end">
		<div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
			<div className="w-10 rounded-full">
				<img alt="Tailwind CSS Navbar component" src={imageUrl} />
			</div>
		</div>
		<ul tabIndex={0} className="menu menu-md dropdown-content mt-3 z-[1] p-2 bg-base-100 rounded-lg w-52 shadow-sm">
			{linkList.map((link) => (
				<li key={link.text}>
					<a href={link.url}>{link.text}</a>
				</li>
			))}
		</ul>
	</div>
);

export default AvatarDropdown;
