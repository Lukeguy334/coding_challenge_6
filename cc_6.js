// Task 1 Business Profit Calculation
function calculateProfit(costPrice, sellingPrice, unitsSold) {
  let profit = (sellingPrice - costPrice) * unitsSold;
  console.log(`Profit is: $${profit}`);
}

calculateProfit(20, 30, 100); // Expected output: "Total Profit: $1000"
calculateProfit(50, 70, 200); // Expected output: "Total Profit: $4000"
