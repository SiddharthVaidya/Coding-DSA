//Problem Statement

// You are given an integer array nums. You need to create a 2D array from nums satisfying the following conditions:

// The 2D array should contain only the elements of the array nums.
// Each row in the 2D array contains distinct integers.
// The number of rows in the 2D array should be minimal.
// Return the resulting array. If there are multiple answers, return any of them.

// Note that the 2D array can have a different number of elements on each row.

// Constraints: 
// 1 <= nums.length <= 200;
// 1 <= nums[i] <= nums.length;

// Input: nums = [1, 3, 4, 1, 2, 3, 1]
// Output: [[1, 3, 4, 2], [1, 3], [1]]

//Note : With the given constraints it is better to use an array to store frequency of each element 
//       otherwise we have to use Map 

// TC: O(N)
// SC: O(N)

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function(nums) {
    let arr = new Array(nums.length +1).fill(0);
    let res = [];
    for(let i of nums){
        if(arr[i] >= res.length){
            res.push([]);
        }
        res[arr[i]].push(i);
        arr[i]++;
    }
    return res;
};