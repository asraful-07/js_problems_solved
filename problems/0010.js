function calculateTax(income, expenses) {
  if (income < 0 || expenses < 0 || income < expenses) {
    return "Invalid Input";
  }
  let total = income - expenses;
  let remainingAmount = total * 0.2;
  return remainingAmount;
}

function sendNotification(email) {
  if (!email.includes("@") || typeof email !== "string") {
    return "Invalid Email";
  }

  let parts = email.split("@");
  const result = parts[0] + " sent you an email from " + parts[1];
  return result;
}

function checkDigitsInName(name) {
  if (typeof name !== "string" || Array.isArray(name)) {
    return "Invalid Input";
  }

  for (let i = 0; i < name.length; i++) {
    if (!isNaN(name[i]) && name[i] !== " ") {
      return "true";
    }
  }

  return "false";
}

function calculateFinalScore(obj) {
  if (typeof obj !== "object" || Array.isArray(obj)) {
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
  const finalScore = testScore + schoolGrade + (isFFamily ? 20 : 0);
  return finalScore >= 80;
}

function waitingTime(waitingTimes, serialNumber) {
  if (!Array.isArray(waitingTimes) || typeof serialNumber !== "number") {
    return "Invalid Input";
  }

  const totalInterviews = waitingTimes.length;
  const totalTime = waitingTimes.reduce((sum, time) => sum + time, 0);
  const averageTime = Math.round(totalTime / totalInterviews);
  const peopleLeftBeforeNumber = serialNumber - totalInterviews - 1;
  const waitingTime = peopleLeftBeforeNumber * averageTime;
  return waitingTime > 0 ? waitingTime : 0;
}
