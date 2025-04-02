import { formatToPrecision } from './stringUtils';

describe('formatToPrecision', () => {
  test('should format numbers with given precision', () => {
    expect(formatToPrecision(123.456, 2)).toBe('120');
    expect(formatToPrecision(123.456, 4)).toBe('123.5');
    expect(formatToPrecision(0.000123456, 2)).toBe('0.0');
  });

  test('should handle scientific notation conversion', () => {
    expect(formatToPrecision(1e6, 2)).toBe('1000000');
    expect(formatToPrecision(1.2345e-5, 3)).toBe('0.00');
  });

  test('should preserve trailing zeros when necessary', () => {
    expect(formatToPrecision(123, 5)).toBe('123.00');
    expect(formatToPrecision(12.3, 4)).toBe('12.30');
  });

  test('should return the number as a string if no formatting needed', () => {
    expect(formatToPrecision(100, 3)).toBe('100');
  });
});
