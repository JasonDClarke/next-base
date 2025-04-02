import { apiError } from './error';
import { NextResponse } from 'next/server';

jest.mock('next/server', () => ({
  NextResponse: {
    json: jest.fn(),
  },
}));

describe('apiError', () => {
  it('should log the error and return a JSON response with status 500', () => {
    const mockError = new Error('Test error');
    const expectedMessage = 'Test API';

    console.error = jest.fn(); // Mock console.error

    apiError(mockError, expectedMessage);

    expect(console.error).toHaveBeenCalledWith(
      `Error fetching ${expectedMessage}:`,
      mockError
    );

    expect(NextResponse.json).toHaveBeenCalledWith(
      { error: `Failed to fetch ${expectedMessage}` },
      { status: 500 }
    );
  });
});
