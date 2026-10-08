var maxProfit = function (prices) {
  let minPrice = prices[0];
  let maxProfit = 0;

  for (const value of prices) {
    if (value < minPrice) {
      minPrice = value;
    }

    const profit = value - minPrice;

    if (profit > maxProfit) {
      maxProfit = profit;
    }
  }
  return maxProfit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5

const BTTBASS = (prices) => {
  let maxProfit = 0;
  let minPrice = prices[0];
  for (const value of prices) {
    if (minPrice > value) {
      minPrice = value;
    }
    const profit = value - minPrice;
    if (profit > maxProfit) {
      maxProfit = profit;
    }
  }
  return maxProfit
};
