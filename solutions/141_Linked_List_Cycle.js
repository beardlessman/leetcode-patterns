// https://leetcode.com/problems/linked-list-cycle/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// 68 ms
var hasCycle = function (head) {
  var set = new Set();
  var node = head;

  while (node && node.next) {
    if (set.has(node)) {
      return true;
    } else {
      set.add(node);
      node = node.next;
    }
  }

  return false;
};

// 84 ms
// var hasCycle = function (head) {
//   var fast = head;
//   var slow = head;

//   while (fast && fast.next && fast.next.next) {
//     fast = fast.next.next;
//     slow = slow.next;

//     if (fast === slow) {
//       return true;
//     }
//   }

//   return false;
// };

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

let node1 = new ListNode(1);
let node2 = new ListNode(2);
let node3 = new ListNode(3);
node1.next = node2;
node2.next = node3;
node3.next = node1;

console.log(hasCycle(node1));
