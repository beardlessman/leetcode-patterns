// https://leetcode.com/problems/minimum-depth-of-binary-tree/

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
 * @return {number}
 */

// 236 ms, faster than 87.09%
var minDepth = function (root) {
  if (!root) {
    return 0;
  }
  let depth = 1;

  let nodes = [root];

  while (nodes.length) {
    if (nodes.some((n) => !n.left && !n.right)) {
      nodes = [];
      return depth;
    }

    depth += 1;
    let len = nodes.length;

    for (let i = 0; i < len; i++) {
      const node = nodes.shift();
      if (node.left) {
        nodes.push(node.left);
      }
      if (node.right) {
        nodes.push(node.right);
      }
    }
  }

  return depth;
};

// 495 ms, faster than 5.05% 
// var minDepth = function (root) {
//   if (!root) {
//     return 0;
//   }

//   let depth = 1;
//   let nodes = [root];

//   while (nodes.length) {
//     let len = nodes.length;
//     for (let i = 0; i < len; i++) {
//       const node = nodes.shift();
//       if (!node.left && !node.right) {
//         return depth;
//       }
//       if (node.left) {
//         nodes.push(node.left);
//       }
//       if (node.right) {
//         nodes.push(node.right);
//       }
//     }

//     depth += 1;
//   }

//   return depth;
// };

let node15 = new TreeNode(15);
let node7 = new TreeNode(7);
let node2 = new TreeNode(2, node15, node7);
let node9 = new TreeNode(9);
let node3 = new TreeNode(3, node9, node2);

//     3
// 9       2
//     15      7

let node50 = new TreeNode(50);
let node40 = new TreeNode(40, null, node50);
let node30 = new TreeNode(30, null, node40);
let node20 = new TreeNode(20, null, node30);
let node10 = new TreeNode(10, null, node20);

// 10
//     20
//         30
//             40
//                 50

let node500 = new TreeNode(50);
let node400 = new TreeNode(40);
let node300 = new TreeNode(30);
let node200 = new TreeNode(20, node400, node500);
let node100 = new TreeNode(10, node200, node300);

//          10
//     20       30
// 40       50

let node5000 = new TreeNode(5);
let node4000 = new TreeNode(4);
let node3000 = new TreeNode(3, null, node5000);
let node2000 = new TreeNode(2, node4000);
let node1000 = new TreeNode(1, node2000, node3000);

//         1
//     2       3
// 4                5

console.log(minDepth(node3)); // 2
console.log(minDepth(node10)); // 5
console.log(minDepth(node100)); // 2
console.log(minDepth(node1000)); // 3
