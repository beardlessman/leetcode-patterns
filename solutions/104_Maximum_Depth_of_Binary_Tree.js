// https://leetcode.com/problems/maximum-depth-of-binary-tree/

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

// 110 ms, faster than 32.02%
// var maxDepth = function (root) {
//   if (!root) {
//     return 0;
//   }

//   var result = 0;

//   const walk = (node) => {
//     if (!node) return 0;

//     let left = walk(node.left);
//     let right = walk(node.right);

//     result = Math.max(result, left, right);

//     return Math.max(left, right) + 1;
//   };

//   walk(root);

//   return result + 1;
// };

// 119 ms, faster than 24.41%
var maxDepth = function (root) {
  if (!root) {
    return 0;
  }
  var queue = [root];
  var depth = 0;

  while (queue.length) {
    depth += 1;
    let len = queue.length;

    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
  }

  return depth;
};

var node4 = new TreeNode(4);
var node5 = new TreeNode(5);
var node3 = new TreeNode(3, node4, node5);
var node2 = new TreeNode(2);
var node1 = new TreeNode(node2, node3);

console.log(maxDepth(node1));
