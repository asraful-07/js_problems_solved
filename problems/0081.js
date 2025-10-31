let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 4, 67, 4, 67, 4];
function Numbers(num, find) {
  let count = 0;

  for (let i = 0; i < num.length; i++) {
    if (num[i] === find) {
      count++;
    }
  }
  return count;
}

let number = Numbers(numbers, 4);

console.log(number);
