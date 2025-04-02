import { render, screen, fireEvent } from '@testing-library/react';
import { Input } from './input';
import '@testing-library/jest-dom';
import { createRef } from 'react';

describe('Input Component', () => {
  it('should render with default styles', () => {
    render(<Input />);

    const input = screen.getByRole('textbox');

    expect(input).toHaveClass(
      'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm'
    );
  });

  it('should apply custom className', () => {
    render(<Input className="custom-class" />);

    const input = screen.getByRole('textbox');

    expect(input).toHaveClass('custom-class');
  });

  it('should handle different input types', () => {
    const { container } = render(<Input type="password" />);

    const input = container.querySelector('input');

    expect(input).toHaveAttribute('type', 'password');
  });

  it('should render in disabled state when disabled prop is passed', () => {
    render(<Input disabled />);

    const input = screen.getByRole('textbox');

    expect(input).toBeDisabled();

    expect(input).toHaveClass('disabled:cursor-not-allowed');
    expect(input).toHaveClass('disabled:opacity-50');
  });

  it('should forward refs correctly', () => {
    const ref = createRef<HTMLInputElement>();

    render(<Input ref={ref} />);

    const input = screen.getByRole('textbox');

    expect(ref.current).toBe(input);
  });

  it('should forward other props correctly', () => {
    const onChange = jest.fn();

    render(<Input onChange={onChange} />);

    const input = screen.getByRole('textbox');

    fireEvent.change(input, { target: { value: 'Test value' } });

    expect(onChange).toHaveBeenCalled();
  });
});
