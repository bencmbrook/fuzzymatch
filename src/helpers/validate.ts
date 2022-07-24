export function assertRange(range: any): asserts range is string[][] {
  if (!Array.isArray(range)) {
    throw new Error('"column" must be a range');
  } else {
    range.forEach((row) => {
      if (!Array.isArray(row)) {
        throw new Error('"column" must be a range');
      } else {
        row.forEach((cell) => {
          if (typeof cell !== 'string') {
            throw new Error('Values in "column" should have a string value.');
          }
        });
      }
    });
  }
}

export function assertString(str: any): asserts str is string {
  if (typeof str !== 'string') {
    throw new Error('"value" should have a string value.');
  }
}

export function assertNumber(num: any, argname: string): asserts num is number {
  if (typeof num !== 'number') {
    throw new Error(`"${argname}" should have a number value.`);
  }
}
