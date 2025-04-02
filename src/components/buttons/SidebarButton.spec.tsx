import { render, fireEvent, screen } from '@testing-library/react';
import { SidebarButton, SidebarProvider } from './SidebarButton';

window.matchMedia = jest.fn().mockReturnValue({
  matches: false,
  addListener: jest.fn(),
  removeListener: jest.fn(),
});

describe('SidebarButton', () => {
  it('renders with sidebar open initially on large screens', () => {
    window.matchMedia = jest.fn().mockReturnValue({
      matches: false,
    });

    render(
      <SidebarProvider>
        <SidebarButton />
      </SidebarProvider>
    );

    const button = screen.getByRole('button');
    expect(button).toHaveClass('sidebar-open');
    expect(button).toHaveClass('sidebar-set');
  });

  it('renders with sidebar closed initially on small screens', () => {
    window.matchMedia = jest.fn().mockReturnValue({
      matches: true,
    });

    render(
      <SidebarProvider>
        <SidebarButton />
      </SidebarProvider>
    );

    const button = screen.getByRole('button');
    expect(button).toHaveClass('sidebar-closed');
  });

  it('toggles sidebar open/closed when clicked', () => {
    window.matchMedia = jest.fn().mockReturnValue({
      matches: false,
    });

    render(
      <SidebarProvider>
        <SidebarButton />
      </SidebarProvider>
    );

    const button = screen.getByRole('button');

    expect(button).toHaveClass('sidebar-open');

    fireEvent.click(button);

    expect(button).toHaveClass('sidebar-closed');

    fireEvent.click(button);

    expect(button).toHaveClass('sidebar-open');
  });
});
