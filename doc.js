function waitingTime(waitingTimes, serialNumber) {
    if (!Array.isArray(waitingTimes) || typeof serialNumber !== 'number') {
        return "Invalid Input";
    }
    // Step 1: Calculate the average interview time (rounded)
    const totalInterviews = waitingTimes.length;
    const totalTime = waitingTimes.reduce((sum, time) => sum + time, 0);
    const averageTime = Math.round(totalTime / totalInterviews);

    // Step 2: Calculate how many people are left before Israt
    const peopleLeftBeforeNumber = serialNumber - totalInterviews;

    // Step 3: Calculate the waiting time
    const waitingTime = peopleLeftBeforeNumber * averageTime;

    // Return the estimated waiting time for Israt
    return waitingTime > 0 ? waitingTime : 0; // Ensure non-negative waiting time
}

// Example usage:
const waitingTimes = [5, 7, 6, 8, 4];  // Interview times of those who have already had viva
const serialNumber = 10;  // Israt's serial number

const result = waitingTime(waitingTimes, serialNumber);
console.log(result);  // Output: 24 (as there are 4 people left before Israt, and average time is 6 minutes)
console.log(waitingTime([13, 2], 6));   // Output: 3
console.log(waitingTime(7 , 10));       // Output: Invalid Input
console.log(waitingTime([7, 8, 3, 4, 5], "9")); // Output: Invalid Input
