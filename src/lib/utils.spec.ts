import { cn } from './utils';

describe('cn function with duplicated and family-related Tailwind classes', () => {
  it('should remove duplicated classes and sort them', () => {
    const result = cn('bg-red-500', 'bg-red-500', 'text-white', 'bg-red-500');

    expect(result).toBe('text-white bg-red-500');
  });

  it('should handle different classes from the same family (like background colors)', () => {
    const result = cn('bg-red-500', 'bg-blue-500', 'bg-green-500');

    expect(result).toBe('bg-green-500');
  });

  it('should ust the last value', () => {
    const result = cn('p-4', 'p-6', 'p-8', 'p-4');

    expect(result).toBe('p-4');
  });

  it('should handle conflicting width and height classes', () => {
    const result = cn('w-64', 'w-32', 'h-16', 'h-8');

    expect(result).toBe('w-32 h-8');
  });

  it('should handle conflicting text color classes', () => {
    const result = cn('text-red-500', 'text-blue-500', 'text-green-500');

    expect(result).toBe('text-green-500');
  });

  it('should handle conditionally added classes from the same family', () => {
    const isPrimary = true;
    const isSecondary = false;
    const result = cn(
      'bg-red-500',
      isPrimary && 'bg-blue-500',
      isSecondary && 'bg-green-500'
    );

    expect(result).toBe('bg-blue-500');
  });

  it('should handle arrays of classes with duplicates and family-related classes, favouring last value', () => {
    const result = cn([
      'bg-red-500',
      'bg-blue-500',
      'bg-green-500',
      'bg-red-500',
    ]);

    expect(result).toBe('bg-red-500');
  });

  it('should handle classes from the same family with arrays and explicit classes,preferring the latest value', () => {
    const result = cn(
      'bg-red-500',
      'bg-blue-500',
      ['p-4', 'p-8', 'p-4'],
      'text-white'
    );

    expect(result).toBe('bg-blue-500 p-4 text-white');
  });
});
