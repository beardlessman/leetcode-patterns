// https://leetcode.com/problems/average-of-levels-in-binary-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */

// 92 ms, faster than 76.51%
// var averageOfLevels = function (root) {
//   const result = [];

//   let nextNodes = [root];

//   const fill = (nodes) => {
//     const current = [];
//     const next = [];

//     nodes.forEach((node) => {
//       if (node.left) {
//         next.push(node.left);
//       }
//       if (node.right) {
//         next.push(node.right);
//       }

//       current.push(node.val);
//     });

//     const l = current.length;
//     const average = current.reduce((acc, i) => acc + i, 0) / l;
//     result.push(average);
//     return next;
//   };

//   while (nextNodes.length) {
//     nextNodes = fill(nextNodes);
//   }

//   return result;
// };

// 132
var averageOfLevels = function(root) {
    let q = [root], ans = []
    while (q.length) {
        let qlen = q.length, row = 0
        for (let i = 0; i < qlen; i++) {
            let curr = q.shift()
            row += curr.val
            if (curr.left) q.push(curr.left)
            if (curr.right) q.push(curr.right)
        }
        ans.push(row/qlen)
    }
    return ans
};

let node15 = new TreeNode(15);
let node7 = new TreeNode(7);
let node20 = new TreeNode(20, node15, node7);
let node9 = new TreeNode(9);
let node3 = new TreeNode(3, node9, node20);

//     3
// 9       20
//     15      7

console.log(averageOfLevels(node3)); // [3.00000,14.50000,11.00000]
