function waitingTime(interviewTimes, isratSerial) {
    if (!Array.isArray(interviewTimes) || typeof isratSerial !== 'number') {
        return "Invalid Input";
    }
    // Step 1: Calculate the average interview time (rounded)
    const totalInterviews = interviewTimes.length;
    const totalTime = interviewTimes.reduce((sum, time) => sum + time, 0);
    const averageTime = Math.round(totalTime / totalInterviews);

    // Step 2: Calculate how many people are left before Israt
    const peopleLeftBeforeIsrat = isratSerial - totalInterviews - 1;

    // Step 3: Calculate the waiting time
    const waitingTime = peopleLeftBeforeIsrat * averageTime;

    // Return the estimated waiting time for Israt
    return waitingTime > 0 ? waitingTime : 0; // Ensure non-negative waiting time
}

// Example usage:
const interviewTimes = [5, 7, 6, 8, 4];  // Interview times of those who have already had viva
const isratSerial = 10;  // Israt's serial number

const result = waitingTime(interviewTimes, isratSerial);
console.log(result);  // Output: 24 (as there are 4 people left before Israt, and average time is 6 minutes)
console.log(waitingTime(7 , 10));
console.log(waitingTime([7, 8, 3, 4, 5], "9"));
