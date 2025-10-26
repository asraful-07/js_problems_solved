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

const waitingTimes = [5, 7, 6, 8, 4];
const serialNumber = 10;

const result = waitingTime(waitingTimes, serialNumber);
console.log(result);
console.log(waitingTime([13, 2], 6));
console.log(waitingTime([6], 4));
console.log(waitingTime(7, 10));
console.log(waitingTime([7, 8, 3, 4, 5], "9"));
