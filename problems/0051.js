function Random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(Random(10, 20));
