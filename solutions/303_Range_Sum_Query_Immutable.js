/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  this.nums = nums;
  this.sums = [];

  let cur_sum = 0;
  this.nums.forEach((num) => {
    cur_sum += num;
    this.sums.push(cur_sum);
  });
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
// 484 ms
// NumArray.prototype.sumRange = function (left, right) {
//   const part = [...this.nums].slice(left, right + 1);
//   return part.reduce((acc, i) => acc + i, 0);
// };

// 196 ms
// NumArray.prototype.sumRange = function(left, right) {
//     let sum = 0
//     for(let i = left; i <= right; i++){
//         sum += this.nums[i]
//     }
//     return sum
// };

// 108 ms
NumArray.prototype.sumRange = function (left, right) {
  if (left === 0) {
    return this.sums[right];
  }

  return this.sums[right] - this.sums[left - 1];
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */

let numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
console.log(numArray.sumRange(0, 2)); // return (-2) + 0 + 3 = 1
console.log(numArray.sumRange(2, 5)); // return 3 + (-5) + 2 + (-1) = -1
console.log(numArray.sumRange(0, 5)); // return (-2) + 0 + 3 + (-5) + 2 + (-1) = -3
