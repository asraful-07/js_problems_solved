function word5(num: string): number {
  const vowel = "aeiouAEIOU";
  let count = 0;

  for (let i = 0; i < num.length; i++) {
    if (vowel.includes(num[i])) {
      count++;
    }
  }
  return count;
}

console.log(word5("BangladeshI"));
