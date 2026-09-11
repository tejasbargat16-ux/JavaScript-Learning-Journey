JavaScript Learning Journey — Day 02

Operators, Comparisons, Logical Operators & Type Conversion

Day 02 of my JavaScript learning journey.

Today I learned how JavaScript handles calculations, comparisons, logical conditions, and basic type conversion. I also practiced writing small programs using these concepts.

---

📚 Topics Covered

- Arithmetic Operators
- Assignment Operators
- Comparison Operators
- Logical Operators
- Strict Equality
- Type Conversion
- "Number()"
- "typeof"
- Template Literals
- Basic calculations

---

🔢 1. Arithmetic Operators

Arithmetic operators are used to perform mathematical calculations.

let a = 20;
let b = 6;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** 2);

Operators

Operator| Meaning
"+"| Addition
"-"| Subtraction
"*"| Multiplication
"/"| Division
"%"| Remainder
"**"| Exponentiation

---

📝 2. Assignment Operators

Assignment operators make it easier to update variable values.

let score = 10;

score += 5;
score -= 3;
score *= 2;
score /= 4;

Common assignment operators:

= 
+=
-=
*=
/=

---

⚖️ 3. Comparison Operators

Comparison operators compare two values and return either "true" or "false".

let a = 10;
let b = 20;

console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);
console.log(a === b);
console.log(a !== b);

Important Operators

Operator| Meaning
">"| Greater than
"<"| Less than
">="| Greater than or equal
"<="| Less than or equal
"==="| Strict equality
"!=="| Strict inequality

"==" vs "==="

I learned that "===" checks both the value and the data type.

5 == "5";   // true
5 === "5";  // false

For modern JavaScript, I will generally prefer "===" when I want strict comparison.

---

🧠 4. Logical Operators

Logical operators are used to combine or reverse conditions.

AND — "&&"

Both conditions must be true.

let age = 20;

console.log(age >= 18 && age <= 25);

OR — "||"

At least one condition must be true.

let age = 20;

console.log(age === 18 || age === 20);

NOT — "!"

Reverses a boolean value.

let isStudent = true;

console.log(!isStudent);

---

🔄 5. Type Conversion

JavaScript allows values to be converted from one data type to another.

For example:

let marks = "85";

let convertedMarks = Number(marks);

console.log(convertedMarks);
console.log(typeof convertedMarks);

Output:

85
number

"Number()"

Converts a value into a number when possible.

let value = "100";

console.log(Number(value));

---

🔍 6. "typeof"

The "typeof" operator is used to check the data type of a value.

let name = "Tejas";
let age = 18;
let isStudent = true;

console.log(typeof name);
console.log(typeof age);
console.log(typeof isStudent);

Output:

string
number
boolean

---

✨ 7. Template Literals

Template literals make it easier to include variables inside strings.

let name = "Tejas";
let city = "Wardha";

console.log(`My name is ${name} and I live in ${city}.`);

Template literals use backticks:

`

Variables can be inserted using:

${variable}

---

🧪 Practice Problems

During Day 02, I practiced:

1. Building a basic calculator
2. Comparing values
3. Calculating rectangle area and perimeter
4. Calculating a shopping bill
5. Converting a string into a number
6. Calculating percentage

---

📁 Files

Day-02/
│
├── day02.js
├── day02_practice.js
└── README.md

"day02.js"

Contains the concepts and examples learned during Day 02.

"day02_practice.js"

Contains solutions to the Day 02 practice problems.

---

▶️ How to Run

Make sure Node.js is installed:

node -v

Run the main lesson:

node day02.js

Run the practice solutions:

node day02_practice.js

---

📈 Progress

- [x] Day 01 — JavaScript Basics
- [x] Day 02 — Operators & Type Conversion
- [ ] Day 03 — Conditional Statements
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

🎯 Day 02 Takeaway

Today I became more comfortable with JavaScript operators, comparisons, logical expressions, and type conversion.

The main goal is not just to memorize syntax, but to understand how and why each operator is used.

---

Learning JavaScript one day at a time. 🚀

"Day 02 / JavaScript Learning Journey"
