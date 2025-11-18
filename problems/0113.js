function countOccurrences(str, find) {
  let res = 0;

  for (let char of str) {
    if (find.includes(char)) {
      res++;
    }
  }
  return res;
}

// let str = str.includes
let str = "hello engineer how are you A";
let x = "abcdABCD";
console.log(countOccurrences(arr, x));
