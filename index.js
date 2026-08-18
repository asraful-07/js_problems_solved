function countOccurrences(arr) {
  let res = arr.split(" ");
  let count = " ";

  for (let char of res) {
    if (char.length > count.length) {
      count = char;
    }
  }
  //   for (let i = 0; i < res.length; i++) {
  //     if (res[i].length > count.length) {
  //       count = res[i];
  //     }
  //   }
  return count;
}

// let str = arr.includes
let arr = "hello engineer how are you ABCD";
// let x = "";
console.log(countOccurrences(arr));

// Event loop working good

console.log("Start");

setTimeout(() => {
  console.log("setTimeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");
