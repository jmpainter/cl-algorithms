function getMaxProfit(prices) {
  let minPrice = prices[0];
  let maxProfit = prices[1] - prices[0];

  for (let i = 1; i < prices.length; i++) {
    const currentPrice = prices[i];
    const potentialProfit = currentPrice - minPrice;

    minPrice = Math.min(minPrice, currentPrice);
    maxProfit = Math.max(maxProfit, potentialProfit);
  }
  return maxProfit;
}

let stockPrices = [10, 7, 5, 8, 11, 9];
console.log(getMaxProfit(stockPrices));

stockPrices = [10, 5, 4, 2];
console.log(getMaxProfit(stockPrices));
