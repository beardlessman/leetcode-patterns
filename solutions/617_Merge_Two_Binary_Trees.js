// https://leetcode.com/problems/merge-two-binary-trees/

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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */

// 151 ms, faster than 38.94%
// var mergeTrees = function (root1, root2) {
//   var queue = [root1, root2];

//   while (queue.length) {
//     var node1 = queue.shift();
//     var node2 = queue.shift();

//     if (!node1 && !node2) {
//       continue;
//     }

//     queue.push(node1 ? node1.left : null);
//     queue.push(node2 ? node2.left : null);
//     queue.push(node1 ? node1.right : null);
//     queue.push(node2 ? node2.right : null);

//     if (node1 && node2) {
//       node1.val = node1.val + node2.val;
//       node1.left = node1.left || node2.left;
//       node1.right = node1.right || node2.right;
//     }
//   }

//   return root1;
// };

// 179 ms, faster than 21.35% 
var mergeTrees = function (node1, node2) {
  if (!node1) {
      return node2;
  }

  if (!node2) {
      return node1;
  }

  node1.val = node1.val + node2.val
  node1.left = mergeTrees(node1.left, node2.left)
  node1.right = mergeTrees(node1.right, node2.right)

  return node1;
};

var node3 = new TreeNode(3);
var node4 = new TreeNode(4);
var node2 = new TreeNode(2, node4);
var node1 = new TreeNode(1, node2, node3);

//          1
//      2       3
// 4

var node8 = new TreeNode(8);
var node9 = new TreeNode(9);
var node6 = new TreeNode(6, null, node8);
var node7 = new TreeNode(7, null, node9);
var node5 = new TreeNode(5, node6, node7);

//         5
//      6     7
//        8     9

console.log(mergeTrees(node1, node5)); //
//         6
//      8     10
//    4   8      9
