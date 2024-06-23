import Header from '@ui-lib/header/Header';
import PaddingContainer from '@ui-lib/layout/PaddingContainer';
import ButtonRound from '@ui-lib/button/ButtonRound';
import ButtonWithIcon from '@ui-lib/button/ButtonWithIcon';
import {
	HiOutlineBell,
	HiOutlineHome,
	HiOutlineCurrencyDollar,
	HiOutlineListBullet,
	HiOutlineDocument,
	HiOutlineArrowRightStartOnRectangle,
	HiOutlineUser,
	HiOutlinePresentationChartLine,
	HiOutlinePhone,
	HiOutlineLightBulb,
	HiOutlineBars4,
	HiOutlineMagnifyingGlass,
} from 'react-icons/hi2';
import IconWithBadge from '@ui-lib/icon/IconWithBadge';
import AvatarDropdown from '@ui-lib/nav/AvatarDropdown';
import SideMenu from '@ui-lib/nav/SideMenu';
import FlexRow from '@ui-lib/layout/FlexRow';
import { ThemeSwitcher } from '@component/common/themeSwitcher/ThemeSwitcher';

export default function page() {
	return (
		<>
			<PaddingContainer classNames="h-screen bg-base-200">
				<FlexRow>
					<SideMenu
						logoDark="https://nexus.daisyui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-dark.cce044d8.png&w=96&q=75"
						logoLight="https://nexus.daisyui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-light.ea00a81c.png&w=96&q=75"
						menuList={[
							{
								label: (
									<>
										<HiOutlineHome size={20} />
										Dashboard
									</>
								),
								link: '#',
							},
							{
								label: (
									<>
										<HiOutlineCurrencyDollar size={20} />
										Currencies
									</>
								),
								link: '#',
							},
							{
								label: (
									<>
										<HiOutlineListBullet size={20} />
										Instrument
									</>
								),
								link: '#',
							},
							{
								label: (
									<>
										<HiOutlineDocument size={20} />
										Report
									</>
								),
								link: '#',
								childrenList: [
									{
										label: (
											<>
												<HiOutlineUser size={20} />
												User Report
											</>
										),
										link: '#',
									},
									{
										label: (
											<>
												<HiOutlinePresentationChartLine size={20} />
												Financial Report
											</>
										),
										link: '#',
									},
									{
										label: (
											<>
												<HiOutlinePhone size={20} />
												Activity Report
											</>
										),
										link: '#',
									},
									{
										label: (
											<>
												<HiOutlineLightBulb size={20} />
												Insight Report
											</>
										),
										link: '#',
									},
								],
							},
							{
								label: (
									<>
										<HiOutlineArrowRightStartOnRectangle size={20} />
										Logout
									</>
								),
								link: '#',
							},
						]}
					/>
					<PaddingContainer top={false}>
						<Header
							leftNode={
								<>
									<ButtonRound label={<HiOutlineBars4 size={20} />} />
									<ButtonWithIcon label="Search" className="btn-sm w-64 justify-start" icon={<HiOutlineMagnifyingGlass size={20} />} />
								</>
							}
							rightNode={
								<>
									<ThemeSwitcher />
									<ButtonRound label={<IconWithBadge icon={<HiOutlineBell size={20} />} />} />
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
						<div>content</div>
					</PaddingContainer>
				</FlexRow>
			</PaddingContainer>
		</>
	);
}
