import { render, screen } from '@testing-library/react';
import NotFound from './not-found';

describe('NotFound Component', () => {
  it('renders the "Page Not Found" heading', () => {
    render(<NotFound />);

    expect(screen.getByText('Page Not Found')).toBeInTheDocument();
  });
});
