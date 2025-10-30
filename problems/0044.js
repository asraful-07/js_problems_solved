let laptop = 40000;
let tablet = 20000;
let mobile = 20000;
let watch = 20000;

function calculateElectronicsBudget(laptop, tablet, mobile, watch) {
  let total = laptop + tablet + mobile + watch;
  return total;
}

console.log(calculateElectronicsBudget(laptop, tablet, mobile, watch));
