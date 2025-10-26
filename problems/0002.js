let num = [1, 6, 8, 9, 12, 56, 89, 34];

let max = num[0];
let min = num[0];

for (let i = 0; i < num.length; i++) {
  if (num[i] > max) {
    max = num[i];
  }

  if (num[i] < min) {
    min = num[i];
  }
}

// let max = Math.max(...num);
// let min = Math.min(...num);

// let max = num.reduce((a, b) => a > b ? a : b);
// let min = num.reduce((a, b) => a < b ? a : b);

console.log("min :", min);
console.log("max :", max);
