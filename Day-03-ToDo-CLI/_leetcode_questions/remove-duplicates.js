/*
Link: https://leetcode.com/problems/remove-duplicates-from-sorted-array/
Name: Remove Duplicates from Sorted Array
Problem: 
Given a sorted array nums, remove the duplicates in-place such that 
each element appears only once and returns the new length.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let savedIndex = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[savedIndex] = nums[i];
      savedIndex++;
    }
  }
  return savedIndex;
};