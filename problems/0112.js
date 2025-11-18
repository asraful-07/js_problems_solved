function countOccurrences(arr, find) {
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    if (find === arr[i]) {
      res++;
    }
  }
  return res;
}

let arr = [12, 6, 11, 12, 98, 46];
let x = 12;
console.log(countOccurrences(arr, x));
