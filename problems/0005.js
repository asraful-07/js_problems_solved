function cal(salary) {
  const B = 40;
  const H = 20;
  const A = 10;
  const total = B + H + A;
  const saving = salary - total;

  if (total > salary) {
    console.log("you are danger jon");
  } else {
    console.log("you are good man");
  }

  return saving;
}

let taka = 200;
let sly = cal(taka);
console.log(sly);
