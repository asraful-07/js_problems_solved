function checkDigitsInName(name) {
  if (typeof name !== "string" || Array.isArray(name)) {
    return "Invalid Input";
  }

  for (let i = 0; i < name.length; i++) {
    if (!isNaN(name[i]) && name[i] !== " ") {
      return "true";
    }
  }

  return "false";
}

const result = checkDigitsInName("Raju123");
console.log(result);
