const capitalize = require('./capitalize');

describe('First Character should be on UpperCase', () => {
  test('capitalize of string arguments fickry is Fickry ', () => {
    expect(capitalize('fickry')).toBe('Fickry');
  });

  test('capitalize of string arguments fickry is Fickry ', () => {
    expect(capitalize('f')).toBe('F');
  });

  test('capitalize of string arguments fickry is Fickry ', () => {
    expect(capitalize('fi')).toBe('Fi');
  });
});

describe('Empty arguments should be throw new Error', () => {
  test(`capitalize of string arguments '' is throw new Error('arguments is empty')`, () => {
    expect(() => {
      capitalize('');
    }).toThrow(new Error("arguments is empty!"));
  });
});