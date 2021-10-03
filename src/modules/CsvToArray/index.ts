import { readFileSync } from 'fs';
import { resolve } from 'path';

export const csvToArray = <T>(filePath: string, separator = ','): T[] => {
  const csvPath = resolve(filePath);
  const csvString = readFileSync(csvPath).toString();
  const keys = csvString
    .slice(0, csvString.indexOf('\n'))
    .replace('\r', '')
    .split(separator);
  const values = csvString
    .slice(csvString.indexOf('\n') + 1, csvString.lastIndexOf('\n'))
    .split('\n');

  const parsedCsv = values.map((value) => {
    const parsedValues = value.split(separator);

    const element = keys.reduce((accumulator, key, index) => {
      const elementValue = parsedValues[index]?.trim().replace('\r', '');
      const parsedValue = Number(elementValue) ? Number(elementValue) : elementValue;
      return {
        ...accumulator,
        [key]: parsedValue,
      };
    }, {} as T);
    return element;
  });

  return parsedCsv;
};
