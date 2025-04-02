import { render, screen } from '@testing-library/react';
import { NavButtonMenu } from './NavButtonMenu';
import { Home } from 'lucide-react';
import { ThemeProvider } from 'next-themes';

window.matchMedia = jest.fn().mockReturnValue({
  matches: false,
  addListener: jest.fn(),
  removeListener: jest.fn(),
});
// Mock the router
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

describe('NavButtonMenu Component', () => {
  const mockChoices = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Profile', href: '/profile' },
  ];

  it('renders the button with icon and label', () => {
    render(
      <ThemeProvider>
        <NavButtonMenu
          icon={Home}
          title="Menu"
          label="Open menu"
          choices={mockChoices}
        />
      </ThemeProvider>
    );

    // Check if button with correct title exists
    expect(screen.getByLabelText('Menu')).toBeInTheDocument();
  });
});
