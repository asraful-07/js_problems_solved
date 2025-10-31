let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 4, 67, 4, 67, 4];

function Numbers(num, find) {
  return num.filter((n) => n === find).length;
}

let number = Numbers(numbers, 4);

console.log(number);
