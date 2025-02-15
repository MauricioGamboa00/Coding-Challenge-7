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

// Task 5 Returning Values 

function calculateLoanInterest(principal, rate, years) {
    let interest = principal * rate * years; // calculate intrest by multiplying principal by rate then multiplying by years
    return `Total Interest: $${interest.toFixed(2)}`; // return formatted intrest within two decimal places
};

console.log(calculateLoanInterest(1000, 0.05, 3)); // Expected output: "Total Interest: $150.00
console.log(calculateLoanInterest(5000, 0.07, 5)); // Expected output: "Total Interest: $1750.00"

// Task 6 Higher Order Functions

let transactions = [500, 1200, 3000, 800, 2200]; // declared an array of transactions
let filterHighValueTransactions = (transactions, filterfunction) => {
    return transactions.filter(filterfunction); // applied a filter function to filter high value transactions
};
    let isHighValueTransaction = (transaction) => transaction > 1000; // declared high value transactions to be over 1000
    let highValueTransactions = filterHighValueTransactions(transactions, isHighValueTransaction); // filter transactions over 1000

    console.log("High Value Transactions:", highValueTransactions); // Expected output: [1200, 3000, 2200]

// Task 7 Closures

function createBudgetTracker(){
    let balance = 0; // declared starting balance amount
    return function(expense) {
        balance -= expense; // subtracting expense from starting balance
        console.log(`Current Balance: $${balance}`); // logging of amount in balance after an expense
    };
};
let budget = createBudgetTracker(); // Created budget tracker

budget(300); // Expected output: "Current Balance: -$300"
budget(200); // // Expected output: "Current Balance: -$500"