class Calculator {

  static add(a, b) {
    return a + b;
  }

  static subtract(a, b) {
    return a - b;
  }

  static multiply(a, b) {
    return a * b;
  }

  static divide(a, b) {
    return a / b;
  }

};

module.exports = Calculator;

// console.log(Calculator.add(1, 2))
// console.log(Calculator.subtract(1, 2))
// console.log(Calculator.multiply(1, 2))
// console.log(Calculator.divide(1, 2))
// console.log(Calculator.divide(1, 0))