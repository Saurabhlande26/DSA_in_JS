// Richest Customer Wealth.

// 1. Problem statement
// Imagine you work at a bank. The bank has multiple customers, and each customer can have multiple bank accounts.
// You are given a 2D array called accounts.
// - Each inner array represents one customer.
// - Each number represents the amount of money in one bank account.
// - A customer's total wealth is the sum of all their account balances.
// Your task: Find the richest customer and return their total wealth.

// Basically I have to check which customer has the maximum wealth (sum of all accounts)
function maximumWealth(accounts) {
  let maxWealth = 0;
  // This will loop for each user
  for (let j = 0; j < accounts.length; j++) {
    let sum = 0;
    // This will get accounts and sum of all user account
    for (let i = 0; i < accounts[j].length; i++) {
      // every time sum have value total of previos
      sum += accounts[j][i];
    }
    // If previous user has less acccount then current maxWealth value replace
    if (sum > maxWealth) {
      maxWealth = sum;
    }
  }
  return maxWealth;
}

console.log(
  maximumWealth([
    [1, 2, 3],
    [3, 2, 1],
    [4, 5, 6],
  ]),
);
// Expected: 15

console.log(
  maximumWealth([
    [1, 5],
    [7, 3],
    [3, 5],
  ]),
);
// Expected: 10
