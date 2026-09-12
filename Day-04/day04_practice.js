// JavaScript Learning Journey
// Day 04 - Practice Solutions
// Topic: Loops


// ========================================
// Problem 1 — Numbers 1 to 100
// ========================================

for (let i = 1; i <= 100; i++) {
    console.log(i);
}


// ========================================
// Problem 2 — Even Numbers 1 to 50
// ========================================

for (let i = 1; i <= 50; i++) {

    if (i % 2 === 0) {
        console.log("Even:", i);
    }

}


// ========================================
// Problem 3 — Odd Numbers 1 to 50
// ========================================

for (let i = 1; i <= 50; i++) {

    if (i % 2 !== 0) {
        console.log("Odd:", i);
    }

}


// ========================================
// Problem 4 — Sum of 1 to 100
// ========================================

let sum = 0;

for (let i = 1; i <= 100; i++) {
    sum += i;
}

console.log("Sum:", sum);


// ========================================
// Problem 5 — Multiplication Table
// ========================================

let tableNumber = 8;

for (let i = 1; i <= 10; i++) {
    console.log(`${tableNumber} × ${i} = ${tableNumber * i}`);
}


// ========================================
// Problem 6 — Factorial
// ========================================

let factorialNumber = 5;
let factorial = 1;

for (let i = factorialNumber; i >= 1; i--) {
    factorial *= i;
}

console.log("Factorial:", factorial);


// ========================================
// Problem 7 — Count Digits
// ========================================

let digitNumber = 12345;
let digitCount = 0;
let temp = Math.abs(digitNumber);

if (temp === 0) {
    digitCount = 1;
} else {

    while (temp > 0) {
        temp = Math.floor(temp / 10);
        digitCount++;
    }

}

console.log("Digits:", digitCount);


// ========================================
// Problem 8 — Reverse Number
// ========================================

let reverseNumber = 12345;
let reversed = 0;
let tempNumber = Math.abs(reverseNumber);

while (tempNumber > 0) {

    let digit = tempNumber % 10;

    reversed = reversed * 10 + digit;

    tempNumber = Math.floor(tempNumber / 10);
}

if (reverseNumber < 0) {
    reversed = -reversed;
}

console.log("Reversed Number:", reversed);


// ========================================
// Problem 9 — FizzBuzz
// ========================================

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


// ========================================
// Problem 10 — Prime Number Challenge
// ========================================

let primeNumber = 29;
let isPrime = true;

if (primeNumber <= 1) {
    isPrime = false;
} else {

    for (let i = 2; i < primeNumber; i++) {

        if (primeNumber % i === 0) {
            isPrime = false;
            break;
        }

    }
}

if (isPrime) {
    console.log(`${primeNumber} is a prime number`);
} else {
    console.log(`${primeNumber} is not a prime number`);
}
