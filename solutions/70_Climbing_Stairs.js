/**
 * @param {number} n
 * @return {number}
 */

// 259 ms
// var climbStairs = function (n) {
//   const map = {
//     1: 1,
//     2: 2,
//   };

//   var helper = (num) => {
//     var result;
//     if (!!map[num]) {
//       result = map[num];
//     } else {
//       result = helper(num - 1) + helper(num - 2);
//       map[num] = result;
//     }
//     return result;
//   };

//   return helper(n);
// };

// 83 ms
// var climbStairs = function (n) {
//   const map = {
//     1: 1,
//     2: 2,
//   };

//   for (var i = 3; i <= n; i++) {
//       map[i] = map[i - 1] + map[i - 2];
//   }

//   return map[n];
// };

// 95 ms
// var climbStairs = function (n) {
//   // base cases
//   if (n <= 0) return 0;
//   if (n == 1) return 1;
//   if (n == 2) return 2;

//   var one_step_before = 2;
//   var two_steps_before = 1;
//   var all_ways = 0;

//   for (var i = 2; i < n; i++) {
//     all_ways = one_step_before + two_steps_before;
//     two_steps_before = one_step_before;
//     one_step_before = all_ways;
//   }
//   return all_ways;
// };

// 69 ms
// var climbStairs = function (n) {
//   a = b = 1;
//   while (n--) a = (b += a) - a;
//   return a;
// };

var climbStairs = function (n) {
  if (n === 1) {
    return 1;
  }

  var n1 = 1;
  var n2 = 2;

  for (var i = 3; i < n + 1; i++) {
    var temp = n2;

    n2 = n1 + n2;
    n1 = temp;
  }

  return n2;
};

console.log(climbStairs(1)); // 1
console.log(climbStairs(2)); // 2
console.log(climbStairs(3)); // 3
console.log(climbStairs(4)); // 5
console.log(climbStairs(5)); // 8
console.log(climbStairs(6)); // 13
console.log(climbStairs(7)); // 21
