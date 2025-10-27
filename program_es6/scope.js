// global scope
// block scope
// functional scope

// global scope all  program access this
let nam = "Ra";

function sayName() {
  console.log(nam);
}

sayName();
console.log(nam);

// block scope only access blok under {....}
{
  let age = 22;
  console.log(age);
}

console.log(age);

// functional scope only access this function
function myInfo() {
  let city = "RAJ";
  console.log(city);
}

myInfo();

console.log(city);
