// JavaScript Learning Journey
// Day 03 - Practice Solutions
// Topic: Conditional Statements


// ========================================
// Problem 1 — Positive, Negative or Zero
// ========================================

let number1 = -10;

if (number1 > 0) {
    console.log("Positive number");
} else if (number1 < 0) {
    console.log("Negative number");
} else {
    console.log("Zero");
}


// ========================================
// Problem 2 — Even or Odd
// ========================================

let number2 = 27;

if (number2 % 2 === 0) {
    console.log("Even number");
} else {
    console.log("Odd number");
}


// ========================================
// Problem 3 — Largest Number
// ========================================

let a = 25;
let b = 40;
let c = 15;

if (a >= b && a >= c) {
    console.log("Largest number:", a);
} else if (b >= a && b >= c) {
    console.log("Largest number:", b);
} else {
    console.log("Largest number:", c);
}


// ========================================
// Problem 4 — Grade Calculator
// ========================================

let marks = 82;

if (marks >= 90 && marks <= 100) {
    console.log("Grade: A+");
} else if (marks >= 80 && marks < 90) {
    console.log("Grade: A");
} else if (marks >= 70 && marks < 80) {
    console.log("Grade: B");
} else if (marks >= 60 && marks < 70) {
    console.log("Grade: C");
} else if (marks >= 40 && marks < 60) {
    console.log("Grade: D");
} else if (marks >= 0 && marks < 40) {
    console.log("Grade: Fail");
} else {
    console.log("Invalid marks");
}


// ========================================
// Problem 5 — Voting Eligibility
// ========================================

let votingAge = 17;

if (votingAge >= 18) {
    console.log("Eligible to vote");
} else {
    console.log("Not eligible to vote");
}


// ========================================
// Problem 6 — Login System
// ========================================

let username = "tejas";
let password = "12345";

let correctUsername = "tejas";
let correctPassword = "12345";

if (username === correctUsername && password === correctPassword) {
    console.log("Login successful");
} else {
    console.log("Invalid username or password");
}


// ========================================
// Problem 7 — Mini ATM
// ========================================

let balance = 10000;
let withdrawal = 3500;

if (withdrawal <= 0) {
    console.log("Invalid amount");
} else if (withdrawal > balance) {
    console.log("Insufficient balance");
} else {
    balance = balance - withdrawal;

    console.log("Withdrawal successful");
    console.log("Remaining balance:", balance);
}


// ========================================
// Day 03 Challenge — Electricity Bill
// ========================================

let units = 250;
let bill = 0;

if (units <= 100 && units >= 0) {

    bill = units * 5;

} else if (units <= 200) {

    bill = (100 * 5) + ((units - 100) * 7);

} else if (units > 200) {

    bill = (100 * 5) +
           (100 * 7) +
           ((units - 200) * 10);

} else {

    console.log("Invalid units");

}

if (units >= 0) {
    console.log("Electricity Units:", units);
    console.log("Electricity Bill: ₹" + bill);
}
