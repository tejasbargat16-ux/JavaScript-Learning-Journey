# 🟨 JavaScript Learning Journey — Day 09

## Array Methods

Day 09 of my JavaScript learning journey.

Today I moved from writing manual `for` loops to using JavaScript's built-in array methods. These methods make code shorter, cleaner, and easier to read when working with lists of data.

---

## 🎯 Learning Objectives

By completing Day 09, I learned how to:

- Loop through arrays using `forEach()`
- Transform arrays using `map()`
- Select elements using `filter()`
- Find elements using `find()`
- Find element positions using `findIndex()`
- Calculate totals and single values using `reduce()`
- Check conditions using `some()` and `every()`
- Work with arrays of objects
- Chain multiple array methods together
- Build a student marks analyzer

---

## 📚 Topics Covered

### 1. `forEach()`

Executes a function for every element in an array. It does not return a new array.

```javascript
let numbers = [10, 20, 30, 40];

numbers.forEach(num => {
    console.log(num);
});
```

Output:

```text
10
20
30
40
```

---

### 2. `map()`

Creates a new array by transforming each element.

```javascript
let numbers = [1, 2, 3, 4, 5];

let squares = numbers.map(num => num * num);

console.log(squares);
```

Output:

```text
[1, 4, 9, 16, 25]
```

---

### 3. `filter()`

Creates a new array containing only elements that satisfy a condition.

```javascript
let numbers = [3, 8, 11, 14, 20, 25];

let evenNumbers = numbers.filter(num => num % 2 === 0);

console.log(evenNumbers);
```

Output:

```text
[8, 14, 20]
```

---

### 4. `find()`

Returns the first element that matches a condition. If no element matches, it returns `undefined`.

```javascript
let ages = [12, 16, 19, 21, 15];

let adult = ages.find(age => age >= 18);

console.log(adult);
```

Output:

```text
19
```

---

### 5. `findIndex()`

Returns the index of the first matching element. If no element matches, it returns `-1`.

```javascript
let numbers = [10, 20, 50, 80];

let index = numbers.findIndex(num => num === 50);

console.log(index);
```

Output:

```text
2
```

---

### 6. `reduce()`

Combines array elements into one accumulated result (sum, total, single value).

```javascript
let prices = [120, 250, 80, 150];

let total = prices.reduce((sum, price) => {
    return sum + price;
}, 0);

console.log(total);
```

Output:

```text
600
```

The initial accumulator is `0`. Each price is added to the accumulated total.

---

### 7. `some()`

Returns `true` if at least one element satisfies a condition.

```javascript
let marks = [70, 45, 28, 80];

let hasFailure = marks.some(mark => mark < 35);

console.log(hasFailure);
```

Output:

```text
true
```

---

### 8. `every()`

Returns `true` only if every element satisfies a condition.

```javascript
let marks = [45, 60, 75, 90];

let allPassed = marks.every(mark => mark >= 35);

console.log(allPassed);
```

Output:

```text
true
```

---

### 9. Working with Array of Objects

Array methods become especially powerful when processing lists of objects:

```javascript
let students = [
    { name: "Tejas", marks: 85 },
    { name: "Rahul", marks: 72 },
    { name: "Sneha", marks: 91 },
    { name: "Amit", marks: 38 }
];

// Names only
let names = students.map((s) => s.name);

// Students with 80+ marks
let toppers = students.filter((s) => s.marks >= 80);

// Find a specific student
let sneha = students.find((s) => s.name === "Sneha");

// Total marks
let totalMarks = students.reduce((sum, s) => sum + s.marks, 0);

console.log(names);
console.log(toppers);
console.log(sneha);
console.log("Total:", totalMarks);
```

---

### 10. Method Chaining

Multiple array methods can be combined cleanly in a pipeline:

```javascript
let result = students
    .filter((s) => s.marks >= 40)
    .map((s) => s.name);

console.log(result); // ["Tejas", "Rahul", "Sneha"]
```

