import { sum, cumulativeArray } from './arrayUtils';

describe('sum function', () => {
  test('should return the sum of an array of numbers', () => {
    expect(sum([1, 2, 3, 4])).toBe(10);
    expect(sum([-1, -2, -3, -4])).toBe(-10);
    expect(sum([5, 10, 15])).toBe(30);
  });

  test('should return 0 for an empty array', () => {
    expect(sum([])).toBe(0);
  });
});

describe('cumulativeArray function', () => {
  test('should return the cumulative sum of an array', () => {
    expect(cumulativeArray([1, 2, 3, 4])).toEqual([1, 3, 6, 10]);
    expect(cumulativeArray([5, 10, 15])).toEqual([5, 15, 30]);
    expect(cumulativeArray([-1, -2, -3, -4])).toEqual([-1, -3, -6, -10]);
  });

  test('should return an empty array when given an empty array', () => {
    expect(cumulativeArray([])).toEqual([]);
  });
});
