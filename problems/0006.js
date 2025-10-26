const arr = [6, "six", true, false, true, true, false, true, 9, "hello"];

function show(params) {
  if (!Array.isArray(params)) {
    return;
  }

  let count = 0;
  for (let item of params) {
    if (typeof item === "boolean") {
      count++;
    }
  }
  return count;
}

const result = show(arr);
console.log(result);
