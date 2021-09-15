// https://leetcode.com/problems/contains-duplicate/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
// 2550 ms
// var containsDuplicate = function (nums) {
//   var result = false;
//   for (var i = 0; i < nums.length; i++) {
//     var tempItem = nums[i];
//     nums.splice(i, 1);
//     if (nums.includes(tempItem)) {
//       result = true;
//       break;
//     }
//   }

//   return result;
// };

// 127 ms
// var containsDuplicate = function (nums) {
//   var set = new Set();

//   for (var i = 0; i < nums.length; i++) {
//     if (set.has(nums[i])) {
//       return true;
//     }

//     set.add(nums[i]);
//   }

//   return false;
// };

// 76 ms!
var containsDuplicate = function (nums) {
  var set = new Set();
  var result = false;

  nums.forEach((item) => {
    if (set.has(item)) {
      result = true;
    }
    set.add(item);
  });

  return result;
};
