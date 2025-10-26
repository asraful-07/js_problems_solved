function show(man) {
  const bus = 40;
  const car = 10;
  const padl = 7;

  const bak = man % bus;
  const mor = bak % car;
  return mor * padl;
}

console.log(show(104));
