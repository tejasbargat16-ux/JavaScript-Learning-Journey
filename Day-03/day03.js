// JavaScript Learning Journey
// Day 03 - Conditional Statements


// ========================================
// 1. if Statement
// ========================================

let age = 20;

if (age >= 18) {
    console.log("You are an adult.");
}


// ========================================
// 2. if...else
// ========================================

let number = 7;

if (number % 2 === 0) {
    console.log("Even number");
} else {
    console.log("Odd number");
}


// ========================================
// 3. else if
// ========================================

let marks = 75;

if (marks >= 90) {
    console.log("Grade A+");
} else if (marks >= 80) {
    console.log("Grade A");
} else if (marks >= 70) {
    console.log("Grade B");
} else if (marks >= 60) {
    console.log("Grade C");
} else if (marks >= 40) {
    console.log("Grade D");
} else {
    console.log("Fail");
}


// ========================================
// 4. Logical AND
// ========================================

let userAge = 21;
let hasID = true;

if (userAge >= 18 && hasID === true) {
    console.log("Access granted.");
} else {
    console.log("Access denied.");
}


// ========================================
// 5. Logical OR
// ========================================

let day = "Sunday";

if (day === "Saturday" || day === "Sunday") {
    console.log("It's the weekend!");
} else {
    console.log("It's a weekday.");
}


// ========================================
// 6. Nested if
// ========================================

let balance = 5000;
let withdrawal = 2000;

if (withdrawal > 0) {

    if (withdrawal <= balance) {
        console.log("Withdrawal successful.");
    } else {
        console.log("Insufficient balance.");
    }

} else {
    console.log("Invalid withdrawal amount.");
}


// ========================================
// 7. Ternary Operator
// ========================================

let studentMarks = 65;

let result = studentMarks >= 40 ? "Pass" : "Fail";

console.log("Result:", result);
