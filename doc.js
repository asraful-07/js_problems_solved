const hasDigits = str => {
    for (const char of str) {
        if (/\d/.test(char)) {
            return true;
        }
    }
    return false;
};

console.log(hasDigits("Hello123")); // Output: true
console.log(hasDigits("Hello"));   // Output: false
