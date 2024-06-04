import { render, screen } from '@testing-library/react';
import { ActionBanner } from './ActionBanner';

// example unit testing
describe('ActionBanner', () => {
	it('component should render', () => {
		render(<ActionBanner />);
		const bannerText = screen.getByText(/this is a banner/i);
		expect(bannerText).toBeTruthy();
	});
});
