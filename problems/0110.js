function Named(word) {
  let letter = word.split(" ");
  let count = letter[0];

  for (let char of letter) {
    if (char.length < count.length) {
      count = char;
    }
  }
  return count;
}

console.log(Named("bangladeshi man is very good thinking skill is all good"));
