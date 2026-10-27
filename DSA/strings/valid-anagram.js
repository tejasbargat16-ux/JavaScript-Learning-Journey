// Problem: Valid Anagram
// Link: https://leetcode.com/problems/valid-anagram/
// Pattern: Hash Map / Counting
// Difficulty: Easy
// Time: O(n)
// Space: O(1)
// Status: solved
//
// 1. Understand : do both strings contain the same letters with the same counts?
// 2. Brute force: sort both strings and compare -> O(n log n).
// 3. Optimized  : count letters in a 26-slot array; +1 for s, -1 for t, all must be 0.

const assert = require('assert');

function isAnagram(s, t) {
  if (s.length !== t.length) return false;
  const count = new Array(26).fill(0);
  const a = 'a'.charCodeAt(0);
  for (let i = 0; i < s.length; i++) {
    count[s.charCodeAt(i) - a]++;
    count[t.charCodeAt(i) - a]--;
  }
  return count.every((c) => c === 0);
}

assert.strictEqual(isAnagram('anagram', 'nagaram'), true);
assert.strictEqual(isAnagram('rat', 'car'), false);
assert.strictEqual(isAnagram('', ''), true);
assert.strictEqual(isAnagram('a', 'ab'), false);
console.log('✅ Valid Anagram passed');
