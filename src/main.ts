import { distance, closest } from 'fastest-levenshtein';
import { assertString, assertRange, assertNumber } from './helpers/validate';

const exclusions = [' Inc.', ', Inc.', 'The ', '.com'];

/**
 * Exclude words from matching score. See exclusions above.
 */
function excludeWords(input: string): string {
  let output = input;
  exclusions.forEach((exclusion) => {
    const regex = new RegExp(exclusion, 'gi');
    output = output.replace(regex, '');
  });
  return output;
}

/**
 * Fuzzy String Matching
 *
 * @param {value,column,index,threshold} input The value to fuzzy match
 * @return The index
 * @customfunction
 */
export function ZLOOKUP(value: string, column: string[][], threshold: number) {
  assertString(value);
  assertRange(column);
  assertNumber(threshold, 'threshold');

  const searchValues = column.flat();
  const closestString = closest(value, searchValues);
  return closestString;
}

export function LEVENSHTEIN(a: string, b: string) {
  assertString(a);
  assertString(b);

  const stringDistance = distance(a, b);
  return stringDistance;
}
