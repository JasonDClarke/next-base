import { render, screen } from '@testing-library/react';
import { Textarea } from './textarea';
import '@testing-library/jest-dom';
import { createRef } from 'react';

describe('Textarea Component', () => {
  it('should render with default styles', () => {
    render(<Textarea placeholder="Enter text here" />);

    const textarea = screen.getByPlaceholderText('Enter text here');
    expect(textarea).toBeInTheDocument();

    expect(textarea).toHaveClass(
      'flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm'
    );
  });

  it('should apply custom className', () => {
    render(<Textarea className="custom-class" placeholder="Custom class" />);

    const textarea = screen.getByPlaceholderText('Custom class');
    expect(textarea).toHaveClass('custom-class');
  });

  it('should forward refs correctly', () => {
    const ref = createRef<HTMLTextAreaElement>();

    render(<Textarea ref={ref} placeholder="Ref test" />);

    expect(ref.current).toBeInTheDocument();
  });

  it('should forward other props correctly', () => {
    render(<Textarea placeholder="Disabled test" disabled />);

    const textarea = screen.getByPlaceholderText('Disabled test');
    expect(textarea).toBeInTheDocument();

    expect(textarea).toBeDisabled();
  });
});
