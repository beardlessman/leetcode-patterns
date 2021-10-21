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

// 107 ms
// var pathSum = function (root, targetSum) {
//   if (!root) {
//     return [];
//   }

//   const result = [];

//   const walk = (node, target, currentPath) => {
//     if (!node) return;

//     currentPath.push(node.val);

//     if (!node.left && !node.right && node.val === target) {
//       result.push([...currentPath]);
//     }

//     walk(node.left, target - node.val, [...currentPath]);

//     walk(node.right, target - node.val, [...currentPath]);
//   };

//   walk(root, targetSum, []);

//   return result;
// };

// 125 ms
var pathSum = function (root, targetSum) {
  const result = [];
  const path = [];

  const walk = (node, target) => {
    if (!node) return;

    path.push(node.val);

    if (!node.left && !node.right && node.val === target) {
      result.push([...path]);
    }

    walk(node.left, target - node.val);
    walk(node.right, target - node.val);
    path.pop();
  };

  walk(root, targetSum);

  return result;
};

// leafs
var node01 = new TreeNode(1);
var node02 = new TreeNode(2);
var node05 = new TreeNode(5);
var node07 = new TreeNode(7);
var node13 = new TreeNode(13);

var node12 = new TreeNode(12, node07, node02);
var node4 = new TreeNode(4, node05, node01);

var node3 = new TreeNode(3, node12);
var node8 = new TreeNode(8, node13, node4);

var node5 = new TreeNode(5, node3, node8);

console.log(pathSum(node5, 22));
// console.log(pathSum(node5, 18));
