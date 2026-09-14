JavaScript Learning Journey — Day 05

Functions

Day 05 of my JavaScript learning journey.

Today I learned how to create reusable blocks of code using functions. I practiced passing data into functions, returning results, using conditions and loops inside functions, and writing modern arrow functions.

---

📚 Topics Covered

- Functions
- Function declarations
- Function calls
- Parameters
- Arguments
- "return"
- Multiple parameters
- Default parameters
- Function expressions
- Arrow functions
- Function scope
- Functions with conditions
- Functions with loops
- Reusable logic

---

1. What is a Function?

A function is a reusable block of code designed to perform a specific task.

function greet() {
    console.log("Hello, JavaScript!");
}

greet();

The function is created first and then called whenever it is needed.

---

2. Parameters and Arguments

Parameters are variables defined in the function.

Arguments are the actual values passed to the function.

function greet(name) {
    console.log(`Hello, ${name}!`);
}

greet("Tejas");

Here:

name  → parameter
"Tejas" → argument

---

3. Multiple Parameters

A function can accept multiple parameters.

function add(a, b) {
    return a + b;
}

console.log(add(10, 20));

Output:

30

---

4. The "return" Statement

"return" sends a value back from the function.

function multiply(a, b) {
    return a * b;
}

let result = multiply(5, 4);

console.log(result);

Output:

20

The returned value can also be stored in a variable or used in another calculation.

---

5. Default Parameters

A default parameter provides a value when an argument is not supplied.

function welcome(name = "Guest") {
    return `Welcome, ${name}!`;
}

console.log(welcome("Tejas"));
console.log(welcome());

Output:

Welcome, Tejas!
Welcome, Guest!

---

6. Function Expression

A function can be assigned to a variable.

const square = function(number) {
    return number * number;
};

console.log(square(5));

---

7. Arrow Functions

Arrow functions provide a shorter syntax for writing functions.

Normal function:

function square(number) {
    return number * number;
}

Arrow function:

const square = number => number * number;

Arrow functions are widely used in modern JavaScript.

---

8. Functions with Conditions

Functions can contain conditional logic.

function checkEvenOdd(number) {

    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }

}

This allows the same logic to be reused with different numbers.

---

9. Functions with Loops

Functions can also contain loops.

function printNumbers(limit) {

    for (let i = 1; i <= limit; i++) {
        console.log(i);
    }

}

printNumbers(5);

This combines the concepts learned on Day 4 with functions.

---

🧪 Practice Problems Completed

#| Problem| Concepts
1| Greeting Function| Parameters + return
2| Addition| Parameters + arithmetic
3| Square| Function + multiplication
4| Maximum Number| Function + conditions
5| Even/Odd| Function + "%" + condition
6| Factorial| Function + loop
7| Prime Checker| Function + loop + condition
8| Calculator| Function + multiple conditions
9| Number Analyzer| Function + conditions

---

🧠 Important Concepts

Function

function → reusable block of code

Parameter

function definition → input variable

Argument

function call → actual value

Return

return → sends a value back

---

📁 Files

Day-05/
│
├── day05.js
├── day05_practice.js
└── README.md

"day05.js"

Contains the concepts and examples learned during Day 05.

"day05_practice.js"

Contains solutions to the Day 05 practice problems.

---

▶️ How to Run

Check Node.js:

node -v

Run the lesson:

node day05.js

Run the practice solutions:

node day05_practice.js

---

📈 Learning Progress

- [x] Day 01 — JavaScript Basics
- [x] Day 02 — Operators & Type Conversion
- [x] Day 03 — Conditional Statements
- [x] Day 04 — Loops
- [x] Day 05 — Functions
- [ ] Day 06 — Arrays
- [ ] Day 07 — Objects
- [ ] Day 08 — Strings
- [ ] Day 09 — Array Methods
- [ ] Day 10 — DOM Basics
- [ ] Day 11 — Events
- [ ] Day 12 — Forms
- [ ] Day 13 — Local Storage
- [ ] Day 14 — Asynchronous JavaScript
- [ ] Day 15 — Fetch API
- [ ] Day 16+ — JavaScript Projects

---

🎯 Day 05 Key Takeaway

Today I learned how to turn repeated logic into reusable functions.

The main concepts I practiced were:

function
parameters
arguments
return
default parameters
function expressions
arrow functions

I also combined functions with conditions and loops to solve practical programming problems.

---

🚀 GitHub Commit

After completing Day 05:

git add Day-05/
git commit -m "Complete JavaScript Day 05 functions"
git push origin main

Day 05 — Completed ✅

JavaScript Learning Journey 🚀
