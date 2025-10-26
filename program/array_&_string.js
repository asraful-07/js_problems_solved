// add end or remove end
let array = ["a", "b", "c", "d"];

const push = array.push("e", "f", "g");
console.log(array);
// remove end
const pop = array.pop();
console.log(array);

// add start and remove start
let array2 = ["a", "b", "c", "d"];

array2.unshift("y", "z");
console.log(array2);
// remove start
array2.shift();
console.log(array2);

// add any where
let array3 = ["a", "b", "c", "d"];

// (start, end)
array3.splice(1, 0, "y", "z");
console.log(array3);

// remove data any where
let array4 = ["a", "b", "c", "d", "e", "f"];

// (start, end)
array4.splice(2, 2);
console.log(array4);

// index part copy
let array5 = ["a", "b", "c", "d", "e", "f"];

let part = array5.slice(2, 4);

console.log(part); // ["c", "d"]
console.log(array5); // ["a", "b", "c", "d", "e", "f"]

// filter
let array6 = ["a", "b", "c", "d", "e", "f", "g"];

// "c" remove
let newArray = array6.filter((item) => item !== "c");

console.log(newArray);
console.log(array6);

// search index number and true/ false
let array7 = ["a", "b", "c", "d"];

let array8 = array.indexOf("b");

// true/ false
let array9 = array.includes("b");
console.log(array8);

// join any  - / * + ect
let array10 = ["a", "b", "c", "d"];

let arr = array10.join("/");
console.log(arr);

// arr res = sum + sum
// array to string
let array11 = ["a", "b", "c", "d"];
let arr1 = ["a", "b", "c", "d"];

let array21 = array.concat(arr1);
console.log(array21);

// string to array
let data = "apple,banana,mango,orange";
let fruits = data.split(",");

console.log(fruits);
