import { defaultResponse } from './defaultResponse';
import { NextResponse } from 'next/server';

jest.mock('next/server', () => ({
  NextResponse: {
    json: jest.fn(),
  },
}));

describe('defaultResponse', () => {
  it('should return a JSON response with status 200 and correct headers', () => {
    const mockData = { message: 'Success' };

    defaultResponse(mockData);

    expect(NextResponse.json).toHaveBeenCalledWith(mockData, {
      status: 200,
      headers: {
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
      },
    });
  });
});
