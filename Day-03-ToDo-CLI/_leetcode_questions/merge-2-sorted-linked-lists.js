/*
Link: https://leetcode.com/problems/merge-two-sorted-lists/
Name: Merge Two Sorted Lists
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const log = (list1, list2, newList) =>
  console.log(
    `
    list1 = ${JSON.stringify(list1)}
    list2 = ${JSON.stringify(list2)}
    newList = ${JSON.stringify(newList)}
    `
  );
var mergeTwoLists = function (list1, list2) {
  if (!list1 && !list2) return null;
  if (!list1) return list2;
  if (!list2) return list1;

  let newList = new ListNode(0);
  const newListHead = newList;
  while (list1 && list2) {
    if (list1.val < list2.val) {
      newList.next = new ListNode(list1.val);
      list1 = list1.next; // move to the next element in list1
    } else {
      newList.next = new ListNode(list2.val);
      list2 = list2.next;
    }
    newList = newList.next; // move to the next element in the new list
    // log(list1, list2, newList);
  }
  // if one of the lists is exhausted, add the remaining elements from the other list
  while (list1) {
    newList.next = new ListNode(list1.val);
    newList = newList.next;
    list1 = list1.next;
  }
  while (list2) {
    newList.next = new ListNode(list2.val);
    newList = newList.next;
    list2 = list2.next;
  }
  return newListHead.next;
};
