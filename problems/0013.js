function checkName(name) {
  if (typeof name !== "string") {
    return "invalid";
  }
  let lastLetter = name.slice(-1).toLowerCase;
  let result = false;
  let checkArray = ["a", "y", "i", "e", "o", "u", "w"];

  for (let char of checkArray) {
    if (char === lastLetter) {
      result = true;
    }
  }
  return result ? "good Name" : "Bad Name";
}

console.log(checkName("salman"));
console.log(checkName("RAFEE"));
console.log(checkName("Jhonkar"));
console.log(checkName(199));
console.log(checkName(["Rashed"]));
