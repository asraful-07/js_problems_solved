const arr = [6, "six", true, false, true];

function show(array) {
  if (!Array.isArray(array)) {
    return;
  }

  let count = 0;
  for (let item of array) {
    if (typeof item === "boolean") {
      count++;
    }
  }
  return count;
}
