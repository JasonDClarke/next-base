import { render, screen } from '@testing-library/react';
import { ColorModeToggle } from './ColorModeToggle';
import { ThemeProvider } from 'next-themes';

window.matchMedia = jest.fn().mockReturnValue({
  matches: false,
  addListener: jest.fn(),
  removeListener: jest.fn(),
});

jest.mock('next-themes', () => ({
  ...jest.requireActual('next-themes'),
  useTheme: () => ({
    setTheme: jest.fn(),
  }),
}));

describe('ColorModeToggle Component', () => {
  it('renders the toggle button', () => {
    render(
      <ThemeProvider>
        <ColorModeToggle />
      </ThemeProvider>
    );

    expect(screen.getByLabelText('Set Color Scheme')).toBeInTheDocument();
  });
});
