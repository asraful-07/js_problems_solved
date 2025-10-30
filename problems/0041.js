const heights2 = [167, 190, 120, 165, 137, 490];

let max = [0];

let min = heights2.reduce((a, b) => (a < b ? a : b));

// let min = Math.min(...heights2);

for (let i = 0; i < heights2.length; i++) {
  if (heights2[i] > max) {
    max = heights2[i];
  }
}

console.log(min);
console.log(max);
