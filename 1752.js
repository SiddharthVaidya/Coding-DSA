//Problem Statement

// Given an array nums, return true if the array was originally sorted in non-decreasing order, then 
// rotated some number of positions (including zero). 
// Otherwise, return false.
// There may be duplicates in the original array.

// Note: An array A rotated by x positions results in an array B of the same length such that 
// A[i] == B[(i+x) % A.length], where % is the modulo operation.

// Input: nums = [3, 4, 5, 1, 2];
// Output: true;

// Input: nums = [2, 1, 3, 4];
// Output: false;

//TC = O(n)
//SC = O(1)

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {
    let n = nums.length;
    let k = 0;
    for(let i=0;i<n;i++){
        if(nums[i] > nums[(i+1)%n]){
            k++;
        }
        if(k>1){
            return false;
        }
    }
    return true;
};