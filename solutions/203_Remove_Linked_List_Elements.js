// https://leetcode.com/problems/remove-linked-list-elements/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

var reverseList = function (head) {
  let cur = head;
  let prev = null;
  let next;

  while (cur) {
    next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }
  return prev;
};

// 128 ms, faster than 24.48%
// var removeElements = function (head, val) {
//   if (!head) {
//     return null;
//   }

//   let current = null;
//   let newList = null;
//   let reversed = reverseList(head);
//   let temp = null;

//   while (reversed) {
//     temp = reversed.next;
//     if (reversed.val !== val) {
//       current = reversed;
//       current.next = newList;
//       newList = current;
//     }

//     reversed = temp;
//   }

//   return newList;
// };

// 182 ms, faster than 5.01%
// var removeElements = function (head, val) {
//   if (!head) return null;

//   let cur = head.next;
//   let prev = head;

//   while (cur) {
//     if (cur.val === val) {
//       cur = cur.next;
//       prev.next = cur;
//     } else {
//       prev = prev.next;
//       cur = cur.next;
//     }
//   }

//   if (head.val === val) return head.next;

//   return head;
// };

// 147 ms, faster than 14.08%
// var removeElements = function (head, val) {
//   var current = head;
//   var previous = null;

//   while (current) {
//     if (current.val === val) {
//       if (previous) {
//         previous.next = current.next;
//       } else {
//         head = current.next;
//       }
//     } else {
//       previous = current;
//     }

//     current = current.next;
//   }

//   return head;
// };

// 92 ms, faster than 73.68% 
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

let node1 = new ListNode(1);
let node2 = new ListNode(2);
let node3 = new ListNode(3);
let node4 = new ListNode(4);
let node5 = new ListNode(2);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

console.log({ result: removeElements(node1, 2) });
