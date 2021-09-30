// https://leetcode.com/problems/reverse-linked-list/

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

// 80 ms, faster than 62.37%
// var reverseList = function (head) {
//     let pointer = head;
//     let rev = null;
//     let temp;

//     while (pointer) {
//         temp = rev;
//         rev = {...pointer};
//         rev.next = temp;

//         pointer = pointer.next;
//     }

//     return rev;
// };

// 84 ms, faster than 42.51%
// var reverseList = function (head) {
//   let [prev, cur] = [null, head];
//   while (cur) {
//     [cur.next, prev, cur] = [prev, cur, cur.next];
//   }
//   return prev;
// };

// 80 ms
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

// 1 -> 2 -> 3

let node1 = new ListNode(1);
let node2 = new ListNode(2);
let node3 = new ListNode(3);
let node4 = new ListNode(4);
let node5 = new ListNode(5);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

console.log(reverseList(node1));
