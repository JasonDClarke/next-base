import { render, screen } from '@testing-library/react';
import { Label } from './label';
import '@testing-library/jest-dom';
import { createRef } from 'react';

describe('Label Component', () => {
  it('should render with default styles', () => {
    render(<Label htmlFor="input-id">Label Text</Label>);

    const label = screen.getByText('Label Text');
    expect(label).toBeInTheDocument();

    expect(label).toHaveClass(
      'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
    );
  });

  it('should apply custom className', () => {
    render(
      <Label className="custom-class" htmlFor="input-id">
        Custom Label
      </Label>
    );

    const label = screen.getByText('Custom Label');
    expect(label).toHaveClass('custom-class');
  });

  it('should forward refs correctly', () => {
    const ref = createRef<HTMLLabelElement>();

    render(
      <Label ref={ref} htmlFor="input-id">
        Ref Test
      </Label>
    );

    expect(ref.current).toBeInTheDocument();
  });

  it('should forward other props correctly', () => {
    render(<Label id="input-id">For Input</Label>);

    const label = screen.getByText('For Input');
    expect(label).toHaveAttribute('id', 'input-id');
  });
});
