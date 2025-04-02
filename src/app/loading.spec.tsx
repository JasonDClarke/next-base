import { render } from '@testing-library/react';
import Loading from './loading';
import '@testing-library/jest-dom';

describe('Loading Component', () => {
  it('renders the loader circle', () => {
    const { container } = render(<Loading />);

    const loaderCircle = container.querySelector('.lucide-loader-circle');
    expect(loaderCircle).toBeInTheDocument();
  });

  it('has the correct overlay background', () => {
    const { container } = render(<Loading />);

    const overlay = container.getElementsByClassName('bg-background/80')[0];
    expect(overlay).toBeInTheDocument();
  });

  it('has the correct loader circle size and spin animation', () => {
    const { container } = render(<Loading />);

    // Check if the LoaderCircle has the correct size and spin animation classes
    const loaderCircle = container.querySelector('.lucide-loader-circle');
    expect(loaderCircle).toHaveClass('h-48');
    expect(loaderCircle).toHaveClass('w-48');
    expect(loaderCircle).toHaveClass('animate-spin');
  });
});
