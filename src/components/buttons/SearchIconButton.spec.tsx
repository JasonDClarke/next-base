import { render, screen } from '@testing-library/react';
import SearchIconButton from '@/components/buttons/SearchIconButton';
import { useFormStatus } from 'react-dom';
import '@testing-library/jest-dom';

// Mock useFormStatus hook
jest.mock('react-dom', () => ({
  ...jest.requireActual('react-dom'),
  useFormStatus: jest.fn(),
}));

describe('SearchButton', () => {
  it('renders the button with text "Search" by default', () => {
    (useFormStatus as jest.Mock).mockReturnValue({ pending: false });

    render(<SearchIconButton />);

    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument();
    expect(screen.getByRole('button')).not.toBeDisabled();
  });

  it('disables the button and shows a loader when status is pending', () => {
    (useFormStatus as jest.Mock).mockReturnValue({ pending: true });

    render(<SearchIconButton />);

    expect(screen.getByRole('button')).toBeDisabled();
    expect(screen.getByRole('button')).toContainHTML('animate-spin');
  });
});
