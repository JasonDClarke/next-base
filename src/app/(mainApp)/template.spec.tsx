import { render, screen } from '@testing-library/react';
import OpensteadTemplate from './template';

describe('OpensteadTemplate Component', () => {
  it('should render children inside a div with the animate-appear class', () => {
    render(
      <OpensteadTemplate>
        <p>Test Content</p>
      </OpensteadTemplate>
    );

    expect(screen.getByText('Test Content')).toBeInTheDocument();

    const div = screen.getByText('Test Content').parentElement;
    expect(div).toHaveClass('animate-appear');
  });
});
