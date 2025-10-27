// condition for all value print
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 10, 12];
// const result = numbers.map((n) => n % 2 == 0);

const result = numbers.map((n) => {
  const x = n * 2;
  return x;
});

console.log(result);
