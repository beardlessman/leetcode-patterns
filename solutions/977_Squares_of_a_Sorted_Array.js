/**
 * @param {number[]} nums
 * @return {number[]}
 */

// O(n^2) 207 ms, faster than 12.07%
// var sortedSquares = function (nums) {
//     return nums.map((i) => i * i).sort((a, b) => (a > b ? 1 : -1));
// };

// O(n) 131 ms, faster than 38.91%
var sortedSquares = function (nums) {
    let result = [];
    let l = 0;
    let r = nums.length - 1;

    for (let pointer = r; pointer >= 0; pointer--) {
        console.log({ l, r, pointer });
        if (nums[l] ** 2 > nums[r] ** 2) {
            result[pointer] = nums[l] ** 2;
            l++;
        } else {
            result[pointer] = nums[r] ** 2;
            r--;
        }
    }

    return result;
};

console.log(sortedSquares([-4, -1, 0, 3, 10])); // [0,1,9,16,100]
console.log(sortedSquares([-7, -3, 2, 3, 11])); // [4,9,9,49,121]
