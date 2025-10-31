var str = "I took a shower. I need a friend. Noone like this sticky guy.";

function TextWord(str) {
  let TotalText = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      TotalText++;
    }
  }
  return TotalText + 1;
}

console.log("number of words:", TextWord(str));
