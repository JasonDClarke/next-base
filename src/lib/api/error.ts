import { NextResponse } from 'next/server';

export const apiError = (error: unknown, expected: string) => {
  console.error(`Error fetching ${expected}:`, error);
  return NextResponse.json(
    { error: `Failed to fetch ${expected}` },
    { status: 500 }
  );
};
