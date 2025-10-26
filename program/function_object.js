/*
 **Function Type of 4.
  A. No parameter no return.
  B. With Parameter no return.
  C. No parameter with return.
  D. With parameter with return.
 */

// parameter value reserve
function add(name, cls, roll, mark) {
  console.log("name:", name, "class:", cls, "roll:", roll, "mark:", mark);
}

// argument value pass
add("bean", 12, 78, 100);

// No parameter no return.
function greet() {
  console.log("Hello Rahat!");
}

greet();

// With Parameter no return.
function printSquare(num) {
  console.log(num * num);
}

printSquare(5);

// No parameter with return.
function getRandomNumber() {
  return Math.floor(Math.random() * 100);
}

let num = getRandomNumber();
console.log(num);

// With parameter with return.
function add(a, b) {
  return a + b;
}

let result = add(10, 20);
console.log(result);
