function countCharacter(letter) {
  let text = "aA";
  let word = 0;

  for (let i = 0; i < letter.length; i++) {
    if (text.includes(letter[i])) {
      word++;
    }
  }
  return word;
}

let some = "bangladesh my country very nice";
console.log(countCharacter(some));
