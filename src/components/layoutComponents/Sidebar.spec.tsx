import { render, screen } from '@testing-library/react';
import { Sidebar } from './Sidebar';

// desktop
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});
describe('Sidebar', () => {
  test('renders SidebarButton component', async () => {
    const { container } = render(await Sidebar());
    expect(container.querySelector('#sidebarButton')).toBeInTheDocument();
  });

  test('renders all navigation buttons', async () => {
    render(await Sidebar());
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Menu Settings')).toBeInTheDocument();
  });
});
