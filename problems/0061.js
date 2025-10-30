const prices = [20000, 16000, 50000, 100000, 12000, 30000, 36000];

let min = [0];

for (let i = 0; i < prices.length; i++) {
  if (prices[i] < min);
  min = prices[i];
}

let max = prices.reduce((a, b) => (a > b ? a : b));

console.log(min);
console.log(max);
