// for loop
let data = ["apple", "banana", "mango", "orange"];

// for (let i = n; i <= 0; i--) revers value print

for (let i = 0; i <= data.length; i++) {
  console.log(data[i]);
}

// while loop
let da = ["apple", "banana", "mango", "orange"];

// i = 10
let i = data.length - 1;

while (i >= 0) {
  console.log(da[i]);
  i--;
}

//for....of loop  only work for array, string, set, map
let n = [1, 2, 3, 4, 5, 6];

for (let item of n.reverse()) {
  console.log(item);
}

//for....in loop work for object and array.
let num = [1, 2, 3, 4, 5, 6];

for (let item in num) {
  console.log(item);
}

// and more example
let person = { name: "Rahat", age: 22, city: "RAJ" };

for (let item in person) {
  console.log(item, "=>", person[item]);
}

// break loop stop for condition not go to state.
let ab = 10;

for (let i = 0; i <= n; i++) {
  if (i === 7) {
    break;
  }
  console.log(ab);
}

// continue loop condition value no print and continue end value.
let number = 10;

for (let i = 0; i <= number; i++) {
  if (i === 7) {
    continue;
  }
  console.log(i);
}

// sum of loop and even number
var z = 10;
var x = [];
var sum = 0;

for (let i = 0; i <= z; i++) {
  if (i % 2 == 0) {
    x.push(i);
    sum += i;
  }
}

console.log("Final Array:", x);
console.log("result:", sum);
