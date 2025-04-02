export const sum = (arr: Array<number>) =>
  arr.reduce((total, value) => total + value, 0);

// [1, 2, 3, 4] -> [1,3,6,10]
export function cumulativeArray(arr: number[]): number[] {
  return arr.reduce<number[]>((acc, num, index) => {
    acc.push((acc[index - 1] || 0) + num);
    return acc;
  }, []);
}
