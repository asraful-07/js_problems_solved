function reverseString(text) {
  let reverse = "";

  for (let i = text.length - 1; i >= 0; i--) {
    reverse += text[i];
  }
  return reverse;
}

const greetings = "Hello, how are you?";
console.log(reverseString(greetings));
