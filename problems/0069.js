function countOccurrence(numbers, find) {
  return numbers.reduce((count, num) => (num === find ? count + 1 : count), 0);
}

const numbers = [5, 6, 11, 12, 98, 5];
console.log(countOccurrence(numbers, 5));
