// https://leetcode.com/problems/find-all-duplicates-in-an-array/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
    let result = [];

    nums.forEach((n) => {
        let num = Math.abs(n);
        let index = num - 1;

        if (nums[index] < 0) {
            result.push(num);
        } else {
            nums[index] = nums[index] * -1;
        }
    });

    return result;
};
