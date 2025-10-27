// condition for just first value print not for any value
const numbers = [1, 2, 6, 4, 18];

const number = numbers.find((n) => n >= 2 && n % 2 == 0);
console.log(number);
