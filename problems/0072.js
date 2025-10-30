function countVowels(str) {
  const match = str.match(/[aeiou]/gi);
  return match ? match.length : 0;
}

console.log(countVowels("Bangladeshi"));
