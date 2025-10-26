function deletInvlids(array) {
  let numberArray = [];
  for (let element of array) {
    if (typeof element === "number" && isNaN(element) === false) {
      numberArray.push(element);
    }
  }
  return numberArray;
}

const total =
  deletInvlids[
    (1, null, undefined, 18, -19, NaN, "12", [1, 2], { od: "lala" })
  ];
console.log(total);
console.log(deletInvlids[("1", { num: 2 }, NaN)]);
