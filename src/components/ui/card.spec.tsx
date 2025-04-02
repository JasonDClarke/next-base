import { render, screen } from '@testing-library/react';
import React, { createRef } from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card';

describe('Card Component', () => {
  test('renders Card with children', () => {
    render(<Card>Card Content</Card>);
    expect(screen.getByText('Card Content')).toBeInTheDocument();
  });

  test('renders CardHeader with children', () => {
    render(<CardHeader>Header Content</CardHeader>);
    expect(screen.getByText('Header Content')).toBeInTheDocument();
  });

  test('renders CardTitle with text', () => {
    render(<CardTitle>Title Here</CardTitle>);
    expect(screen.getByText('Title Here')).toBeInTheDocument();
  });

  test('renders CardDescription with text', () => {
    render(<CardDescription>Some description</CardDescription>);
    expect(screen.getByText('Some description')).toBeInTheDocument();
  });

  test('renders CardContent with children', () => {
    render(<CardContent>Card Body Content</CardContent>);
    expect(screen.getByText('Card Body Content')).toBeInTheDocument();
  });

  test('renders CardFooter with children', () => {
    render(<CardFooter>Footer Content</CardFooter>);
    expect(screen.getByText('Footer Content')).toBeInTheDocument();
  });

  test('applies custom className', () => {
    const { container } = render(
      <Card className="custom-class">Styled Card</Card>
    );
    expect(container.firstChild).toHaveClass('custom-class');
  });

  test('forwards ref correctly', () => {
    const ref = createRef<HTMLDivElement>();
    render(<Card ref={ref}>Card with Ref</Card>);
    expect(ref.current).not.toBeNull();
  });
});
