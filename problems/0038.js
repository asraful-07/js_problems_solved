const countVowels = (str) => {
  const vowels = "aeiouAEIOU";
  return [...str].filter((ch) => vowels.includes(ch)).length;
};

console.log(countVowels("Rahat"));
