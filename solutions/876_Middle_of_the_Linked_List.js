// https://leetcode.com/problems/middle-of-the-linked-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

let node1 = new ListNode(1);
let node2 = new ListNode(2);
let node3 = new ListNode(3);
let node4 = new ListNode(4);
let node5 = new ListNode(5);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// 76 ms
// var middleNode = function (head) {
//   let node = head;
//   let nodesArr = [];

//   while (node) {
//     nodesArr.push(node);
//     node = node.next;
//   }

//   if (nodesArr.length === 1) {
//     return nodesArr[0];
//   }

//   let middleIndex = Math.floor(nodesArr.length / 2);
//   return nodesArr[middleIndex];
// };

// 72 ms
var middleNode = function (head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
};

console.log(middleNode(node1));
