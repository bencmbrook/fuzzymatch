import { LEVENSHTEIN, ZLOOKUP } from './main';

describe('distance', () => {
  test('equals', () => {
    expect(LEVENSHTEIN('cat', 'bat')).toEqual(1);
  });
});

describe('closest', () => {
  test('matches', () => {
    expect(
      ZLOOKUP('Test', [['Camel'], ['Testing'], ['Robots'], ['Boop']], 0),
    ).toEqual('Testing');
  });
});
