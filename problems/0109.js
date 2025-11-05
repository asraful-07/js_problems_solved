function Named(word) {
  let letter = "aeiouAEIOU";
  let count = 0;

  for (let char of word) {
    if (letter.includes(char)) {
      count++;
    }
  }
  return count;
}

console.log(Named("bangladeshi"));
