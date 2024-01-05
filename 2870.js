//problem statement

// You are given a 0-indexed array nums consisting of positive integers.

// There are two types of operations that you can apply on the array any number of times:

// Choose two elements with equal values and delete them from the array.
// Choose three elements with equal values and delete them from the array.
// Return the minimum number of operations required to make the array empty, or -1 if it is not possible.

//Input: nums = [2,3,3,2,2,4,2,3,4]
//Output: 4

//TC : O(N)
//SC : O(N)

/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
  let map = {};
  nums.forEach((val) => {
    if (map[val] === undefined) {
      map[val] = 1;
    } else {
      map[val]++;
    }
  });
  let res = 0;
  for (let key in map) {
    if (map[key] == 1) {
      return -1;
    }
    let val = map[key];
    res += Math.floor(val / 3);
    if (val % 3 != 0) {
      res++;
    }
  }
  return res;
};
