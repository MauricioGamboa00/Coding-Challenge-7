// Task 1 Function Declaration

function calculateInvoice(subtotal, taxRate, discount) {
    let total =(subtotal + (subtotal * taxRate)) - discount; // Total with tax and discount applied
    return `Total Invoice: $${total.toFixed(2)}`; // Returns formatted Invoice total within two decimal places
}

console.log(calculateInvoice(100, 0.05, 5)); // Logging Total Invoice to console
console.log(calculateInvoice(500, 0.1, 20)); // Logging Total Invoice to console

