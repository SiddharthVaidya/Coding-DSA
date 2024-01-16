//problem statement

//Given an integer array nums, return true if there exists a triple of indices (i, j, k)
// such that i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.

// Input: nums = [1, 2, 3, 4, 5];
// Output: true;

// Input: nums = [5, 4, 3, 2, 1];
// Output: false;

// TC: O(n) 
// SC: O(1)
 
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let n = nums.length;
    let first = Number.MAX_VALUE; //keep track of first minimum value
    let second = Number.MAX_VALUE; // keeps track of second minimum value
    for(let i=0;i<n;i++){
        first = Math.min(first, nums[i]);
        second= first < nums[i] ? Math.min(second, nums[i]) : second
        if(nums[i] > first && nums[i] > second){ // nums[i] > first > second
            return true
        }
    }
    return false;
};