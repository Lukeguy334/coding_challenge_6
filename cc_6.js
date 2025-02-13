// Task 1 Business Profit Calculation
function calculateProfit(costPrice, sellingPrice, unitsSold) {
  let profit = (sellingPrice - costPrice) * unitsSold;
  console.log(`Profit is: $${profit}`);
}

calculateProfit(20, 30, 100); // Expected output: "Total Profit: $1000"
calculateProfit(50, 70, 200); // Expected output: "Total Profit: $4000"

// Task 2 Calculate the sales tac
const calculateSalesTax = function(amount, taxRate) {
  let salesTax = amount * taxRate;
  console.log(`Sales tax is: $${salesTax}`);
}

calculateSalesTax(100, 0.07); // Expected output: "Sales Tax: $7"
calculateSalesTax(500, 0.1);  // Expected output: "Sales Tax: $50"

// Task 3 Employee bonus calculation
const calculateBonus = (salary, performanceRating) => {
    let bonusPercentage =
        performanceRating === "Excellent" ? 0.2 : //bonuses based on performance
        performanceRating === "Good" ? 0.1 :
        performanceRating === "Average" ? 0.05 : 0;

    let bonus = salary * bonusPercentage;
    console.log(`Bonus is: $${bonus}`);
};

calculateBonus(5000, "Excellent"); // Expected output: "Bonus: $1000"
calculateBonus(7000, "Good");      // Expected output: "Bonus: $700"

// Task 4 Subscription pricing model
function calculateSubscriptionCost(plan, months, discount = 0) {
  let monthlyRate =
    plan === "Basic" ? 10 : //Different plans rates
    plan === "Premium" ? 20 :
    plan === "Enterprise" ? 50 : 0;

    let totalCost = (monthlyRate * months) - (discount);
    console.log(`Total cost is: $${totalCost}`);
}

calculateSubscriptionCost("Basic", 6, 10); // Expected output: "Total Cost: $50"
calculateSubscriptionCost("Premium", 12, 0); // Expected output: "Total Cost: $240"

// Task 5 Currency conversion
function convertCurrency(amount, exchangeRate) {
    return amount * exchangeRate;
}

//Test cases
console.log(`Converted Amount: $${convertCurrency(100, 1.1)}`); // Expected output: "Converted Amount: $110.00"
console.log(`Converted Amount: $${convertCurrency(250, 0.85)}`); // Expected output: "Converted Amount: $212.50"

// Task 6 Higher Order Function for Bulk Orders
let orders = [200, 600, 1200, 450, 800];

function applyBulkDiscount(orders, discountFunction) {
  return orders.map(discountFunction);
}

let discountOrders = applyBulkDiscount(orders, amount => amount > 500 ? amount * 0.9 : amount);
console.log(discountOrders); // Expected output: [200, 540, 1080, 450, 720]

// Task 7 Business Expenses Tracker
function createExpenseTracker() {
    let total = 0; 

    return function(expense) {
        total += expense;
        return `Total Expenses: $${total}`; //Return updated total
    };
}

let tracker = createExpenseTracker();
console.log(tracker(200)); // Expected output: "Total Expenses: $200"
console.log(tracker(150)); // Expected output: "Total Expenses: $350"

// Task 8 Employee Promotion Evaluation
function calculateYearsToPromotion(employeeLevel) {
    if (employeeLevel >= 10) {
        return 0;
    }
    return 2 + calculateYearsToPromotion(employeeLevel + 1); //promotions take 2 years
}
//Test cases
console.log(`Years to level 10: ${calculateYearsToPromotion(7)}`); // Expected output: "Years to Level 10: 6"
console.log(`Years to level 10: ${calculateYearsToPromotion(5)}`); // Expected output: "Years to Level 10: 10"
