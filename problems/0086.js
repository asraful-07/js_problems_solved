var str = "I took a shower. I need a friend. Noone like this stikcy guy.";

var count = 0;
for (var i = 0; i < str.length; i++) {
  if (str[i] == " ") {
    count++;
  }
}
count++;
console.log("number of words:", count);
