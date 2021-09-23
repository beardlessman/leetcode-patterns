// https://leetcode.com/problems/counting-bits/

/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  const memo = { 0: 0 };

  for (let i = 1; i <= n; i++) {
    memo[i] = memo[i >> 1] + (i % 2);
  }

  return Object.values(memo);
};

console.log(countBits(2)); // [0,1,1]
console.log(countBits(5)); // [0,1,1,2,1,2]

//     0     1   0 1          0  1
//    10    11   1 2          2  3
//   100   101   1 2          4  5
//   110   111   2 3          6  7
//  1000  1001   1 2          8  9
//  1010  1011   2 3         10 11
//  1100  1101   2 3         12 13
//  1110  1111   3 4         14 15
// 10000 10001   1 2
// 10010 10011   2 3
// 10100 10101   2 3
// 10110 10111   3 4
// 11000 11001   2 3
