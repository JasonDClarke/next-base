import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './button';
import '@testing-library/jest-dom';
import { createRef } from 'react';

describe('Button Component', () => {
  it('should render with default styles', () => {
    render(<Button>Default Button</Button>);

    const button = screen.getByText('Default Button');
    expect(button).toBeInTheDocument();

    expect(button).toHaveClass(
      'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90'
    );
  });

  it('should apply custom className', () => {
    render(<Button className="custom-class">Custom Class Button</Button>);

    const button = screen.getByText('Custom Class Button');
    expect(button).toHaveClass('custom-class');
  });

  it('should handle variants correctly', () => {
    const { rerender } = render(
      <Button variant="destructive">Destructive Button</Button>
    );
    const button = screen.getByText('Destructive Button');
    expect(button).toHaveClass(
      'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90'
    );

    rerender(<Button variant="outline">Outline Button</Button>);
    expect(screen.getByText('Outline Button')).toHaveClass(
      'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground'
    );

    rerender(<Button variant="secondary">Secondary Button</Button>);
    expect(screen.getByText('Secondary Button')).toHaveClass(
      'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80'
    );

    rerender(<Button variant="ghost">Ghost Button</Button>);
    expect(screen.getByText('Ghost Button')).toHaveClass(
      'hover:bg-accent hover:text-accent-foreground'
    );

    rerender(<Button variant="link">Link Button</Button>);
    expect(screen.getByText('Link Button')).toHaveClass(
      'text-primary underline-offset-4 hover:underline'
    );
  });

  it('should handle sizes correctly', () => {
    const { rerender } = render(<Button size="sm">Small Button</Button>);
    const smallButton = screen.getByText('Small Button');
    expect(smallButton).toHaveClass('h-8 rounded-md px-3 text-xs');

    rerender(<Button size="lg">Large Button</Button>);
    const largeButton = screen.getByText('Large Button');
    expect(largeButton).toHaveClass('h-10 rounded-md px-8');

    rerender(<Button size="icon">Icon Button</Button>);
    const iconButton = screen.getByText('Icon Button');
    expect(iconButton).toHaveClass('h-9 w-9');
  });

  it('should render as a Slot component when asChild is true', () => {
    render(
      <Button asChild>
        <a href="/123">Slot Button</a>
      </Button>
    );

    const slotElement = screen.getByText('Slot Button');
    expect(slotElement.tagName).not.toBe('BUTTON');
    expect(slotElement.tagName).toBe('A');
    expect(slotElement.parentElement?.tagName).not.toBe('BUTTON');
  });

  it('should forward refs correctly', () => {
    const ref = createRef<HTMLButtonElement>();

    render(<Button ref={ref}>Ref Forwarding Button</Button>);

    expect(ref.current).toBeInTheDocument();
  });

  it('should forward other props correctly', () => {
    const handleClick = jest.fn();
    render(
      <Button onClick={handleClick} disabled>
        Click Me
      </Button>
    );

    const button = screen.getByText('Click Me');
    fireEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();

    expect(button).toBeDisabled();
  });
});
