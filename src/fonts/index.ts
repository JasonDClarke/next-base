import { Spectral, Inter } from 'next/font/google';

export const spectral = Spectral({
  weight: '300',
  subsets: ['latin'],
  variable: '--font-spectral',
});

export const spectralBold = Spectral({
  weight: '600',
  subsets: ['latin'],
  variable: '--font-spectral-bold',
});

export const inter = Inter({
  weight: '300',
  subsets: ['latin'],
  variable: '--font-inter',
});

export const interBold = Inter({
  weight: '600',
  subsets: ['latin'],
  variable: '--font-inter-bold',
});
