import { render, screen } from '@testing-library/react';
import { usePathname } from 'next/navigation';
import SidebarNavButton from './SidebarNavButton';
import '@testing-library/jest-dom';

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
}));

describe('SidebarNavButton', () => {
  it('renders correctly when selected', () => {
    (usePathname as jest.Mock).mockReturnValue('/selected-path');

    const testHref = '/selected-path';
    const testIcon = <span>🔗</span>;
    const testText = 'Test Button';

    render(
      <SidebarNavButton href={testHref} icon={testIcon}>
        {testText}
      </SidebarNavButton>
    );

    expect(screen.getByText(testText)).toBeInTheDocument();
  });

  it('renders correctly when not selected', () => {
    (usePathname as jest.Mock).mockReturnValue('/other-path');

    const testHref = '/selected-path';
    const testIcon = <span>🔗</span>;
    const testText = 'Test Button';

    render(
      <SidebarNavButton href={testHref} icon={testIcon}>
        {testText}
      </SidebarNavButton>
    );

    expect(screen.getByText(testText)).toBeInTheDocument();
  });

  it('renders the icon and text correctly', () => {
    const testHref = '/selected-path';
    const testIcon = <span>🔗</span>;
    const testText = 'Test Button';

    render(
      <SidebarNavButton href={testHref} icon={testIcon}>
        {testText}
      </SidebarNavButton>
    );

    expect(screen.getByText(testText)).toBeInTheDocument();
    expect(screen.getByText('🔗')).toBeInTheDocument();
  });
});
