const calc = require('./calculator');

describe('calculator compute', () => {

  // testing add method
  test('add 1 + 2 is equal 3', () => {
    expect(calc.add(1, 2)).toBe(3);
  });

  test('add 13 + 22 is equal 35', () => {
    expect(calc.add(13, 22)).toBe(35);
  });

  test('add 345 + 6789 is equal 7134', () => {
    expect(calc.add(345, 6789)).toBe(7134);
  });

  // testing subtract method
  test('subtract 1 - 2 is equal -1', () => {
    expect(calc.subtract(1, 2)).toBe(-1);
  });

  test('subtract 22 - 13 is equal 9', () => {
    expect(calc.subtract(22, 13)).toBe(9);
  });

  test('subtract 6789 - 345 is equal 6444', () => {
    expect(calc.subtract(6789, 345)).toBe(6444);
  });

  // testing multiply method
  test('multiply 1 * 2 is equal 2', () => {
    expect(calc.multiply(1, 2)).toBe(2);
  });

  test('multiply 13 * 22 is equal 286', () => {
    expect(calc.multiply(13, 22)).toBe(286);
  });

  test('multiply 345 * 6789 is equal 2342205', () => {
    expect(calc.multiply(345, 6789)).toBe(2342205);
  });

  // testing divide method
  test('divide 1 / 2 is equal 0.5', () => {
    expect(calc.divide(1, 2)).toBe(0.5);
  });

  test('divide 22 / 2 is equal 11', () => {
    expect(calc.divide(22, 2)).toBe(11);
  });

  test('divide 6789 / 3 is equal 2263', () => {
    expect(calc.divide(6789, 3)).toBe(2263);
  });

});