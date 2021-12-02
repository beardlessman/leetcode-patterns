// https://leetcode.com/problems/find-the-duplicate-number/

/**
 * @param {number[]} nums
 * @return {number}
 */

// O(n) times, O(n) memory: 132 ms, faster than 41.66%
var findDuplicate = function (nums) {
    let times = {};
    let result;

    nums.forEach((item) => {
        if (times[item]) {
            result = item;
        } else {
            times[item] = true;
        }
    });

    return result;
};

// O(n) times, O(1) memory
// если принять, что в nums будут все числа от 1 до n
// var findDuplicate = function (nums) {
//     let sum = ((1 + nums.length - 1) / 2) * (nums.length - 1);
//     return Math.abs(nums.reduce((acc, item) => acc - item, sum));
// };

// 252 ms, faster than 12.58%
// var findDuplicate = function (nums) {
//     const sorted = nums.sort();

//     for (let i = 0; i < nums.length - 1; i++) {
//         let j = i + 1;
//         if (sorted[i] === sorted[j]) {
//             return sorted[i];
//         }
//     }
// };

// O(n) times, O(1) memory 88 ms, faster than 94.56% Floyd algorithm
var findDuplicate = function (nums) {
    let slow = nums[0];
    let fast = nums[0];

    while (true) {
        slow = nums[slow];
        fast = nums[nums[fast]];

        if (slow === fast) {
            break;
        }
    }

    slow = nums[0];

    while (slow !== fast) {
        slow = nums[slow];
        fast = nums[fast];
    }

    return slow;
};

// Modify array: related to #442
// var findDuplicate = function (nums) {
//     let result;

//     nums.forEach((num) => {
//         let n = Math.abs(num);
//         let index = n - 1;
//         let numOnIndex = nums[index];

//         if (numOnIndex < 0) {
//             result = n;
//         } else {
//             nums[index] = numOnIndex * -1;
//         }
//     });

//     return result;
// };

console.log(findDuplicate([1, 2, 3, 2])); // 2
console.log(findDuplicate([1, 3, 4, 2, 2])); // 2
console.log(findDuplicate([3, 1, 3, 4, 2])); // 3
console.log(findDuplicate([2, 2, 2, 2, 2])); // 2
