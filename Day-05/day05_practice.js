// JavaScript Learning Journey
// Day 05 - Practice Solutions
// Topic: Functions


// ========================================
// Problem 1 — Greeting Function
// ========================================

function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet("Tejas"));


// ========================================
// Problem 2 — Addition Function
// ========================================

function add(a, b) {
    return a + b;
}

console.log("Addition:", add(15, 25));


// ========================================
// Problem 3 — Square Function
// ========================================

function square(number) {
    return number * number;
}

console.log("Square:", square(8));


// ========================================
// Problem 4 — Maximum Number
// ========================================

function findMax(a, b) {

    if (a > b) {
        return a;
    } else {
        return b;
    }

}

console.log("Maximum:", findMax(50, 30));


// ========================================
// Problem 5 — Even / Odd Function
// ========================================

function checkEvenOdd(number) {

    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }

}

console.log("12:", checkEvenOdd(12));
console.log("7:", checkEvenOdd(7));


// ========================================
// Problem 6 — Factorial Function
// ========================================

function factorial(number) {

    if (number < 0) {
        return "Factorial is not defined for negative numbers";
    }

    let result = 1;

    for (let i = number; i >= 1; i--) {
        result *= i;
    }

    return result;
}

console.log("Factorial:", factorial(5));


// ========================================
// Problem 7 — Prime Checker
// ========================================

function isPrime(number) {

    if (number <= 1) {
        return false;
    }

    for (let i = 2; i < number; i++) {

        if (number % i === 0) {
            return false;
        }

    }

    return true;
}

console.log("29 is prime:", isPrime(29));
console.log("20 is prime:", isPrime(20));


// ========================================
// Problem 8 — Calculator Function
// ========================================

function calculate(a, b, operator) {

    if (operator === "+") {
        return a + b;
    } else if (operator === "-") {
        return a - b;
    } else if (operator === "*") {
        return a * b;
    } else if (operator === "/") {

        if (b === 0) {
            return "Cannot divide by zero";
        }

        return a / b;

    } else {
        return "Invalid operator";
    }
}

console.log("Addition:", calculate(10, 5, "+"));
console.log("Subtraction:", calculate(10, 5, "-"));
console.log("Multiplication:", calculate(10, 5, "*"));
console.log("Division:", calculate(10, 5, "/"));
console.log("Invalid:", calculate(10, 5, "%"));


// ========================================
// Problem 9 — Number Analyzer Challenge
// ========================================

function analyzeNumber(number) {

    if (number === 0) {
        return "Zero";
    }

    let sign;

    if (number > 0) {
        sign = "Positive";
    } else {
        sign = "Negative";
    }

    let type;

    if (number % 2 === 0) {
        type = "Even";
    } else {
        type = "Odd";
    }

    return `${sign} and ${type}`;
}

console.log("10:", analyzeNumber(10));
console.log("-7:", analyzeNumber(-7));
console.log("0:", analyzeNumber(0));
