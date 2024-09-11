// problem 3 
function checkDigitsInName(name) {
   if(Array.isArray(name)){
    return "Invalid Input";
   }
    const hasDigits = /\d/;

   
    if (hasDigits.test(name)) {
        return "true";
    } 
    else {
        return "false";
    }
}

// Example usage:
const result = checkDigitsInName("Raju123");
console.log(result); 
console.log(checkDigitsInName("Suman"));
console.log(checkDigitsInName("!@#"));
console.log(checkDigitsInName("n9ayeem"));
console.log(checkDigitsInName(["Raj"]));
