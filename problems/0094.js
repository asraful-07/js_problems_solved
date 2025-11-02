const players = [
  { name: "Jamal Bhuyan", score: 88 },
  { name: "Shekh Morsalin", score: 81 },
  { name: "Rakib Hossain", score: 95 },
  { name: "Topu Barman", score: 91 },
  { name: "Sohel Rana", score: 72 },
];

let find = players[0];

for (let i = 0; i < players.length; i++) {
  if (players[i].score > find.score) {
    find = players[i];
  }
}

console.log(find);
