// https://leetcode.com/problems/product-of-array-except-self/

/**
 * @param {number[]} nums
 * @return {number[]}
 */

// 116 ms, faster than 76.25%
// var productExceptSelf = function (nums) {
//     let zeroCount = 0;
//     nums.forEach((item) => {
//         if (item === 0) {
//             zeroCount += 1;
//         }
//     });

//     if (zeroCount > 1) {
//         return nums.map((item) => 0);
//     }

//     const getProduct = (arr) =>
//         arr.reduce((acc, i) => (i !== 0 ? acc * i : acc), 1);
//     const product = getProduct(nums);
//     if (zeroCount > 0) {
//         return nums.map((item) => (item === 0 ? product : 0));
//     }
//     return nums.map((item) => product / item);
// };

var productExceptSelf = function (nums) {
    let ltrProducts = [];
    let rtlProducts = [];
    ltrProducts[0] = 1;
    rtlProducts[nums.length - 1] = 1;

    for (let i = 1; i < nums.length; i++) {
        ltrProducts[i] = ltrProducts[i - 1] * nums[i - 1];
    }

    for (let j = nums.length - 2; j >= 0; j--) {
        rtlProducts[j] = rtlProducts[j + 1] * nums[j + 1];
    }

    return nums.map((item, index) => ltrProducts[index] * rtlProducts[index]);
};

console.log(productExceptSelf([1, 2, 3, 4])); // [24,12,8,6]
console.log(productExceptSelf([-1, 1, 0, -3, 3])); // [0,0,9,0,0]
console.log(productExceptSelf([4, 5, 1, 8, 2])); //
