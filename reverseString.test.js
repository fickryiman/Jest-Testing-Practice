const reverseString = require('./reverseString');

describe('reverse the string argument', () => {
  test('reversed of string fickry is yrkcif', () => {
    expect(reverseString('fickry')).toBe('yrkcif');
  })
});

describe('reverse the string argument', () => {
  test('reversed of string bil is lib', () => {
    expect(reverseString('bil')).toBe('lib');
  })
});

describe('reverse the string argument', () => {
  test('reversed of string iman is name', () => {
    expect(reverseString('iman')).toBe('nami');
  })
});

describe('reverse the string argument', () => {
  test('reversed of string fickry bil iman is nami lib yrkcif', () => {
    expect(reverseString('fickry bil iman')).toBe('nami lib yrkcif');
  })
});