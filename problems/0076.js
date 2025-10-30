const findLongestWord = (str) =>
  str.split(" ").reduce((a, b) => (b.length > a.length ? b : a));

console.log(
  findLongestWord("I am learning Programming to become a programmer")
);
