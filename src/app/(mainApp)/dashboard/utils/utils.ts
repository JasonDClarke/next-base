export const maxFromNumericalRecord = (record: Record<string, number>) =>
  Math.max(...Object.values(record));

export const convertNumericalRecordToChartFormat = (
  record: Record<string, number | string>
) => Object.entries(record).map(([key, value]) => ({ attribute: key, value }));
