function calculateFinalScore(obj) {
  if (typeof obj !== "object") {
    return "Invalid Input";
  }
  const { name, testScore, schoolGrade, isFFamily } = obj;

  if (
    typeof name !== "string" ||
    typeof testScore !== "number" ||
    typeof schoolGrade !== "number" ||
    typeof isFFamily !== "boolean" ||
    testScore > 50 ||
    testScore < 0 ||
    schoolGrade > 30 ||
    schoolGrade < 0
  ) {
    return "Scores are out of bounds";
  }

  const totalMarks = obj.testScore + obj.schoolGrade;
  if (isFFamily) {
    totalMarks += 20;
  }

  if (totalMarks >= 80) {
    return true;
  } else {
    return false;
  }
}

console.log(
  calculateFinalScore({
    name: "Rajib",
    testScore: 45,
    schoolGrade: 25,
    isFFamily: true,
  })
);
console.log(
  calculateFinalScore({
    name: "Rajib",
    testScore: 45,
    schoolGrade: 25,
    isFFamily: false,
  })
);
console.log(calculateFinalScore("hello"));
console.log(
  calculateFinalScore({
    name: "Rajib",
    testScore: 15,
    schoolGrade: 25,
    isFFamily: true,
  })
);
