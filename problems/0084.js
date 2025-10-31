const greetings = "Hello, how are you?";

function reverseString(text) {
  let reverse = "";
  for (let i = 0; i < text.length; i++) {
    reverse = text[i] + reverse;
  }
  return reverse;
}

const reversed = reverseString(greetings);
console.log(reversed);
