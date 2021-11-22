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
 * @return {TreeNode}
 */

// 76 ms, faster than 65.82%
var invertTree = function (root) {
    if (!root) {
        return null;
    }

    let temp = root.left;

    root.left = invertTree(root.right);
    root.right = invertTree(temp);

    return root;
};

let tree = new TreeNode(
    1,
    new TreeNode(2, new TreeNode(4)),
    new TreeNode(3, null, new TreeNode(5, 6, 7))
);

console.log(invertTree(tree));
