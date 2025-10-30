function findLongestWord(str) {
  const words = str.split(" ");
  let longest = "";

  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  return longest;
}

const sentence = "I am learning Programming to become a programmer";
console.log(findLongestWord(sentence));
