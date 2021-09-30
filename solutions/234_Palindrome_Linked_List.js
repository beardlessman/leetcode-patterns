// https://leetcode.com/problems/palindrome-linked-list/

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
 * @return {boolean}
 */

// 264 ms, faster than 22%
// var isPalindrome = function (head) {
//   let leftValues = '';

//   let pointer = head;

//   while (pointer) {
//     leftValues += pointer.val;
//     pointer = pointer.next;
//   }

//   return leftValues === leftValues.split("").reverse().join("")
// };

// 184 ms, faster than 68.95%
// var isPalindrome = function (head) {
//   let listLenght = 0;
//   let counter = head;

//   let slow = head;
//   let fast = head;
//   let leftValues = [];

//   while (counter) {
//     listLenght += 1;
//     counter = counter.next;
//   }

//   while (fast && fast.next) {
//     leftValues.push(slow.val);
//     slow = slow.next;
//     fast = fast.next.next;
//   }

//   if (listLenght % 2 !== 0) {
//     leftValues.push(slow.val);
//   }

//   while (slow) {
//     if (slow.val !== leftValues.pop()) {
//       return false;
//     }
//     slow = slow.next;
//   }

//   return true;
// };

// 192 ms, faster than 61.20%
// var isPalindrome = function (head) {
//   let slow = head;
//   let fast = head;
//   let leftValues = [];

//   while (fast && fast.next) {
//     leftValues.push(slow.val);
//     slow = slow.next;
//     fast = fast.next.next;
//   }

//   if (fast !== null) {
//     leftValues.push(slow.val);
//   }

//   while (slow) {
//     if (slow.val !== leftValues.pop()) {
//       return false;
//     }
//     slow = slow.next;
//   }

//   return true;
// };

// 108 ms, faster than 100.00%
// var isPalindrome = function (head) {
//   let cur = head;
//   let prev = null;
//   let next;
//   let nextnext;
//   let fast = head;

//   while (fast && fast.next) {
//     next = cur.next;
//     nextnext = fast.next.next;

//     cur.next = prev;
//     prev = cur;

//     cur = next;
//     fast = nextnext;
//   }

//   if (fast !== null) {
//     // нечетное кол-во узлов
//     let temp = {...cur};
//     temp.next = prev;
//     prev = temp;
//   }

//   while (cur) {
//     if (cur.val !== prev.val) {
//       return false;
//     }
//     cur = cur.next;
//     prev = prev.next;
//   }

//   return true;
// };

var middleNode = function (head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
};

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

// 160 ms, faster than 88.52% 
var isPalindrome = function (head) {
  var middle = middleNode(head);
  var reverse = reverseList(middle);

  while (reverse) {
    if (reverse.val !== head.val) {
      return false;
    }

    reverse = reverse.next;
    head = head.next;
  }

  return true;
}

let node1 = new ListNode(1);
let node2 = new ListNode(2);
let node3 = new ListNode(3);
let node4 = new ListNode(2);
let node5 = new ListNode(1);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

console.log(isPalindrome(node1));
