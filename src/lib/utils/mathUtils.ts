export const constrainToRange = (value: number, min: number, max: number) =>
  Math.max(min, Math.min(max, value));

export function floorToNearest(value: number, multiple: number): number {
  return Math.floor(value / multiple) * multiple;
}

export function ceilToNearest(value: number, multiple: number): number {
  return Math.ceil(value / multiple) * multiple;
}

export function roundUpToClosest(value: number, numbers: number[]): number {
  const sorted = numbers.filter((n) => n >= value).sort((a, b) => a - b);
  return sorted.length > 0 ? sorted[0] : Math.max(...numbers); // Returns smallest valid number or max if none
}

export function roundDownToClosest(value: number, numbers: number[]): number {
  const sorted = numbers.filter((n) => n <= value).sort((a, b) => b - a);
  return sorted.length > 0 ? sorted[0] : Math.min(...numbers); // Returns largest valid number or min if none
}

// sets value to a normalised value within min 0) and max 100
export function normalizeToPercent(
  value: number,
  min: number,
  max: number
): number {
  if (min === max) return 0; // Avoid division by zero
  return ((value - min) / (max - min)) * 100;
}

export function normalizeToRange({
  value,
  min,
  max,
  rangeSize,
}: {
  value: number;
  min: number;
  max: number;
  rangeSize: number;
}): number {
  if (min === max) return 0; // Avoid division by zero
  return ((value - min) / (max - min)) * rangeSize;
}

export function normalizeToPercentByMaxValue(value: number, array: number[]) {
  return normalizeToPercent(value, 0, Math.max(...array));
}
