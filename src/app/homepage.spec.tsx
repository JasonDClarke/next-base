import { render, screen } from '@testing-library/react';
import Home from './page';
import '@testing-library/jest-dom';

describe('Home Component', () => {
  it('renders the heading', () => {
    render(<Home />);

    const h1 = screen.getByRole('heading');
    expect(h1).toBeInTheDocument();
  });
});
