export const formatToPrecision = (num: number, precision: number = 2) => {
  const str = num.toPrecision(precision);

  // If scientific notation is used, convert to fixed-point format
  if (str.includes('e')) {
    return Number(str).toFixed(0);
  }

  // If there are decimals, ensure trailing zeros are preserved
  if (str.includes('.')) {
    const [integerPart] = str.split('.');
    const requiredZeros = precision - integerPart.length;
    return Number(str).toFixed(Math.max(requiredZeros, 0));
  }

  return str;
};
