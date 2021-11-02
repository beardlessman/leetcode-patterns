// https://leetcode.com/problems/subtree-of-another-tree/

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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSameTree = function (p, q) {
    if (!p && !q) {
        return true;
    }
    if (!p || !q) {
        return false;
    }
    if (p.val !== q.val) {
        return false;
    }
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

// 88 ms, faster than 95.12%
var isSubtree = function (root, subRoot) {
    if (!root) {
        return false;
    }
    if (isSameTree(root, subRoot)) {
        return true;
    }
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

var node1 = new TreeNode(1);
var node2 = new TreeNode(2);
var node5 = new TreeNode(5);
var node4 = new TreeNode(4, node1, node2);
var node3 = new TreeNode(3, node4, node5);

var node04 = new TreeNode(4, node2, node5);

var node001 = new TreeNode(1);
var node01 = new TreeNode(1, node1);

console.log(isSubtree(node3, node4)); // true
console.log(isSubtree(node3, node04)); // false
console.log(isSubtree(node01, node001)); // true
