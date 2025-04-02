import { render, screen } from '@testing-library/react';
import { NavButton } from './NavButton';
import { Home } from 'lucide-react';

describe('NavButton', () => {
  it('renders the button with the correct icon and label', () => {
    const { container } = render(<NavButton icon={Home} label="Home" />);

    const button = screen.getByLabelText('Home');
    expect(button).toBeInTheDocument();

    const icon = container.querySelector('.lucide-house');
    expect(icon).toBeInTheDocument();

    expect(button).toHaveAttribute('aria-label', 'Home');
    expect(button).toHaveAttribute('title', 'Home');
  });

  it('renders the link if href is provided', () => {
    render(<NavButton icon={Home} label="Home" href="/home" />);

    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();

    expect(link).toHaveAttribute('href', '/home');
  });

  it('renders the icon without a link if href is not provided', () => {
    const { container } = render(<NavButton icon={Home} label="Home" />);

    const icon = container.querySelector('.lucide-house');
    expect(icon).toBeInTheDocument();

    const link = screen.queryByRole('link');
    expect(link).toBeNull();
  });
});
