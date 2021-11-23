/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// O(n^2) 243 ms, faster than 8.48%
// var twoSum = function (nums, target) {
//     for (let first = 0; first < nums.length; first++) {
//         for (let second = first + 1; second < nums.length; second++) {
//             if (nums[first] + nums[second] === target) {
//                 return [first, second];
//             }
//         }
//     }
// };

// O(n) 111 ms, faster than 46.25%
var twoSum = function(nums, target) {
	let hash = {};
	
	for(let i = 0; i < nums.length; i++) {
		const n = nums[i];
		if(hash[target - n] !== undefined) {
			return [hash[target - n], i];
		}
		hash[n] = i;
	}
	return [];
}

console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSum([3, 4, 2], 6)); // [1, 2]
console.log(twoSum([3, 3], 6)); // [0, 1]
