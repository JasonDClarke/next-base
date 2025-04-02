import { render } from '@testing-library/react';
import GlobalError from './global-error';
import * as Sentry from '@sentry/nextjs';

jest.mock('@sentry/nextjs');
jest.mock('next/error', () => jest.fn(() => <div data-testid="next-error" />));

describe('GlobalError', () => {
  const mockError = new Error('Test error');
  //   mockError.digest = 'test-digest';

  it('renders the NextError component', () => {
    const { getByTestId } = render(<GlobalError error={mockError} />);

    expect(getByTestId('next-error')).toBeInTheDocument();
  });

  it('calls Sentry.captureException with the provided error', () => {
    render(<GlobalError error={mockError} />);

    expect(Sentry.captureException).toHaveBeenCalledWith(mockError);
  });
});
