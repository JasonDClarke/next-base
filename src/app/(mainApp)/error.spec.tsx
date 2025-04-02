import { render, screen, fireEvent } from '@testing-library/react';
import ErrorComponent from './error';
import * as Sentry from '@sentry/nextjs';

jest.mock('@sentry/nextjs', () => ({
  captureException: jest.fn(),
}));

describe('Error Component', () => {
  it('should display an error message and call reset when "Try again" is clicked', () => {
    const mockError = new Error('Something went wrong');
    const mockReset = jest.fn();

    render(<ErrorComponent error={mockError} reset={mockReset} />);

    expect(screen.getByText('Something went wrong!')).toBeInTheDocument();

    const button = screen.getByText('Try again');
    expect(button).toBeInTheDocument();

    fireEvent.click(button);

    expect(mockReset).toHaveBeenCalledTimes(1);
  });

  it('should log the error to Sentry', () => {
    const mockError = new Error('Test error');
    const mockReset = jest.fn();

    render(<ErrorComponent error={mockError} reset={mockReset} />);

    expect(Sentry.captureException).toHaveBeenCalledWith(mockError);
  });
});
