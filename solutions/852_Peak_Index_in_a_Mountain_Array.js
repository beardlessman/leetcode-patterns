// https://leetcode.com/problems/peak-index-in-a-mountain-array/

/**
 * @param {number[]} arr
 * @return {number}
 */

// 121 ms, faster than 12.40%
// var peakIndexInMountainArray = function (arr) {
//   let left = 0;
//   let right = arr.length - 1;

//   while (left < right) {
//     let mid = left + Math.round((right - left) / 2);
//     let current = arr[mid];
//     let prev = arr[mid - 1];
//     let next = arr[mid + 1];

//     if (current > prev && current > next) {
//       return mid;
//     } else if (current < prev) {
//       right = mid - 1;
//     } else {
//       left = mid + 1;
//     }
//   }

//   return left;
// };

//  142 ms, faster than 5.31%
var peakIndexInMountainArray = function (arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = left + Math.round((right - left) / 2);

    if (arr[mid] < arr[mid + 1]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left;
};

console.log(peakIndexInMountainArray([0, 1, 0])); // 1
console.log(peakIndexInMountainArray([0, 2, 1, 0])); // 1
console.log(peakIndexInMountainArray([0, 10, 5, 2])); // 1
console.log(peakIndexInMountainArray([3, 4, 5, 1])); // 2
console.log(
  peakIndexInMountainArray([24, 69, 100, 99, 79, 78, 67, 36, 26, 19])
); // 2
