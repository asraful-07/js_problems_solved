function countVowels(str) {
  const vowels = "aeiouAEIOU";
  return str
    .split("")
    .reduce((count, ch) => (vowels.includes(ch) ? count + 1 : count), 0);
}

console.log(countVowels("Programming Hero"));
