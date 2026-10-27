# 📘 DSA Preparation Notes (JavaScript)

Tracker (auto-updated): [README.md](README.md)

## 🔁 Per-problem routine (30–45 min)

1. **Understand** — restate the problem, note constraints, list edge cases (empty, 1 element, duplicates, negatives).
2. **Brute force** — say it out loud, with its complexity.
3. **Optimize** — find the pattern (table below).
4. **Code** — clean names, no premature tricks.
5. **Test** — 2 normal cases + 2 edge cases using `assert`.
6. **Record** — fill the header (Pattern, Time, Space, Status). Not able to solve in 20 min on your own → `Status: revise`.

Every file starts with this header so the tracker can read it:

```js
// Problem: Two Sum
// Link: https://leetcode.com/problems/two-sum/
// Pattern: Hash Map
// Difficulty: Easy
// Time: O(n)
// Space: O(n)
// Status: solved        (todo | solved | revise)
```

Create a new file: `bash scripts/new.sh dsa arrays two-sum "Two Sum" Easy "Hash Map"`

## ⏱️ Complexity cheat sheet

| n (input size) | Acceptable complexity |
|:--|:--|
| ≤ 10 | O(n!) / backtracking |
| ≤ 20 | O(2ⁿ) |
| ≤ 500 | O(n³) |
| ≤ 10⁴ | O(n²) |
| ≤ 10⁵–10⁶ | O(n log n) or O(n) |
| ≥ 10⁹ | O(log n) / math |

| JS operation | Cost |
|:--|:--|
| `arr[i]`, `push`, `pop` | O(1) |
| `shift`, `unshift`, `splice` | O(n) — avoid in loops (BFS: use an index pointer) |
| `includes`, `indexOf`, `find` | O(n) |
| `Set` / `Map`: `has`, `get`, `set`, `delete` | O(1) average |
| `sort()` | O(n log n) |
| String `+=` in a loop | can be O(n²) — collect in array, then `join('')` |

## 🧭 Pattern recognition

| Clue in the problem | Pattern | JS tool |
|:--|:--|:--|
| "Find pair / count / seen before" | Hash Map / Set | `Map`, `Set` |
| Sorted array, pair with a sum | Two Pointers | `l`, `r` indexes |
| Longest/shortest subarray or substring with a condition | Sliding Window | `l`, `r` + `Map` |
| "Next greater", matching brackets | Stack / Monotonic Stack | array `push/pop` |
| Sorted input, "find position", "minimum X such that…" | Binary Search | `mid = l + ((r - l) >> 1)` |
| Max/min subarray, "best so far" | Kadane / DP | running variable |
| Tree / graph levels, shortest path (unweighted) | BFS | queue (array + index) |
| Tree / graph exploration, connected components | DFS | recursion / stack |
| "All combinations / subsets / permutations" | Backtracking | recursion + `path` |
| Overlapping subproblems ("number of ways", "min cost") | Dynamic Programming | array / `Map` memo |
| Top K / streaming min or max | Heap | (write a small MinHeap class) |

## ⚠️ JavaScript gotchas for interviews

- `[10, 9, 1].sort()` is **lexicographic** → use `.sort((a, b) => a - b)`.
- Integer division: `Math.floor(a / b)` (or `a / b | 0` for 32-bit).
- `Map` keeps insertion order and accepts any key type; plain `{}` converts keys to strings.
- Arrays/objects are compared by reference: `[1] === [1]` is `false`. Compare using `JSON.stringify` or element by element.
- Don't mutate the input unless the problem allows it. Clone with `[...arr]`.
- `Number.MAX_SAFE_INTEGER` is 2⁵³ − 1. Use `BigInt` beyond that.
- Initialize "min/max" with `Infinity` / `-Infinity`, not `0`.

## 🗓️ 6-week plan (1 problem/day)

| Week | Topic | Problems |
|:-:|:--|:--|
| 1 | Arrays & Hashing | Two Sum · Contains Duplicate · Valid Anagram · Group Anagrams · Top K Frequent Elements · Product of Array Except Self |
| 2 | Two Pointers & Sliding Window | Valid Palindrome · 3Sum · Container With Most Water · Best Time to Buy and Sell Stock · Longest Substring Without Repeating Characters · Maximum Subarray |
| 3 | Stack & Binary Search | Valid Parentheses · Min Stack · Daily Temperatures · Binary Search · Search in Rotated Sorted Array · Find Minimum in Rotated Sorted Array |
| 4 | Linked List & Recursion | Reverse Linked List · Merge Two Sorted Lists · Linked List Cycle · Remove Nth Node From End · Fibonacci (memo) · Subsets |
| 5 | Trees & Graph basics | Invert Binary Tree · Maximum Depth · Level Order Traversal · Validate BST · Number of Islands · Lowest Common Ancestor |
| 6 | DP basics + Revision | Climbing Stairs · House Robber · Coin Change · Longest Increasing Subsequence · Unique Paths · **redo everything marked 🔁** |

Rule: the 7th day of each week is **revision day** — redo every `Status: revise` problem from scratch without looking.

## 🎤 How to speak in an interview

1. Repeat the problem and ask about constraints/edge cases.
2. Explain brute force first, then improve it.
3. Dry-run on a small example before coding.
4. After coding, state time and space complexity yourself.
5. If stuck, think out loud — the interviewer wants your reasoning.
