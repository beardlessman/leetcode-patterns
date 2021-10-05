// https://leetcode.com/problems/merge-two-sorted-lists/

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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var mergeTwoLists = function (l1, l2) {
  var merged = new ListNode(0);
  var result = merged;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      merged.next = l1;
      l1 = l1.next;
    } else {
      merged.next = l2;
      l2 = l2.next;
    }
    merged = merged.next;
  }

  //   merged.next = l1 || l2;
  while (l1) {
    merged.next = l1;
    l1 = l1.next;
    merged = merged.next;
  }
  while (l2) {
    merged.next = l2;
    l2 = l2.next;
    merged = merged.next;
  }

  return result.next;
};

var node1 = new ListNode(1);
var node2 = new ListNode(2);
var node3 = new ListNode(4);
node1.next = node2;
node2.next = node3;

var node4 = new ListNode(1);
var node5 = new ListNode(3);
var node6 = new ListNode(4);
node4.next = node5;
node5.next = node6;

console.log(mergeTwoLists(node1, node4));
