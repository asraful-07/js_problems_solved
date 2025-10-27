function findingBadData(ages) {
  let count = 0;
  if (!Array.isArray(ages) || typeof ages !== "string") {
    return "value should be an array";
  }
  for (let i = 0; i < ages.length; i++) {
    const age = ages[i];
    if (age < 0) {
      count++;
    }
  }
  return count;
}
const ages = [20, -18, 14, -25, -14];
const result = findingBadData(ages);
console.log(result);
