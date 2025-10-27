// all array input and out just one value print
const numbers = [1, 10, 6, 4, 19];

const result = numbers.reduce((prevValue, curValue) => prevValue + curValue, 0);
console.log(result);
