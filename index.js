// problem 1 
function calculateMoney(ticketSale){
    if(ticketSale < 0){
        return 'Invalid number'
    }

    let remaingAmount = ticketSale * 120 - (500 + 8 * 50);
    return remaingAmount;
}

console.log(calculateMoney(10));
console.log(calculateMoney(1055));
console.log(calculateMoney(93));
console.log(calculateMoney(-130));



// || typeof ticketSale !== 'number'