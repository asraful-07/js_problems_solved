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
