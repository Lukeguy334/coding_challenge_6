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
