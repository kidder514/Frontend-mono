import Header from '@ui-lib/header/Header';
import PaddingContainerRound from '@ui-lib/paddingContainer/PaddingContainerRound';
import ButtonRound from '@ui-lib/button/ButtonRound';
import TextInputWithButton from '@ui-lib/input/TextInputWithButton';
import IconNotification from '@ui-lib/icon/IconNotification';
import IconWithBadge from '@ui-lib/icon/IconWithBadge';
import AvatarDropdown from '@ui-lib/avatarDropdown/AvatarDropdown';
import { ThemeSwitcher } from '@component/common/themeSwitcher/ThemeSwitcher';

export default function page() {
	return (
		<PaddingContainerRound>
			<Header
				leftNode={<h1>Logo</h1>}
				midNode={<TextInputWithButton />}
				rightNode={
					<>
						<ButtonRound label={<IconWithBadge icon={<IconNotification />} />} />
						<ThemeSwitcher />
						<AvatarDropdown
							imageUrl="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
							linkList={[
								{ text: 'Profile', url: '#' },
								{ text: 'Settings', url: '#' },
								{ text: 'Logout', url: '#' },
							]}
						/>
					</>
				}
			/>
		</PaddingContainerRound>
	);
}
