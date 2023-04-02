const stringLength = require('./stringLength');

describe('count space string length', () => {
  test('string length for space string equal 1', () => {
    expect(stringLength(' ')).toBe(1);
  });
});

describe('count double space string length', () => {
  test('string length for double space string equal 2', () => {
    expect(stringLength('  ')).toBe(2);
  });
});

describe('count fickry string length', () => {
  test('string length for fickry equal 6', () => {
    expect(stringLength('fickry')).toBe(6);
  });
});

describe('count bil string length', () => {
  test('string length for bil equal 3', () => {
    expect(stringLength('bil')).toBe(3);
  });
});

describe('count iman string length', () => {
  test('string length for iman equal 4', () => {
    expect(stringLength('iman')).toBe(4);
  });
});

describe('throws error for empty string length', () => {
  test('throws on empty string', () => {
    expect(() => {
      stringLength('');
    }).toThrow(new Error("the string arguments is at least 1 character long and not longer than 10 characters!"));
  });
});

describe('throws error for string length characters more than 10', () => {
  test('throws on string longer than 10', () => {
    expect(() => {
      stringLength('fickry bil iman');
    }).toThrow(new Error("the string arguments is at least 1 character long and not longer than 10 characters!"));
  });
});
