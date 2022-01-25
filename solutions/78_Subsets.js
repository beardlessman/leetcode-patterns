// https://leetcode.com/problems/subsets/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// 98 ms, faster than 45.29%
// var subsets = function (nums) {
//     let result = [[]];

//     const add = (current, nums) => {
//         if (nums.length === 0) {
//             return;
//         }

//         const newCurrent = [...current, nums[0]];
//         result.push(newCurrent);

//         add(newCurrent, nums.slice(1));
//         add(current, nums.slice(1));
//     };

//     add([], nums);

//     return Array.from(result);
// };


// 76 ms, faster than 87.82%
var subsets = function (nums) {
    let result = [[]];

    for (let num of nums) {
        for (let res of result) {
            result = [...result, [...res, num]];
        }
    }

    return result;
};

console.log(subsets([1, 2, 3])); // [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
