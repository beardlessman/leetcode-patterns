// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

// 88 ms, faster than 93.65%
var lowestCommonAncestor = function (root, p, q) {
    var node = root;

    while (node) {
        if (p.val > node.val && q.val > node.val) {
            node = node.right;
        } else if (p.val < node.val && q.val < node.val) {
            node = node.left;
        } else {
            return node;
        }
    }

    return null;
};

var node0 = new TreeNode(0);
var node3 = new TreeNode(3);
var node5 = new TreeNode(5);
var node7 = new TreeNode(7);
var node9 = new TreeNode(9);
var node4 = new TreeNode(4, node3, node5);
var node2 = new TreeNode(2, node0, node4);
var node8 = new TreeNode(8, node7, node9);
var node6 = new TreeNode(6, node2, node8);

// console.log(lowestCommonAncestor(node6, node2, node8)) // node6
// console.log(lowestCommonAncestor(node6, node2, node4)); // node2
console.log(lowestCommonAncestor(node6, node2, node5)); // node2
