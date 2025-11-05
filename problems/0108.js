let word = ["hemi", "gaminisdsdsa", "uminisf", "porondsa"];

let short = word[0];

for (let char of word) {
  if (char.length > short.length) {
    short = char;
  }
}

console.log(short.length);
