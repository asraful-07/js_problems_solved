function countOccurrences(arr) {
  let res = arr.split(" ");
  let count = " ";

  for (let i = 0; i < res.length; i++) {
    if (res[i].length > count.length) {
      count = res[i];
    }
  }
  return count;
}

let arr = "hello engineer how are you ABCD";
console.log(countOccurrences(arr));
