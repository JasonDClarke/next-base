import { render, screen, fireEvent } from '@testing-library/react';
import { Checkbox } from './checkbox';
import '@testing-library/jest-dom';
import { createRef } from 'react';

describe('Checkbox Component', () => {
  it('should render with default styles', () => {
    render(<Checkbox />);

    const checkbox = screen.getByRole('checkbox');

    expect(checkbox).toHaveClass(
      'peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground'
    );
  });

  it('should apply custom className', () => {
    render(<Checkbox className="custom-class" />);

    const checkbox = screen.getByRole('checkbox');

    expect(checkbox).toHaveClass('custom-class');
  });

  it('should toggle checked state on click', () => {
    render(<Checkbox />);

    const checkbox = screen.getByRole('checkbox');

    expect(checkbox).not.toBeChecked();

    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();

    fireEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
  });

  it('should render in disabled state when disabled prop is passed', () => {
    render(<Checkbox disabled />);

    const checkbox = screen.getByRole('checkbox');

    expect(checkbox).toBeDisabled();

    expect(checkbox).toHaveClass('disabled:cursor-not-allowed');
    expect(checkbox).toHaveClass('disabled:opacity-50');
  });

  it('should forward refs correctly', () => {
    const ref = createRef<HTMLButtonElement>();

    render(<Checkbox ref={ref} />);

    const checkbox = screen.getByRole('checkbox');

    expect(ref.current).toBe(checkbox);
  });

  it('should forward other props correctly', () => {
    const onClick = jest.fn();
    render(<Checkbox onClick={onClick} />);

    const checkbox = screen.getByRole('checkbox');

    fireEvent.click(checkbox);

    expect(onClick).toHaveBeenCalled();
  });
});
