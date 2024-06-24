import ThemeSwitcher from '@component/common/themeSwitcher/ThemeSwitcher';
import { LOGO_DARK, LOGO_LIGHT } from '@root/src/const/constant';
import ButtonRound from '@ui-lib/button/ButtonRound';
import ButtonWithIcon from '@ui-lib/button/ButtonWithIcon';
import Header from '@ui-lib/header/Header';
import IconWithBadge from '@ui-lib/icon/IconWithBadge';
import FlexRow from '@ui-lib/layout/FlexRow';
import PaddingContainer from '@ui-lib/layout/PaddingContainer';
import AvatarDropdown from '@ui-lib/nav/AvatarDropdown';
import SideMenu from '@ui-lib/nav/SideMenu';
import Link from 'next/link';
import {
	HiOutlineArrowRightStartOnRectangle,
	HiOutlineBars4,
	HiOutlineBell,
	HiOutlineCurrencyDollar,
	HiOutlineDocument,
	HiOutlineHome,
	HiOutlineLightBulb,
	HiOutlineListBullet,
	HiOutlineMagnifyingGlass,
	HiOutlinePhone,
	HiOutlinePresentationChartLine,
	HiOutlineUser,
} from 'react-icons/hi2';

export default function page({ children }: { children: React.ReactNode }) {
	return (
		<>
			<PaddingContainer classNames="h-full bg-base-200" size="sm">
				<FlexRow>
					<SideMenu
						logoDark={LOGO_DARK}
						logoLight={LOGO_LIGHT}
						menuList={[
							{
								link: (
									<Link href="/dashboard">
										<HiOutlineHome size={20} />
										Dashboard
									</Link>
								),
							},
							{
								link: (
									<Link href="/currency">
										<HiOutlineCurrencyDollar size={20} />
										Currency
									</Link>
								),
							},
							{
								link: (
									<Link href="/Instrument">
										<HiOutlineListBullet size={20} />
										Instrument
									</Link>
								),
							},
							{
								label: (
									<>
										<HiOutlineDocument size={20} />
										Report
									</>
								),
								childrenList: [
									{
										link: (
											<Link href="/report/user-report">
												<HiOutlineUser size={20} />
												User Report
											</Link>
										),
									},
									{
										link: (
											<Link href="/report/financial-report">
												<HiOutlinePresentationChartLine size={20} />
												Financial Report
											</Link>
										),
									},
									{
										link: (
											<Link href="/report/activity-report">
												<HiOutlinePhone size={20} />
												Activity Report
											</Link>
										),
									},
									{
										link: (
											<Link href="/report/insight-report">
												<HiOutlineLightBulb size={20} />
												Insight Report
											</Link>
										),
									},
								],
							},
							{
								link: (
									<Link href="/logout">
										<HiOutlineArrowRightStartOnRectangle size={20} />
										Logout
									</Link>
								),
							},
						]}
					/>
					<PaddingContainer size="sm" classNames="flex-1 pt-0 pr-0">
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
						<>{children}</>
					</PaddingContainer>
				</FlexRow>
			</PaddingContainer>
		</>
	);
}
