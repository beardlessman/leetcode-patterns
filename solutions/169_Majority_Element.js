/**
 * @param {number[]} nums
 * @return {number}
 */

// 90 ms, faster than 34.57%
var majorityElement = function (nums) {
    const hash = {};
    const mid = Math.round(nums.length / 2);
    let majorityElement;

    nums.forEach((item) => {
        let count;
        if (hash[item]) {
            count = hash[item] + 1;
        } else {
            count = 1;
        }

        hash[item] = count;
        if (count >= mid) {
            majorityElement = item;
        }
    });

    return majorityElement;
};

// var majorityElement = function (nums) {
//     nums.sort((a, b) => a - b);
//     return nums[Math.floor(nums.length / 2)];
// };

var majorityElement = function (nums) {
    // Boyer-Moore Voting Algorithm

    let count = 0,
        candidate = 0;

    for (let num of nums) {
        if (count == 0) {
            candidate = num;
        }
        if (candidate == num) {
            count += 1;
        } else {
            count -= 1;
        }
    }

    return candidate;
};

console.log(majorityElement([3, 2, 3])); // 3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // 2
