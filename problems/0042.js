const heights2 = ["rahim", "robin", "rafi", "ron", "rashed", "rotu"];

let minName = heights2[0];

for (let i = 0; i < heights2.length; i++) {
  if (heights2[i].length < minName.length) {
    minName = heights2[i];
  }
}

console.log(minName);
