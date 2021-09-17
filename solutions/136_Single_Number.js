/**
 * @param {number[]} nums
 * @return {number}
 */

// 130 ms
var singleNumber = function (nums) {
  var result = {};

  nums.forEach((item) => {
    result[item] = result[item] ? result[item] + 1 : 1;
  });

  return Number(Object.keys(result).filter((k) => result[k] < 2)[0]);
};

// 628 ms
// var singleNumber = function (nums) {
//   var ones = [];

//   nums.forEach((item) => {
//     if (ones.includes(item)) {
//       ones = ones.filter((i) => i !== item);
//     } else {
//       ones.push(item);
//     }
//   });

//   return ones[0];
// };

// 174 ms
// var singleNumber = function (nums) {
//   var result = {};

//   nums.forEach((item) => {
//     if (result[item]) {
//       delete result[item];
//     } else {
//       result[item] = 1;
//     }
//   });

//   return Number(Object.keys(result)[0]);
// };

// var singleNumber = function (nums) {
//   var times = {};
//   var result = 0;

//   nums.forEach((item) => {
//     if (times[item]) {
//       result = result - item;
//     } else {
//       result = result + item;
//       times[item] = 1;
//     }
//   });

//   return result;
// };

// fastest
// function singleNumber(nums) {
// 	return nums.reduce((prev, curr) => prev ^ curr);
// }

console.log(singleNumber([2, 1, 2])); // 1
console.log(singleNumber([4, 1, 2, 1, 2])); // 4
console.log(singleNumber([1])); // 1
