// https://leetcode.com/problems/missing-number/

/**
 * @param {number[]} nums
 * @return {number}
 */
// 174 ms 
// var missingNumber = function (nums) {
//   var sorted = nums.sort((a, b) => a > b ? 1 : -1);

//   for (var i = 0; i < sorted.length; i++) {
//     if (sorted[i] !== i) {
//       return i;
//     }
//   }

//   return sorted.length;
// };

// 76 ms
var missingNumber = function (nums) {
  var sum = nums.reduce((acc, i) => acc + i, 0);
  var sumProg = (2 + nums.length - 1)  / 2 * (nums.length);

  return sumProg - sum;
};

console.log(missingNumber([3, 0, 1])); // 2
console.log(missingNumber([0, 1])); // 2
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); // 8
console.log(missingNumber([0])); // 1
console.log(missingNumber(
    [45,35,38,13,12,23,48,15,44,21,43,26,6,37,1,19,22,3,11,32,4,16,28,49,29,36,33,8,9,39,46,17,41,7,2,5,27,20,40,34,30,25,47,0,31,42,24,10,14])); // 18
