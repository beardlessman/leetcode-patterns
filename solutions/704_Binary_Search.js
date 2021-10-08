// https://leetcode.com/problems/binary-search/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// 76 ms, faster than 82.40%
var search = function (nums, target, lo = 0, hi = nums.length - 1) {
  var middle = lo + Math.floor((hi - lo + 1) / 2);

  if (hi <= lo) {
    return nums[middle] === target ? middle : -1;
  }

  if (nums[middle] > target) {
    return search(nums, target, lo, middle - 1);
  } else if (nums[middle] < target) {
    return search(nums, target, middle, hi);
  }

  return nums[middle] === target ? middle : -1;
};

// 76 ms, faster than 82.40%, 42.3 MB
// var search = function (nums, target) {
//   var lo = 0;
//   var hi = nums.length - 1;

//   while (lo < hi) {
//     var middle = lo + Math.floor((hi - lo + 1) / 2);
//     if (nums[middle] > target) {
//       hi = middle - 1;
//     } else {
//       lo = middle;
//     }
//   }

//   return nums[lo] === target ? lo : -1;
// };

console.log(search([0, 1, 2, 3, 4, 5, 6, 7, 8], 1)); // 1
console.log(search([0, 1, 2, 3, 4, 5, 6, 7, 8], 5)); // 5
console.log(search([-1, 9, 11, 12, 15, 20], 9)); // 1
console.log(search([-1, 0, 3, 5, 9, 12], 2)); // -1
console.log(search([5], 5)); // 0
console.log(search([1, 5], 5)); // 1
console.log(search([5], -5)); // -1
console.log(search([2, 5], 2)); // 0
console.log(search([-1, 0, 5], 5)); // 2
console.log(search([-1, 0, 3, 5, 9, 12], 9)); // 4
console.log(search([-1, 0, 3, 5, 9, 12], 12)); // 5
