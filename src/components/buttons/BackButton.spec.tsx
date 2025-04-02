import { render, screen, fireEvent } from '@testing-library/react';
import { BackButton } from './BackButton';
import { useRouter } from 'next/navigation';
import '@testing-library/jest-dom';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

describe('BackButton', () => {
  it('renders the button with the correct title and className', () => {
    render(<BackButton title="Go Back" className="custom-class" />);

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();

    expect(button).toHaveAttribute('title', 'Go Back');

    expect(button).toHaveClass('custom-class');
  });

  it('calls router.back() when clicked', () => {
    const mockBack = jest.fn();

    (useRouter as jest.Mock).mockReturnValue({ back: mockBack });

    render(<BackButton title="Go Back" />);

    const button = screen.getByRole('button');

    fireEvent.click(button);

    expect(mockBack).toHaveBeenCalledTimes(1);
  });

  it('renders with the correct variant (check existence of destructive)', () => {
    render(<BackButton title="Go Back" variant="destructive" />);

    const button = screen.getByRole('button');

    expect(button).toHaveClass('text-destructive-foreground');
  });
});
