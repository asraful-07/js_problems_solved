const player = [
  { name: "Jamal Bhuyan", score: 88 },
  { name: "Hamza chowdory", score: 66 },
  { name: "Shekh Morsalin", score: 81 },
  { name: "Rakib Hossain", score: 96 },
  { name: "Topu Barman", score: 91 },
  { name: "Sohel Rana", score: 72 },
];

const bestScorer = players.reduce((result, best) => {
  if (result.score > best.score) {
    return result;
  }
  return best;
}, players[0]);

console.log(bestScorer);
