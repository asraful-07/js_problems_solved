let num = [10, 26, 8, 18, 9, 56, 89, 34, 10];

let x = [];

for (let i = num.length - 1; i >= 0; i--) {
  if (num[i] % 2 == 0) {
    x.push(num[i]);
  }
}

console.log(x);
