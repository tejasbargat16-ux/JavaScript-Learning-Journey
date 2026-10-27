// Problem: Maximum Subarray
// Link: https://leetcode.com/problems/maximum-subarray/
// Pattern: Kadane / DP
// Difficulty: Medium
// Time: O(n)
// Space: O(1)
// Status: revise
//
// 1. Understand : largest sum of a contiguous subarray (array can have negatives).
// 2. Brute force: every (i, j) pair -> O(n^2).
// 3. Optimized  : at each element choose "start fresh" or "extend previous" (Kadane).

const assert = require('assert');

function maxSubArray(nums) {
  let best = nums[0];
  let cur = nums[0];
  for (let i = 1; i < nums.length; i++) {
    cur = Math.max(nums[i], cur + nums[i]);
    best = Math.max(best, cur);
  }
  return best;
}

assert.strictEqual(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);
assert.strictEqual(maxSubArray([1]), 1);
assert.strictEqual(maxSubArray([-3, -1, -2]), -1);
assert.strictEqual(maxSubArray([5, 4, -1, 7, 8]), 23);
console.log('✅ Maximum Subarray passed');
