function calculateTax(income, expenses) {
  if (income < 0 || expenses < 0 || income < expenses) {
    return "Invalid Input";
  }
  let total = income - expenses;
  let remainingAmount = total * 0.2;
  return remainingAmount;
}

console.log(calculateTax(10000, 3000));
