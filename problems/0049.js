const employees = [
  { name: "shahin", experience: 5, starting: 20000, increment: 80000 },
  { name: "shihab", experience: 3, starting: 15000, increment: 80000 },
  { name: "shikot", experience: 9, starting: 30000, increment: 170000 },
  { name: "shohel", experience: 0, starting: 29000, increment: 70000 },
];

function Increment(dollar) {
  let sum = 0;

  for (let i = 0; i < dollar.length; i++) {
    sum += dollar[i].increment;
  }
  return sum;
}

console.log(Increment(employees));
