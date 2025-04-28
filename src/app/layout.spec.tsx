import { render } from '@testing-library/react';
import RootLayout, { metadata } from './layout';

// Mock match
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
describe('RootLayout', () => {
  it('renders children correctly', () => {
    const { getByText } = render(
      <RootLayout>
        <p>Test Content</p>
      </RootLayout>
    );

    expect(getByText('Test Content')).toBeInTheDocument();
  });

  it('has the correct metadata', () => {
    expect(metadata).toEqual({
      title: {
        template: '%s | App',
        default: 'App',
      },
      description: 'App description.',
      applicationName: 'Base application',
    });
  });
});
