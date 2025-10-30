function countOccurrence(numbers, find) {
  let count = [0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === find) {
      count++;
    }
  }
  return count;
}

const numbers = [5, 6, 11, 12, 98, 5];
console.log(countOccurrence(numbers, 5));
