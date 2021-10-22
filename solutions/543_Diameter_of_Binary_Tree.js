// https://leetcode.com/problems/diameter-of-binary-tree/

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

// 140 ms, faster than 19.27%
var diameterOfBinaryTree = function (root) {
  let result = 0;

  const walk = (node) => {
    if (!node) return 0;

    let left = walk(node.left);
    let right = walk(node.right);

    result = Math.max(result, left + right);

    return Math.max(left, right) + 1;
  };

  walk(root);

  return result;
};

// leafs
var node3 = new TreeNode(3);
var node4 = new TreeNode(4);
var node5 = new TreeNode(5);

var node2 = new TreeNode(2, node4, node5);
var node1 = new TreeNode(1, node2, node3);

var node01 = new TreeNode(1);
var node03 = new TreeNode(3, node01);
var node02 = new TreeNode(2, node03);

console.log(diameterOfBinaryTree(node2)); // 2
console.log(diameterOfBinaryTree(node1)); // 3 [4,2,1,3] or [5,2,1,3]
console.log(diameterOfBinaryTree(node02)); // 2
