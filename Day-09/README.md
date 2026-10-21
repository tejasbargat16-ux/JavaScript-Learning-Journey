🟩 JavaScript Learning Journey — Day 09

Array Methods

Day 09 of my JavaScript Learning Journey.

Today I learned how to process, transform, search, and calculate data using JavaScript array methods.

These methods are widely used in web development, data processing, APIs, and real-world applications.

---

🎯 Learning Objectives

By completing Day 09, I learned how to:

- Execute actions on array elements using "forEach()"
- Transform arrays using "map()"
- Select elements using "filter()"
- Find elements using "find()"
- Find element positions using "findIndex()"
- Calculate totals using "reduce()"
- Check conditions using "some()" and "every()"
- Process arrays of objects
- Build a student marks analyzer

---

📚 Topics Covered

1. "forEach()"

Executes a function for every element in an array.

let numbers = [10, 20, 30, 40];

numbers.forEach(num => {
    console.log(num);
});

Output:

10
20
30
40

---

2. "map()"

Creates a new array by transforming each element.

let numbers = [1, 2, 3, 4, 5];

let squares = numbers.map(num => num * num);

console.log(squares);

Output:

[1, 4, 9, 16, 25]

---

3. "filter()"

Creates a new array containing elements that satisfy a condition.

let numbers = [3, 8, 11, 14, 20, 25];

let evenNumbers = numbers.filter(num => num % 2 === 0);

console.log(evenNumbers);

Output:

[8, 14, 20]

---

4. "find()"

Returns the first element that matches a condition.

let ages = [12, 16, 19, 21, 15];

let adult = ages.find(age => age >= 18);

console.log(adult);

Output:

19

If no element matches, "find()" returns "undefined".

---

5. "findIndex()"

Returns the index of the first matching element.

let numbers = [10, 20, 50, 80];

let index = numbers.findIndex(num => num === 50);

console.log(index);

Output:

2

If no element matches, it returns "-1".

---

6. "reduce()"

Combines array elements into one accumulated result.

let prices = [120, 250, 80, 150];

let total = prices.reduce((sum, price) => {
    return sum + price;
}, 0);

console.log(total);

Output:

600

The initial accumulator is "0". Each price is added to the accumulated total.

---

7. "some()"

Returns "true" if at least one element satisfies a condition.

let marks = [70, 45, 28, 80];

let hasFailure = marks.some(mark => mark < 35);

console.log(hasFailure);

Output:

true

---

8. "every()"

Returns "true" if every element satisfies a condition.

let marks = [45, 60, 75, 90];

let allPassed = marks.every(mark => mark >= 35);

console.log(allPassed);

Output:

true

---

🧪 Practice Problems

The following practice problems were completed:

No.| Problem| Method
1| Print all numbers| "forEach()"
2| Square every number| "map()"
3| Filter even numbers| "filter()"
4| Find the first adult| "find()"
5| Find an index| "findIndex()"
6| Calculate a total| "reduce()"
7| Check for failures| "some()"
8| Check all marks| "every()"
9| Build a student analyzer| "map()", "filter()", "reduce()"

---

🚀 Mini Project — Student Marks Analyzer

A simple JavaScript program that analyzes student data.

Features

- Stores student names and marks in an array of objects
- Extracts student names using "map()"
- Identifies passing students using "filter()"
- Calculates total marks using "reduce()"
- Calculates average marks

Example Data

let students = [
    { name: "Tejas", marks: 85 },
    { name: "Rahul", marks: 32 },
    { name: "Amit", marks: 72 },
    { name: "Sneha", marks: 90 }
];

Results

Student Names: [ 'Tejas', 'Rahul', 'Amit', 'Sneha' ]

Passed Students:
Tejas - 85
Amit - 72
Sneha - 90

Total Marks: 279
Average Marks: 69.75

---

📂 Project Structure

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

---

▶️ How to Run

Check whether Node.js is installed:

node -v

Run the main lesson:

node day09.js

Run the practice solutions:

node day09_practice.js

---

🧠 Key Takeaways

The most important array methods learned today:

forEach()
map()
filter()
find()
findIndex()
reduce()
some()
every()

Important Differences

- "map()" transforms elements and returns a new array.
- "filter()" selects matching elements and returns a new array.
- "find()" returns the first matching element.
- "reduce()" combines elements into one accumulated result.
- "some()" checks whether at least one element matches.
- "every()" checks whether all elements match.

---

💡 Real-World Applications

Array methods are useful in:

- Student management systems
- Shopping cart calculations
- Product filtering
- Search functionality
- Dashboard data processing
- API response handling
- Web application development

---

📈 JavaScript Learning Progress

Day 01  ██████████ 100% ✅
Day 02  ██████████ 100% ✅
Day 03  ██████████ 100% ✅
Day 04  ██████████ 100% ✅
Day 05  ██████████ 100% ✅
Day 06  ██████████ 100% ✅
Day 07  ██████████ 100% ✅
Day 08  ██████████ 100% ✅
Day 09  ██████████ 100% ✅
Day 10  ░░░░░░░░░░   0% ⏳

---

📤 GitHub Commit

After completing Day 09:

git add Day-09/
git commit -m "Complete JavaScript Day 09 array methods"
git push origin main

---

🏁 Day 09 Completed

Today I learned how to work with array methods and process data more efficiently using JavaScript.

Day 09 — Array Methods ✅

Next: Day 10 — Advanced Array Operations and Practical Projects.
