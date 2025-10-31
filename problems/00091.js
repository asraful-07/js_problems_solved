let num = [1, 26, 8, 18, 9, 56, 89, 34, 10];

let max = 0;
let x = [];

for (let i = 0; i < num.length; i++) {
  if (num[i] > max) {
    max = num[i];
    x.push(num[i]);
  }
}

console.log(x);
