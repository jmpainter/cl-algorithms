function getMaxProfit(prices) {
  let max = -Infinity;
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      const profit = prices[j] - prices[i];
      if (profit > max) {
        max = profit;
      }
    }
  }
  return max;
}

function getMaxProfit2(prices) {
  let minPrice = prices[0];
  let maxProfit = prices[1] - prices[0];

  for (let i = 1; i < prices.length; i++) {
    const currentPrice = prices[i];

    const potentialProfit = currentPrice - minPrice;
    maxProfit = Math.max(maxProfit, potentialProfit);

    minPrice = Math.min(currentPrice, minPrice);
  }
  return maxProfit;
}

let stockPrices = [10, 7, 5, 8, 11, 9];
console.log(getMaxProfit2(stockPrices));

stockPrices = [10, 5, 4, 2];
console.log(getMaxProfit2(stockPrices));
