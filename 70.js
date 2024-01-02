//problem statement

// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Input: n = 2;
// Output: 2;

// Input: n = 3;
// Output: 3;

//TC: O(N)
//SC: O(1)

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let a = 1;
    let b = 2;
    let res = 0;
    if(n<=2){
        return n;
    }
    for(let i=3;i<=n;i++){
        res = a+b;
        a=b;
        b=res;
    }
    return b;
};