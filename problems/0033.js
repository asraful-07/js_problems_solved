function evenOdd(name) {
  if (typeof name !== "string") {
    return "value should be an string";
  } else if (name.length % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}
