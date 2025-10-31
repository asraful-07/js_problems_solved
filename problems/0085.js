const heights2 = ["rahim", "robin", "rafi", "ron", "rashed"];

let nam = "";

for (let i = 0; i < heights2.length; i++) {
  if (heights2[i].length > nam.length) {
    nam = heights2[i];
  }
}
console.log(nam);
