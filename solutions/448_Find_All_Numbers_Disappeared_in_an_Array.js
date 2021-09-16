/**
 * @param {number[]} nums
 * @return {number[]}
 */

// Time Limit Exceeded
// var findDisappearedNumbers = function (nums) {
//   var result = [];
//   for (var i = 1; i < nums.length + 1; i++) {
//     if (!nums.includes(i)) {
//       result.push(i);
//     }
//   }
//   return result;
// }

var findDisappearedNumbers = function (nums) {
  var result = [];

  nums.forEach((number) => {
    const index = Math.abs(number) - 1;
    if (nums[index] > 0) {
      nums[index] = nums[index] * -1;
    }
  });

  for (var i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      result.push(i + 1);
    }
  }
  return result;
};

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])); // [5,6]
console.log(findDisappearedNumbers([1, 1])); // [2]