---

## 🧠 Quick Comparison

| Method | Returns | Description / Use Case |
| --- | --- | --- |
| `forEach()` | `undefined` | Run code for each element without returning a new array |
| `map()` | New array | Transform every element into a new value |
| `filter()` | New array | Select elements that pass a test condition |
| `find()` | Single element | Get the first matching element |
| `findIndex()` | Number | Get the index of the first matching element (`-1` if not found) |
| `some()` | `Boolean` | Check if at least one element matches |
| `every()` | `Boolean` | Check if all elements match |
| `reduce()` | Single value | Accumulate elements into a single value (sum, total, object) |

---

## 🧪 Practice Problems

The following practice problems were solved in [`day09_practice.js`](./day09_practice.js):

| No. | Problem | Method |
| --- | --- | --- |
| 1 | Print all numbers | `forEach()` |
| 2 | Square every number | `map()` |
| 3 | Filter even numbers | `filter()` |
| 4 | Find the first adult | `find()` |
| 5 | Find an index | `findIndex()` |
| 6 | Calculate a total | `reduce()` |
| 7 | Check for failures | `some()` |
| 8 | Check all marks | `every()` |
| 9 | Student analyzer | `map()`, `filter()`, `reduce()` |

---

## 🚀 Mini Project — Student Marks Analyzer

A simple JavaScript program that analyzes student data.

### Features
- Stores student names and marks in an array of objects
- Extracts student names using `map()`
- Identifies passing students using `filter()`
- Calculates total marks using `reduce()`
- Calculates average marks

### Example Data

```javascript
let students = [
    { name: "Tejas", marks: 85 },
    { name: "Rahul", marks: 32 },
    { name: "Amit", marks: 72 },
    { name: "Sneha", marks: 90 }
];
```

### Results

```text
Student Names: [ 'Tejas', 'Rahul', 'Amit', 'Sneha' ]

Passed Students:
Tejas - 85
Amit - 72
Sneha - 90

Total Marks: 279
Average Marks: 69.75
```

---

## 📂 Project Structure

```text
JavaScript-Learning-Journey/
│
├── Day-01/
├── Day-02/
├── Day-03/
├── Day-04/
├── Day-05/
├── Day-06/
├── Day-07/
├── Day-08/
│
└── Day-09/
    ├── day09.js
    ├── day09_practice.js
    └── README.md
```

---

## ▶️ How to Run

Check whether Node.js is installed:

```bash
node -v
```

Run the main lesson:

```bash
node day09.js
```

Run the practice solutions:

```bash
node day09_practice.js
```

---

## 💡 Key Takeaways

- `map()` and `filter()` return new arrays and do not mutate the original array.
- `forEach()` returns `undefined`, so use `map()` when you need transformed results.
- `find()` returns one element, whereas `filter()` returns an array.
- Always provide an initial accumulator value to `reduce()` to avoid errors on empty arrays.
- Chaining `filter()` → `map()` → `reduce()` is a very common real-world pattern.

---

## 💡 Real-World Applications

Array methods are useful in:

- Student management systems
- Shopping cart calculations
- Product filtering and sorting
- Search functionality
- Dashboard data processing
- API response handling
- Modern web frameworks (React, Vue, Node.js)

---

## 📈 JavaScript Learning Progress

- Day 01 ██████████ 100% ✅
- Day 02 ██████████ 100% ✅
- Day 03 ██████████ 100% ✅
- Day 04 ██████████ 100% ✅
- Day 05 ██████████ 100% ✅
- Day 06 ██████████ 100% ✅
- Day 07 ██████████ 100% ✅
- Day 08 ██████████ 100% ✅
- Day 09 ██████████ 100% ✅
- Day 10 ░░░░░░░░░░   0% ⏳

---

## 🏁 Day 09 Completed

Today I learned how to work with array methods and process data more efficiently using JavaScript.

**Day 09 — Array Methods ✅**

*Next: Day 10 — Destructuring & Spread*
