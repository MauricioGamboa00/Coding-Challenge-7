// Task 1 Function Declaration

function calculateInvoice(subtotal, taxRate, discount) {
    let total =(subtotal + (subtotal * taxRate)) - discount; // Total with tax and discount applied
    return `Total Invoice: $${total.toFixed(2)}`; // Returns formatted Invoice total within two decimal places
};

console.log(calculateInvoice(100, 0.05, 5)); // Logging Total Invoice to console
console.log(calculateInvoice(500, 0.1, 20)); // Logging Total Invoice to console

// Task 2 Function Expression

let calculateHourlyWage = function(salary, hoursPerWeek) {
    let hourlyWage = salary / (hoursPerWeek * 52); // Hourly Wage calculated based on yearly salary and weekly hours
    return `Hourly Wage: $${hourlyWage.toFixed(2)}`; // returns formatted hourly wage within two decimal places
};

console.log(calculateHourlyWage(52000, 40)); // Expected output: "Hourly Wage: $25.00"
console.log(calculateHourlyWage(75000, 35)); // Expected output: "Hourly Wage: $41.21"

// Task 3 Arrow Function

const calculateLoyaltyDiscount = (amount, years) => {
    let discount = years >= 5 ? 0.15 : years >= 3 ? 0.10 : 0.05; // calculating discount based on years
    return (amount - (amount * discount)).toFixed(2); // return discounted price within two decimal places
};

console.log("Loyalty Discount 1: $", calculateLoyaltyDiscount(100, 6)); // Expected output: "Discounted Price: $85.00"
console.log("Loyalty Discount 2: $", calculateLoyaltyDiscount(200, 2)); // Expected output: "Discounted Price: $190.00"

