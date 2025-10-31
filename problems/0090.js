function countCharacter(letter) {
  let text = "aA";
  let word = 0;

  for (let le of letter) {
    if (text.includes(le)) {
      word++;
    }
  }
  return word;
}

let some = "bangladesh my country very nice";
console.log(countCharacter(some));
