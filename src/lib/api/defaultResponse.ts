import { NextResponse } from 'next/server';

export const defaultResponse = <T>(responseData: T) =>
  NextResponse.json(responseData, {
    status: 200,
    headers: {
      'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
    },
  });
