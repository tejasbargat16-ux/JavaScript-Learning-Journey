# Day 10 - Advanced Array Operations

## Overview
Day 10 of my JavaScript Learning Journey focuses on advanced array operations. I learned how to sort, reverse, copy, combine, insert, and remove array elements.

## Topics Covered
- `sort()` - Sort array elements in ascending or descending order
- `reverse()` - Reverse the order of array elements
- `slice()` - Extract a portion of an array without modifying the original
- `splice()` - Insert, remove, or replace array elements
- `concat()` - Combine multiple arrays
- Spread operator (`...`) - Copy and combine arrays

## 1. Sort an Array

```javascript
let numbers = [40, 5, 100, 20];

numbers.sort((a, b) => a - b);

console.log(numbers);
// [5, 20, 40, 100]
```

## 2. Reverse an Array

```javascript
let fruits = ["Apple", "Banana", "Mango"];

fruits.reverse();

console.log(fruits);
// ["Mango", "Banana", "Apple"]
```

## 3. Slice an Array

```javascript
let numbers = [10, 20, 30, 40, 50];

let result = numbers.slice(1, 4);

console.log(result);
// [20, 30, 40]
```

## 4. Splice an Array

```javascript
let languages = ["C", "Java", "Python"];

languages.splice(1, 1);

console.log(languages);
// ["C", "Python"]
```

## 5. Spread Operator

```javascript
let first = [1, 2, 3];
let second = [4, 5, 6];

let combined = [...first, ...second];

console.log(combined);
// [1, 2, 3, 4, 5, 6]
```

## Practice Problems Completed
1. Sort numbers in ascending order.
2. Sort numbers in descending order.
3. Reverse an array of weekdays.
4. Extract elements using `slice()`.
5. Remove an element using `splice()`.
6. Insert an element using `splice()`.
7. Combine two arrays using the spread operator.

## Mini Project - Student Marks Organizer

Created a student marks organizer that:
- Sorts students according to marks.
- Displays the top three students.
- Filters students who passed.
- Uses array methods to organize student records.

## What I Learned
- How to sort numeric arrays correctly.
- Difference between `slice()` and `splice()`.
- How to copy arrays using the spread operator.
- How to combine array methods in a practical project.

## Project Structure

```text
Day-10/
├── day10.js
├── day10_practice.js
└── README.md
```

## Run the Programs

```bash
node day10.js
node day10_practice.js
```

## Progress
- Day 01 to Day 09: Completed
- Day 10: Completed

Next: Day 11 - JavaScript Advanced Concepts
