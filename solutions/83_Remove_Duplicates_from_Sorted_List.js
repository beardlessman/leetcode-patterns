// https://leetcode.com/problems/remove-duplicates-from-sorted-list/

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

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var removeElements = function (head, val) {
  var result = new ListNode(0);
  result.next = head;

  var current = result;

  while (current.next) {
    if (current.next.val === val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return result.next;
};

// 119 ms, faster than 23.07%
// var deleteDuplicates = function (head) {
//   let currentVal = -1000;
//   let listHead = null;
//   let listTail = null;

//   while (head) {
//     if (head.val > currentVal) {
//       currentVal = head.val;
//       const newNode = new ListNode(currentVal);
//       if (!listHead || !listTail) {
//         console.log("here!!");
//         listHead = newNode;
//         listTail = newNode;
//       } else {
//         listTail.next = newNode;
//         listTail = newNode;
//       }

//       console.log({ newNode, listHead, listTail });
//     }

//     head = head.next;
//   }

//   return listHead;
// };

var deleteDuplicates = function (head) {
  var current = head;

  while (current != null && current.next != null) {
    if (current.val == current.next.val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return head;
};

let node1 = new ListNode(1);
let node2 = new ListNode(2);
let node3 = new ListNode(2);
let node4 = new ListNode(2);
let node5 = new ListNode(3);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

console.log(deleteDuplicates(node1));
