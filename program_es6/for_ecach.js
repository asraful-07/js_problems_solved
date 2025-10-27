// all value print single by single
const numbers = [1, 10, 6, 4, 17];
// const result = numbers.forEach((n) => console.log(n));
let sum = 0;
const result = numbers.forEach((n) => {
  sum += n;
});
console.log(sum);
