function countOccurrence(numbers, find) {
  return numbers.filter((num) => num === find).length;
}

const numbers = [5, 6, 11, 12, 98, 5];
console.log(countOccurrence(numbers, 5));
