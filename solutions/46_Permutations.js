// https://leetcode.com/problems/permutations/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// 72 ms, faster than 99.51%
var permute = function (nums) {
    let variants = [];

    const getVariant = (current, rest) => {
        if (rest.length === 0) {
            variants.push(current);
        }

        for (let num of rest) {
            let newcurrent = [...current, num];
            let newrest = rest.filter((n) => n !== num);

            getVariant(newcurrent, newrest);
        }
    };

    for (let num of nums) {
        let current = [num];
        let rest = nums.filter((n) => n !== num);

        getVariant(current, rest);
    }

    return variants;
};

// 80 ms, faster than 95.94%
// var permute = function (nums) {
//     let result = []

//     const backtrack = (current, nums) => {
//         if (current === nums.length) {
//             result.push(nums)
//         }

//         for (let i = current; i < nums.length; i++) {
//             let temp = nums[i]
//             nums[i] = nums[current]
//             nums[current] = temp

//             backtrack(current + 1, [...nums])

//             temp = nums[i]
//             nums[i] = nums[current]
//             nums[current] = temp
//         }
//     }

//     backtrack(0, nums)
//     return result
// }

console.log(permute([1, 2, 3])); // [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
// console.log(permute([0, 1])); // [[0,1],[1,0]]
