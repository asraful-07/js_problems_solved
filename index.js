function countOccurrences(arr, n, x) {
  let res = 0;
  for (let i = 0; i < n; i++) {
    if (x == arr[i]) res++;
  }
  return res;
}

arr = [5, 6, 11, 12, 98, 5];
let n = arr.length;
let x = 2;
console.log(countOccurrences(arr, n, x));
