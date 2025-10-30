function findLongestWord(str) {
  return str
    .split(" ")
    .reduce(
      (longest, word) => (word.length > longest.length ? word : longest),
      ""
    );
}

const sentence = "I am learning Programming to become a programmer";
console.log(findLongestWord(sentence));
