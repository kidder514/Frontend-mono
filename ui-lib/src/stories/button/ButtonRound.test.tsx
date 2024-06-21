import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import ButtonRound from './ButtonRound';

// example unit testing

test('component should render', () => {
	render(<ButtonRound label={1} />);
	const text = screen.getByText(1);
	expect(text).toBeTruthy();
});
