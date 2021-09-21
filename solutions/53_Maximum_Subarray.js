/**
 * @param {number[]} nums
 * @return {number}
 */

// 72 ms
// var maxSubArray = function (nums) {
//   let best = nums[0];
//   let sum = nums[0];

//   for (let i = 1; i < nums.length; i++) {
//     const num = nums[i];

//     if (num > sum + num) {
//       sum = num;
//       best = Math.max(best, sum, num);
//     } else {
//       sum = sum + num;
//       best = Math.max(sum, best);
//     }
//   }

//   return best;
// };

// 64 ms faster than 99.40%
var maxSubArray = function (nums) {
  let best = nums[0];
  let sum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];

    sum = Math.max(num, sum + num);
    best = Math.max(best, sum);
  }

  return best;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // [4,-1,2,1] => 6
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 6])); // [4,-1,2,1,-5,6] => 7
console.log(maxSubArray([1])); // [1] => 1
console.log(maxSubArray([5, 4, -1, 7, 8])); // [5,4,-1,7,8] => 23
console.log(maxSubArray([-1, -2])); // [-1] => -1
