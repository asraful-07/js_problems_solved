function celToFah(dgree) {
  const sec = (dgree * 9.0) / 5.0 + 32.0;
  return sec;
}

const end = 20;
const hot = celToFah(end);
console.log(hot, "celsius");
