// https://leetcode.com/problems/subsets-ii/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
    const aToS = (a) => a.join(",");
    const sToA = (s) => s.split(",").map((s) => +s);

    let result = new Set();

    const add = (current, nums) => {
        if (nums.length === 0) {
            return;
        }

        const newCurrent = [...current, nums[0]];
        result.add(aToS(newCurrent));

        add(newCurrent, nums.slice(1));
        add(current, nums.slice(1));
    };

    add([], nums.sort());

    return [...Array.from(result).map((s) => sToA(s)), []];
};

console.log(subsetsWithDup([1, 2, 2])); // [[],[1],[1,2],[1,2,2],[2],[2,2]]
