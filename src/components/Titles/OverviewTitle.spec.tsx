import { render, screen } from '@testing-library/react';
import React from 'react';
import { OverviewTitle } from './OverviewTitle'; // Adjust the import path as needed

// Utility function to get the class list
const getClassList = (element: HTMLElement) => element.className.split(' ');

describe('OverviewTitle', () => {
  test('renders children correctly', () => {
    render(<OverviewTitle>Test Title</OverviewTitle>);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  test('applies the provided className', () => {
    render(
      <OverviewTitle className="custom-class">Styled Title</OverviewTitle>
    );
    const titleElement = screen.getByText('Styled Title');
    const classList = getClassList(titleElement);
    expect(classList).toContain('custom-class');
  });

  test('supports array className input', () => {
    render(
      <OverviewTitle className={['class-one', 'class-two']}>
        Multiple Classes
      </OverviewTitle>
    );
    const titleElement = screen.getByText('Multiple Classes');
    const classList = getClassList(titleElement);
    expect(classList).toContain('class-one');
    expect(classList).toContain('class-two');
  });

  test('includes default classes', () => {
    render(<OverviewTitle>Default Classes</OverviewTitle>);
    const titleElement = screen.getByText('Default Classes');
    const classList = getClassList(titleElement);
    expect(classList).toEqual(['text-lg', 'font-semibold']);
  });

  test('does not apply extra margin when className is not provided', () => {
    render(<OverviewTitle>No Extra Margin</OverviewTitle>);
    const titleElement = screen.getByText('No Extra Margin');
    const classList = getClassList(titleElement);
    expect(classList.join(' ')).not.toMatch(/^(m|mt|ml|mb|mr|mx|my)-/); // Adjust this check based on actual margin class usage
  });
});
