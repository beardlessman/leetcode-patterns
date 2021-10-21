// https://leetcode.com/problems/path-sum/

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
 * @param {number} targetSum
 * @return {boolean}
 */

// 84 ms, faster than 75.25%
var hasPathSum = function (root, targetSum) {
  if (!root) {
    return false;
  }

  // is leaf?
  if (!root.left && !root.right) {
    return targetSum === root.val;
  }

  return (
    hasPathSum(root.left, targetSum - root.val) ||
    hasPathSum(root.right, targetSum - root.val)
  );
};

var node1 = new TreeNode(1);
var node2 = new TreeNode(2);
var node7 = new TreeNode(7);
var node11 = new TreeNode(11, node7, node2);
var node4 = new TreeNode(4, null, node1);
var node13 = new TreeNode(13);
var node0 = new TreeNode(0);
var node04 = new TreeNode(4, node11, node0);
var node8 = new TreeNode(8, node13, node4);
var node5 = new TreeNode(5, node04, node8);

console.log(hasPathSum(node5, 22)); // true
console.log(hasPathSum(node5, 18)); // true
console.log(hasPathSum(node5, 0)); // false
console.log(hasPathSum(node5, 19)); // false
