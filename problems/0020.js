function calculateFinalScore(obj) {
  if (typeof obj !== "object" || obj === null || Array.isArray(obj)) {
    return "Invalid Input";
  }
  const { name, testScore, schoolGrade, isFFamily } = obj;
  if (
    typeof name !== "string" ||
    typeof testScore !== "number" ||
    typeof schoolGrade !== "number" ||
    typeof isFFamily !== "boolean"
  ) {
    return "no more  today";
  }
  if (testScore > 50 || schoolGrade > 30 || testScore < 0 || schoolGrade < 0) {
    return "no more  today";
  }
  let finalScore = testScore + schoolGrade;
  if (isFFamily) {
    finalScore += 20;
  }
  return finalScore >= 80;
}

const rajivData = {
  name: "Rajiv",
  testScore: 45,
  schoolGrade: 25,
  isFFamily: true,
};

const result = calculateFinalScore(rajivData);
console.log(result);
console.log(calculateFinalScore("hello"));
console.log(
  calculateFinalScore({
    name: "Rajib",
    testScore: 15,
    schoolGrade: 25,
    isFFamily: false,
  })
);
