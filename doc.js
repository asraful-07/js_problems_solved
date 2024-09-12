function calculateFinalScore(obj) {
    if (typeof obj !== "object" || Array.isArray(obj)) {
        return "Invalid Input";
    }

    const { name, testScore, schoolGrade, isFFamily } = obj;
    if (
        typeof name !== 'string' || typeof testScore !== 'number' || typeof schoolGrade !== 'number' ||
        typeof isFFamily !== 'boolean' || testScore > 50 || testScore < 0 || schoolGrade > 30 || schoolGrade < 0
    ) {
        return 'Scores are out of bounds';
    }
    const finalScore = testScore + schoolGrade + (isFFamily ? 20 : 0);
    return finalScore >= 80;
}


const student1 = {
    name: 'Raju',
    testScore: 45,
    schoolGrade: 25,
    isFFamily: true
};

const student2 = {
    name: 'Rakib',
    testScore: 40,
    schoolGrade: 20,
    isFFamily: false
};

console.log(calculateFinalScore(student1));  // Output: true
console.log(calculateFinalScore(student2));  // Output: false
console.log(calculateFinalScore("hello"));

