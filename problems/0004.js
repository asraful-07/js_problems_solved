// hi@gmail.com

const person = {
  name: "hi",
  address: "gmail",
};

function show(info) {
  if (typeof info !== "object") {
    return;
  }

  const result = info.name + "@" + info.address + ".com";
  return result;
}

console.log(show(person));
