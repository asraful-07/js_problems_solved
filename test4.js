function calculateFinalScore(obj) {
    if(typeof obj !== "object" || obj === null || Array.isArray(obj)) {
        return "Invalid Input";
    }
    const { name, testScore, schoolGrade, isFFamily } = obj;

    // Check if the input data types are valid
    if (typeof name !== 'string' || typeof testScore !== 'number' || typeof schoolGrade !== 'number' 
        || typeof isFFamily !== 'boolean') {
        // throw new Error('Invalid input types');
        return 'no more  today';
    }

    // Check if testScore and schoolGrade are within the allowed range
    if (testScore > 50 || schoolGrade > 30 || testScore < 0 || schoolGrade < 0) {
        // throw new Error('Scores are out of bounds');
        return 'no more  today';
    }

    // Initialize the final score with testScore and schoolGrade
    let finalScore = testScore + schoolGrade;

    // Add 20 points if the parent profession is 'farmer' (isFFamily is true)
    if (isFFamily) {
        finalScore += 20;
    }

    // Return true if the final score is 80 or above, otherwise false
    return finalScore >= 80;
}

// Example usage:
const rajivData = {
    name: "Rajiv",
    testScore: 45,         // out of 50
    schoolGrade: 25,       // out of 30
    isFFamily: true        // true if parent's profession is farmer
};

const result = calculateFinalScore(rajivData);
console.log(result);  // Output: true (since finalScore is 90)
console.log(calculateFinalScore("hello"));
console.log(calculateFinalScore({ name: "Rajib", testScore: 15,  schoolGrade: 25, isFFamily : false}));

