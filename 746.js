//problem statement

// You are given an integer array cost where cost[i] is the cost of ith step on a staircase. 
// Once you pay the cost, you can either climb one or two steps.
// You can either start from the step with index 0, or the step with index 1.
// Return the minimum cost to reach the top of the floor.

// Input: cost = [10, 15, 20];
// Output: 15;

// Input: cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1];
// Output: 6;

//TC: O(N)
//SC: O(N)

/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    const n = cost.length;
    let arr = new Array(n).fill(0);
    arr[0] = cost[0];
    arr[1] = cost[1];
    for(let i=2;i<n;i++){
        arr[i] = cost[i]+Math.min(arr[i-1], arr[i-2]);
    }
    return Math.min(arr[n-2], arr[n-1]);
};