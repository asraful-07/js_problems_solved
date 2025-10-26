var n = 10;
var x = [];
var sum = 0;

for (let i = 0; i <= n; i++) {
  if (i % 2 == 0) {
    x.push(i);
    sum += i;
  }
}

console.log("Final Array:", x);
console.log("result:", sum);
