import {
  constrainToRange,
  floorToNearest,
  ceilToNearest,
  roundUpToClosest,
  roundDownToClosest,
  normalizeToPercent,
  normalizeToRange,
  normalizeToPercentByMaxValue,
} from './mathUtils';
describe('constrainToRange', () => {
  test('should return value within range', () => {
    expect(constrainToRange(5, 1, 10)).toBe(5);
    expect(constrainToRange(-5, 0, 10)).toBe(0);
    expect(constrainToRange(15, 0, 10)).toBe(10);
  });
});

describe('floorToNearest', () => {
  test('should floor value to nearest multiple', () => {
    expect(floorToNearest(23, 5)).toBe(20);
    expect(floorToNearest(99, 10)).toBe(90);
    expect(floorToNearest(7, 3)).toBe(6);
  });
});

describe('ceilToNearest', () => {
  test('should ceil value to nearest multiple', () => {
    expect(ceilToNearest(23, 5)).toBe(25);
    expect(ceilToNearest(99, 10)).toBe(100);
    expect(ceilToNearest(7, 3)).toBe(9);
  });
});

describe('roundUpToClosest', () => {
  test('should round up to the closest number in array', () => {
    expect(roundUpToClosest(15, [10, 20, 30])).toBe(20);
    expect(roundUpToClosest(25, [10, 20, 30])).toBe(30);
    expect(roundUpToClosest(35, [10, 20, 30])).toBe(30);
  });
});

describe('roundDownToClosest', () => {
  test('should round down to the closest number in array', () => {
    expect(roundDownToClosest(15, [10, 20, 30])).toBe(10);
    expect(roundDownToClosest(25, [10, 20, 30])).toBe(20);
    expect(roundDownToClosest(5, [10, 20, 30])).toBe(10);
  });
});

describe('normalizeToPercent', () => {
  test('should normalize value to percent', () => {
    expect(normalizeToPercent(50, 0, 100)).toBe(50);
    expect(normalizeToPercent(25, 0, 50)).toBe(50);
    expect(normalizeToPercent(75, 50, 100)).toBe(50);
  });
});

describe('normalizeToRange', () => {
  test('should normalize value within given range', () => {
    expect(
      normalizeToRange({ value: 50, min: 0, max: 100, rangeSize: 1 })
    ).toBe(0.5);
    expect(
      normalizeToRange({ value: 25, min: 0, max: 50, rangeSize: 10 })
    ).toBe(5);
    expect(
      normalizeToRange({ value: 75, min: 50, max: 100, rangeSize: 5 })
    ).toBe(2.5);
  });
});

describe('normalizeToPercentByMaxValue', () => {
  test('should normalize value by max value in array', () => {
    expect(normalizeToPercentByMaxValue(50, [10, 50, 100])).toBe(50);
    expect(normalizeToPercentByMaxValue(25, [50, 100])).toBe(25);
    expect(normalizeToPercentByMaxValue(75, [25, 75, 100])).toBe(75);
  });
});
