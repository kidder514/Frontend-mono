import { LOGO_DARK, LOGO_LIGHT } from '@root/src/const/constant';
import CenteredContainer from '@ui-lib/layout/CenteredContainer';
import FlexColumn from '@ui-lib/layout/FlexColumn';
import PaddingContainer from '@ui-lib/layout/PaddingContainer';
import Image from 'next/image';

export default function page({ children }: { children: React.ReactNode }) {
	return (
		<div className="h-full">
			<CenteredContainer>
				<PaddingContainer size="xl" classNames="shadow-sm rounded-lg">
					<FlexColumn>
						<header className="flex flex-col justify-center items-center">
							<Image alt="logo-light" loading="lazy" width="90" height="20" decoding="async" className="block" src={LOGO_LIGHT} />
							<Image alt="logo-dark" loading="lazy" width="90" height="20" decoding="async" className="hidden" src={LOGO_DARK} />
						</header>

						<>{children}</>
					</FlexColumn>
				</PaddingContainer>
			</CenteredContainer>
		</div>
	);
}
