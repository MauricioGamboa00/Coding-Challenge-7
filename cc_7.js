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

// Task 4 Parameters and Arguments

function calculateShippingCost(weight, location, expedited = false) {
    let baseCost = location === "Canada" ? 10 : location === "USA" ? 5 : 0; // determine base cost based on location
    let perLbCost = location === "Canada" ? 0.7 : location === "USA" ? 0.5 : 0; // deterimine per Lb cost based on location

    let shippingCost = baseCost + (perLbCost * weight); // calculate the shipping cost by adding base cost to per Lb cost times weight

    shippingCost += expedited ? 10 : 0; // If expidited $10 added if not expidited $ 0 added
    
    return `Shipping Cost: $${shippingCost.toFixed(2)}`; // return formatted shipping cost within two decimal places
};

console.log(calculateShippingCost(10, "USA", true)); // Expected output: "Shipping Cost: $20.00"
console.log(calculateShippingCost(5, "Canada", false)); // Expected output: "Shipping Cost: $13.50"
