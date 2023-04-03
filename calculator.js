class Calculator {

  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  multiply(a, b) {
    return a * b;
  }

  divide(a, b) {
    return a / b;
  }

};

let compute = new Calculator();

console.log(compute.add(1, 2))
console.log(compute.subtract(1, 2))
console.log(compute.multiply(1, 2))
console.log(compute.divide(1, 2))
console.log(compute.divide(1, 0))