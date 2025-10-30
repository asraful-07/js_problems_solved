function Name(nam) {
  let number = "123456789";
  let count = 0;

  for (let i = 0; i < nam.length; i++) {
    if (number.includes(nam[i])) {
      count++;
    }
  }
  return count;
}

console.log(Name("bangladesh432156"));
