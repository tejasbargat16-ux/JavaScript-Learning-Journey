JavaScript Learning Journey — Day 04

Loops

Day 04 of my JavaScript learning journey.

Today I learned how loops can be used to execute a block of code repeatedly. I also practiced using loops with conditions to solve common programming problems.

---

📚 Topics Covered

- "for" loop
- "while" loop
- "do...while" loop
- Increment operator "++"
- Decrement operator "--"
- "break"
- "continue"
- Nested loops
- Loop conditions
- Number patterns and calculations
- Prime number logic
- FizzBuzz

---

🔁 1. "for" Loop

A "for" loop is useful when the number of iterations is known or can be expressed clearly.

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

Output:

1
2
3
4
5

Structure

for (initialization; condition; update) {
    // code
}

---

🔄 2. "while" Loop

A "while" loop continues running while its condition is true.

let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}

The loop condition must eventually become false to avoid an infinite loop.

---

🔂 3. "do...while" Loop

A "do...while" loop executes its code at least once before checking the condition.

let i = 1;

do {
    console.log(i);
    i++;
} while (i <= 5);

---

➕ 4. Increment and Decrement

Increment

i++;

is equivalent to:

i = i + 1;

Decrement

i--;

is equivalent to:

i = i - 1;

---

🛑 5. "break"

"break" immediately terminates the loop.

for (let i = 1; i <= 10; i++) {

    if (i === 5) {
        break;
    }

    console.log(i);
}

Output:

1
2
3
4

---

⏭️ 6. "continue"

"continue" skips the current iteration and moves to the next iteration.

for (let i = 1; i <= 5; i++) {

    if (i === 3) {
        continue;
    }

    console.log(i);
}

Output:

1
2
4
5

---

🔢 7. Multiplication Table

Loops make repetitive calculations simple.

let number = 8;

for (let i = 1; i <= 10; i++) {
    console.log(`${number} × ${i} = ${number * i}`);
}

---

🧮 8. Factorial

Factorial of a positive integer is the product of all positive integers from that number down to 1.

For example:

5! = 5 × 4 × 3 × 2 × 1
5! = 120

JavaScript:

let number = 5;
let factorial = 1;

for (let i = number; i >= 1; i--) {
    factorial *= i;
}

console.log(factorial);

---

🔢 9. Counting Digits

A number can be repeatedly divided by 10 to remove its last digit.

let number = 12345;
let count = 0;

while (number > 0) {
    number = Math.floor(number / 10);
    count++;
}

console.log("Digits:", count);

Output:

Digits: 5

---

🔄 10. Reversing a Number

The remainder operator "%" can be used to extract the last digit.

let number = 12345;
let reversed = 0;

while (number > 0) {

    let digit = number % 10;

    reversed = reversed * 10 + digit;

    number = Math.floor(number / 10);
}

console.log(reversed);

Output:

54321

---

🚀 11. FizzBuzz

FizzBuzz is a common programming exercise.

Rules:

Divisible by 3 and 5 → FizzBuzz
Divisible by 3        → Fizz
Divisible by 5        → Buzz
Otherwise             → Number

Example:

for (let i = 1; i <= 50; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

---

🧠 12. Prime Number

A prime number is greater than 1 and has no positive divisors other than 1 and itself.

Example:

29 → Prime
30 → Not Prime

Basic logic:

let number = 29;
let isPrime = true;

for (let i = 2; i < number; i++) {

    if (number % i === 0) {
        isPrime = false;
        break;
    }
}

---

🧪 Practice Problems Completed

#| Problem| Concept
1| Numbers 1–100| "for" loop
2| Even Numbers| Loop + condition
3| Odd Numbers| Loop + condition
4| Sum 1–100| Accumulator
5| Multiplication Table| Loop + template literal
6| Factorial| Loop + multiplication
7| Count Digits| "while" loop
8| Reverse Number| "%" + "Math.floor()"
9| FizzBuzz| Conditions + loop
10| Prime Number| Loop + "break"

---

📁 Files

Day-04/
│
├── day04.js
├── day04_practice.js
└── README.md

"day04.js"

Contains the concepts and examples learned during Day 04.

"day04_practice.js"

Contains the solutions to the Day 04 practice problems.

---

▶️ How to Run

Check Node.js:

node -v

Run the lesson:

node day04.js

Run the practice solutions:

node day04_practice.js

---

📈 Learning Progress

- [x] Day 01 — JavaScript Basics
- [x] Day 02 — Operators & Type Conversion
- [x] Day 03 — Conditional Statements
- [x] Day 04 — Loops
- [ ] Day 05 — Functions
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

🎯 Day 04 Key Takeaway

Today I learned how to automate repetitive tasks using loops.

The most important concepts I practiced were:

for
while
do...while
break
continue
++
--

I also applied loops to practical programming problems such as factorials, number reversal, digit counting, FizzBuzz, and prime-number checking.

---

🚀 GitHub Commit

After completing Day 04:

git add Day-04/
git commit -m "Complete JavaScript Day 04 loops"
git push origin main

Day 04 — Completed ✅

JavaScript Learning Journey 🚀
