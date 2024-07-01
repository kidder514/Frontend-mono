import { LOGO_DARK, LOGO_LIGHT } from '@root/src/const/constant';

import FlexRow from '@ui-lib/layout/FlexRow';
import PaddingContainer from '@ui-lib/layout/PaddingContainer';
import SideMenu from '@ui-lib/nav/SideMenu';
import Link from 'next/link';

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
								link: <Link href="/dashboard">Dashboard</Link>,
							},
							{
								link: <Link href="/currency">Currency</Link>,
							},
							{
								link: <Link href="/Instrument">Instrument</Link>,
							},
							{
								label: <>Report</>,
								childrenList: [
									{
										link: <Link href="/report/user-report">User Report</Link>,
									},
									{
										link: <Link href="/report/financial-report">Financial Report</Link>,
									},
									{
										link: <Link href="/report/activity-report">Activity Report</Link>,
									},
									{
										link: <Link href="/report/insight-report">Insight Report</Link>,
									},
								],
							},
							{
								link: <Link href="/logout">Logout</Link>,
							},
						]}
					/>
					<PaddingContainer size="sm" classNames="flex-1 pt-0 pr-0">
						<>{children}</>
					</PaddingContainer>
				</FlexRow>
			</PaddingContainer>
		</>
	);
}
