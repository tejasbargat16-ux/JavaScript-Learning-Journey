// Problem: Two Sum
// Link: https://leetcode.com/problems/two-sum/
// Pattern: Hash Map
// Difficulty: Easy
// Time: O(n)
// Space: O(n)
// Status: solved
//
// 1. Understand : return indexes of two numbers that add up to target.
// 2. Brute force: check every pair -> O(n^2).
// 3. Optimized  : store value -> index in a Map; for each x look up (target - x).

const assert = require('assert');

function twoSum(nums, target) {
  const seen = new Map();
  for (let i = 0; i < nums.length; i++) {
    const need = target - nums[i];
    if (seen.has(need)) return [seen.get(need), i];
    seen.set(nums[i], i);
  }
  return [];
}

assert.deepStrictEqual(twoSum([2, 7, 11, 15], 9), [0, 1]);
assert.deepStrictEqual(twoSum([3, 2, 4], 6), [1, 2]);
assert.deepStrictEqual(twoSum([3, 3], 6), [0, 1]);
assert.deepStrictEqual(twoSum([1, 2], 10), []);
console.log('✅ Two Sum passed');
