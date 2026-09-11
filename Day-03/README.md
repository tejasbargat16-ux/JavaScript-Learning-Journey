JavaScript Learning Journey — Day 03

Conditional Statements

Day 03 of my JavaScript learning journey.

Today I learned how to make JavaScript programs take decisions based on different conditions.

---

📚 Topics Covered

- "if"
- "else"
- "else if"
- Nested "if"
- Comparison operators
- Logical operators
- Conditional decision-making
- Ternary operator
- Practical problem solving

---

1. "if" Statement

The "if" statement executes a block of code when a condition is true.

let age = 20;

if (age >= 18) {
    console.log("You are an adult.");
}

---

2. "if...else"

"if...else" is used when there are two possible outcomes.

let number = 10;

if (number % 2 === 0) {
    console.log("Even number");
} else {
    console.log("Odd number");
}

---

3. "else if"

"else if" allows multiple conditions to be checked.

let marks = 75;

if (marks >= 90) {
    console.log("A+");
} else if (marks >= 80) {
    console.log("A");
} else if (marks >= 70) {
    console.log("B");
} else {
    console.log("Needs improvement");
}

The conditions are checked from top to bottom.

---

4. Logical Operators

AND — "&&"

Both conditions must be true.

if (age >= 18 && hasID === true) {
    console.log("Access granted");
}

OR — "||"

At least one condition must be true.

if (day === "Saturday" || day === "Sunday") {
    console.log("Weekend");
}

NOT — "!"

Reverses a boolean condition.

let isStudent = true;

console.log(!isStudent);

---

5. Nested "if"

An "if" statement can be placed inside another "if".

if (age >= 18) {

    if (hasTicket === true) {
        console.log("Entry allowed");
    }

}

Nested conditions are useful when one decision depends on another decision.

---

6. Ternary Operator

The ternary operator is a shorter way to write a simple "if...else".

let age = 20;

let status = age >= 18 ? "Adult" : "Minor";

console.log(status);

Syntax:

condition ? valueIfTrue : valueIfFalse

---

🧪 Practice Problems

During Day 03, I solved:

1. Positive / Negative / Zero
2. Even / Odd number
3. Largest of three numbers
4. Grade calculator
5. Voting eligibility
6. Basic login system
7. Mini ATM
8. Electricity bill challenge

---

⚡ Day 03 Electricity Bill Challenge

For the electricity bill challenge, I used slab-based calculation:

0–100 units     → ₹5 per unit
101–200 units   → ₹7 per unit
201+ units      → ₹10 per unit

For 250 units:

First 100 units   = 100 × ₹5
Next 100 units    = 100 × ₹7
Remaining 50      = 50 × ₹10

Total = ₹2200

---

📁 Files

Day-03/
│
├── day03.js
├── day03_practice.js
└── README.md

"day03.js"

Contains examples and concepts learned during Day 03.

"day03_practice.js"

Contains solutions to the Day 03 practice problems.

---

▶️ How to Run

Check Node.js:

node -v

Run the lesson:

node day03.js

Run the practice solutions:

node day03_practice.js

---

📈 Learning Progress

- [x] Day 01 — JavaScript Basics
- [x] Day 02 — Operators & Type Conversion
- [x] Day 03 — Conditional Statements
- [ ] Day 04 — Loops
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

🧠 Day 03 Key Takeaway

Today I learned how to make programs take decisions using conditions.

The most important concepts were:

if
else if
else
&&
||
!
===

I also practiced applying conditional logic to real-world problems such as grades, authentication, ATM transactions, and electricity billing.

---

🚀 GitHub Commit

After completing Day 03:

git add Day-03/
git commit -m "Complete JavaScript Day 03 conditional statements"
git push origin main

Day 03 — Completed ✅

"JavaScript Learning Journey"
