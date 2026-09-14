// JavaScript Learning Journey
// Day 05 - Functions


// ========================================
// 1. Basic Function
// ========================================

function greet() {
    console.log("Hello, JavaScript!");
}

greet();


// ========================================
// 2. Function with Parameter
// ========================================

function sayHello(name) {
    console.log(`Hello, ${name}!`);
}

sayHello("Tejas");
sayHello("Developer");


// ========================================
// 3. Multiple Parameters
// ========================================

function add(a, b) {
    return a + b;
}

console.log("Addition:", add(10, 20));


// ========================================
// 4. Subtraction
// ========================================

function subtract(a, b) {
    return a - b;
}

console.log("Subtraction:", subtract(20, 5));


// ========================================
// 5. Multiplication
// ========================================

function multiply(a, b) {
    return a * b;
}

console.log("Multiplication:", multiply(10, 5));


// ========================================
// 6. Division
// ========================================

function divide(a, b) {

    if (b === 0) {
        return "Cannot divide by zero";
    }

    return a / b;
}

console.log("Division:", divide(20, 4));


// ========================================
// 7. Default Parameter
// ========================================

function welcome(name = "Guest") {
    return `Welcome, ${name}!`;
}

console.log(welcome("Tejas"));
console.log(welcome());


// ========================================
// 8. Function Expression
// ========================================

const square = function(number) {
    return number * number;
};

console.log("Square:", square(6));


// ========================================
// 9. Arrow Function
// ========================================

const cube = number => number * number * number;

console.log("Cube:", cube(3));


// ========================================
// 10. Function + Condition
// ========================================

function checkEvenOdd(number) {

    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }

}

console.log(checkEvenOdd(10));
console.log(checkEvenOdd(7));


// ========================================
// 11. Function + Loop
// ========================================

function printNumbers(limit) {

    for (let i = 1; i <= limit; i++) {
        console.log(i);
    }

}

printNumbers(5);


// ========================================
// 12. Function to Calculate Percentage
// ========================================

function calculatePercentage(obtained, total) {

    if (total <= 0) {
        return "Invalid total marks";
    }

    return (obtained / total) * 100;
}

console.log(
    "Percentage:",
    calculatePercentage(425, 500)
);
