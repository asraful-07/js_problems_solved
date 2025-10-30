function Inerr() {
  let count = 0;

  function outer() {
    count++;
    console.log("Count is:", count);
  }

  return outer;
}

const callFunc = Inerr();

callFunc(); // output: Count is: 1
callFunc(); // output: Count is: 2
callFunc(); // output: Count is: 3
callFunc(); // output: Count is: 4
