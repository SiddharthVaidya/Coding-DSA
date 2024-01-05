//problem statement

// Given an integer array nums, return the length of the longest strictly increasing 
// subsequence.

// Input: nums = [10, 9, 2, 5, 3, 7, 101, 18];
// Output: 4;

// Input: nums = [0, 1, 0, 3, 2, 3];
// Output: 4;

//TC : O(N^2)
//SC : O(N);

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(A) {
    const n = A.length;
    let arr = new Array(n).fill(1);
    let max = 1;
    for(let i=1;i<n;i++){
        for(let j=0;j<=i;j++){
            if(A[i]>A[j]){
                arr[i] = Math.max(arr[i], arr[j]+1);
            }
            max = Math.max(max, arr[i]);
        }
    }
    return max;
};