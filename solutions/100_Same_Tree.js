// https://leetcode.com/problems/same-tree/

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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

// DFS 88 ms, faster than 35.49%
// var isSameTree = function (p, q) {
//   let stack = [p, q];

//   while (stack.length > 0) {
//     let pnode = stack.pop();
//     let qnode = stack.pop();

//     if (!pnode && !qnode) {
//       continue;
//     }

//     if (!pnode || !qnode) {
//       return false;
//     }

//     if (pnode.val !== qnode.val) {
//       return false;
//     }

//     stack.push(pnode.right);
//     stack.push(qnode.right);
//     stack.push(pnode.left);
//     stack.push(qnode.left);
//   }

//   return true;
// };

// BFS 72 ms, faster than 80.36%
// var isSameTree = function (p, q) {
//   let queue = [p, q];

//   while (queue.length > 0) {
//     let pnode = queue.shift();
//     let qnode = queue.shift();

//     if (!pnode && !qnode) {
//       continue;
//     }

//     if (!pnode || !qnode) {
//       return false;
//     }

//     if (pnode.val !== qnode.val) {
//       return false;
//     }

//     queue.push(pnode.left);
//     queue.push(qnode.left);
//     queue.push(pnode.right);
//     queue.push(qnode.right);
//   }

//   return true;
// };

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

let node5 = new TreeNode(5);
let node4 = new TreeNode(4);
let node3 = new TreeNode(3, null, node5);
let node2 = new TreeNode(2, node4);
let node1 = new TreeNode(1, node2, node3);

let node50 = new TreeNode(6);
let node40 = new TreeNode(4);
let node30 = new TreeNode(3, null, node50);
let node20 = new TreeNode(2, node40);
let node10 = new TreeNode(1, node20, node30);

//         1
//     2       3
// 4                5

console.log(isSameTree(node1, node10)); // true
