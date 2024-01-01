// Problem Statement

// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, 
// such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,
// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.
// Given n, calculate F(n).

//Input: n = 2
//Output: 1

// Input: n = 3
// Output: 2

//recursive approach -> TC -> O(2^n)
/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if(n == 0 || n ==1){
        return n;
    }
    return fib(n-1) + fib(n-2);
};

//iterative approach (optimised) TC -> O(N)

/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    let a = 0;
    let b = 1;
    if(n == 1 || n == 0){
        return n;
    }
    let ans = 0;
    for(let i = 2; i<=n; i++){
        ans = a+b;
        a = b;
        b = ans;
    }
    return ans;
};

