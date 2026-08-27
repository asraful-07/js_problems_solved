function findLongestWord(str) {
  const words = str.split(" ");
  let longest = "";

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longest.length) {
      longest = words[i];
    }
  }

  return longest;
}

const sentence =
  "I am learning Programming.I enjoy for everything, programming is good learning.";
console.log(findLongestWord(sentence));
