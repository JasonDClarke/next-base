import {
  maxFromNumericalRecord,
  convertNumericalRecordToChartFormat,
} from './utils';

describe('maxFromNumericalRecord', () => {
  it('returns the maximum value from a numerical record', () => {
    const data = { a: 10, b: 50, c: 30 };
    expect(maxFromNumericalRecord(data)).toBe(50);
  });

  it('returns negative max when all values are negative', () => {
    const data = { a: -10, b: -5, c: -30 };
    expect(maxFromNumericalRecord(data)).toBe(-5);
  });

  it('returns -Infinity for an empty record', () => {
    expect(maxFromNumericalRecord({})).toBe(-Infinity);
  });
});

describe('convertNumericalRecordToChartFormat', () => {
  it('converts a record into an array of objects', () => {
    const data = { a: 10, b: 20, c: 30 };
    expect(convertNumericalRecordToChartFormat(data)).toEqual([
      { attribute: 'a', value: 10 },
      { attribute: 'b', value: 20 },
      { attribute: 'c', value: 30 },
    ]);
  });

  it('handles string values in the record', () => {
    const data = { a: '10', b: 20, c: '30' };
    expect(convertNumericalRecordToChartFormat(data)).toEqual([
      { attribute: 'a', value: '10' },
      { attribute: 'b', value: 20 },
      { attribute: 'c', value: '30' },
    ]);
  });

  it('returns an empty array for an empty record', () => {
    expect(convertNumericalRecordToChartFormat({})).toEqual([]);
  });
});
