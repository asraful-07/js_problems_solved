// problem 1
function calculateTax(income, expenses) {
    if(income < 0 || expenses < 0 || income < expenses){
        return "Invalid Input";
    }
    let total = income - expenses;
    let remainingAmount = total * .20;
    return remainingAmount;
}

// console.log(calculateTax(10000, 3000));
// console.log(calculateTax(34000, 1753));
// console.log(calculateTax(5000, 1500));
// console.log(calculateTax(7000, 7000));
// console.log(calculateTax(-5000, 2000));
// console.log(calculateTax(6000, -1500));

function calculateFinalScore(obj) {
    if(typeof obj !== "object") {
        return "Invalid Input";
    }
    // const { name, testScore, schoolGrade, isFFamily } = obj;

    // if (
    //     typeof name !== 'string' || typeof testScore !== 'number' || typeof schoolGrade !== 'number' ||
    //     typeof isFFamily !== 'boolean' || testScore > 50 || testScore < 0 || schoolGrade > 30 || schoolGrade < 0
    // ) {
    //     return 'Scores are out of bounds';
    // }

    const totalMarks = obj.testScore + obj.schoolGrade;
    if (isFFamily) {
       totalMarks += 20;
    }
   
    if(totalMarks >= 80){
        return true;
    }
    else{
        return false;
    }
    

}

console.log(calculateFinalScore({ name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : true}));
console.log(calculateFinalScore({ name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : false}));
console.log(calculateFinalScore("hello"));
console.log(calculateFinalScore({ name: "Rajib", testScore: 15,  schoolGrade: 25, isFFamily : true}));
