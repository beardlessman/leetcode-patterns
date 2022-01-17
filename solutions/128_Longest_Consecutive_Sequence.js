// https://leetcode.com/problems/longest-consecutive-sequence/

/**
 * @param {number[]} nums
 * @return {number}
 */

// 108 ms, faster than 75.61%
// O(n log n) — because of .sort()
// var longestConsecutive = function (nums) {
//     if (nums.length === 0) return 0;

//     let maxresult = 1;
//     let currentresult = 1;
//     const hash = {};

//     nums.sort((a, b) => (a > b ? 1 : -1)).forEach((num) => {
//         if (!hash[num]) {
//             hash[num] = 1;
//         }

//         if (!hash[num - 1]) {
//             maxresult = Math.max(maxresult, currentresult);
//             currentresult = 1;
//         }

//         if (hash[num - 1] === 1) {
//             hash[num - 1] = 2;
//             currentresult += 1;
//         }
//     });

//     maxresult = Math.max(maxresult, currentresult);

//     return maxresult;
// };

var longestConsecutive = function (nums) {
    if (nums.length === 0) return 0;

    const hash = nums.reduce((acc, num) => {
        if (!acc[num]) {
            acc[num] = 1;
        }
        return acc;
    }, {});

    let maxresult = 1;

    nums.forEach((num) => {
        if (!hash[num - 1]) {
            let nextnum = num + 1;

            while (hash[nextnum]) {
                nextnum += 1;
            }

            maxresult = Math.max(maxresult, nextnum - num);
        }
    });

    return maxresult;
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // 4 (1, 2, 3, 4)
console.log(longestConsecutive([0, 7, 2, 5, 8, 3, 4, 6, 0, 1])); // 9
