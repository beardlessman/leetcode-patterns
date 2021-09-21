/**
 * @param {number[]} prices
 * @return {number}
 */

// O(n^2) Time Limit Exceeded
// var maxProfit = function (prices) {
//   let profit = 0;

//   prices.map((price, i) => {
//     for (let k = i; k < prices.length; k++) {
//       const delta = prices[k] - price;
//       if (delta > profit) {
//         profit = delta;
//       }
//     }
//   });

//   return profit;
// };

// 112 ms
var maxProfit = function (prices) {
  let profit = 0;
  let minPrice = prices[0];

  prices.map((price) => {
    profit = Math.max(profit, price - minPrice);
    minPrice = Math.min(minPrice, price);
  });

  return profit;
};

// 96 ms
// var maxProfit = function (prices) {
//   var maxCur = 0;
//   var maxSoFar = 0;

//   for (let i = 1; i < prices.length; i++) {
//     const current = prices[i];
//     const prev = prices[i - 1];

//     maxCur = Math.max(0, maxCur + current - prev);
//     maxSoFar = Math.max(maxCur, maxSoFar);

//     console.log({ current, maxCur, maxSoFar });
//   }
//   return maxSoFar;
// };

console.log(maxProfit([1, 2, 3])); // 2
console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
console.log(maxProfit([7, 6, 4, 3, 1])); // 0
console.log(maxProfit([2, 4, 1])); // 2
console.log(maxProfit([2, 4, 1, 5])); // 4
