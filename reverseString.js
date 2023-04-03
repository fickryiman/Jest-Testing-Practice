function reverseString(string) {
  return string.split('').reverse().join('');
};

module.exports = reverseString;

console.log(reverseString('fickry'))
console.log(reverseString('bil'))
console.log(reverseString('iman'))
console.log(reverseString('fickry bil iman'))