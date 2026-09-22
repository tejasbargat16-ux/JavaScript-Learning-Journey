// JavaScript Learning Journey
// Day 06 - Practice Solutions
// Topic: Arrays


// ========================================
// Problem 1 — Student Names
// ========================================

let students = ["Tejas", "Rahul", "Amit", "Rohit", "Sneha"];

for (let i = 0; i < students.length; i++) {
    console.log("Student:", students[i]);
}


// ========================================
// Problem 2 — Array Sum
// ========================================

let numbers1 = [10, 20, 30, 40, 50];

let sum = 0;

for (let i = 0; i < numbers1.length; i++) {
    sum += numbers1[i];
}

console.log("Sum:", sum);


// ========================================
// Problem 3 — Find Largest
// ========================================

let numbers2 = [25, 67, 12, 89, 45];

let largest = numbers2[0];

for (let i = 1; i < numbers2.length; i++) {

    if (numbers2[i] > largest) {
        largest = numbers2[i];
    }

}

console.log("Largest:", largest);


// ========================================
// Problem 4 — Find Smallest
// ========================================

let numbers3 = [25, 67, 12, 89, 45];

let smallest = numbers3[0];

for (let i = 1; i < numbers3.length; i++) {

    if (numbers3[i] < smallest) {
        smallest = numbers3[i];
    }

}

console.log("Smallest:", smallest);


// ========================================
// Problem 5 — Count Even Numbers
// ========================================

let numbers4 = [10, 15, 22, 31, 44, 50];

let evenCount = 0;

for (let i = 0; i < numbers4.length; i++) {

    if (numbers4[i] % 2 === 0) {
        evenCount++;
    }

}

console.log("Even numbers:", evenCount);


// ========================================
// Problem 6 — Search an Element
// ========================================

let languages = [
    "C",
    "C++",
    "Java",
    "Python",
    "JavaScript"
];

if (languages.includes("JavaScript")) {
    console.log("JavaScript found");
} else {
    console.log("JavaScript not found");
}


// ========================================
// Problem 7 — Reverse Array
// ========================================

let numbers5 = [1, 2, 3, 4, 5];

console.log("Reversed:");

for (let i = numbers5.length - 1; i >= 0; i--) {
    console.log(numbers5[i]);
}


// ========================================
// Problem 8 — Array Average
// ========================================

let marks = [75, 80, 65, 90, 85];

let marksSum = 0;

for (let i = 0; i < marks.length; i++) {
    marksSum += marks[i];
}

let average = marksSum / marks.length;

console.log("Average:", average);


// ========================================
// Problem 9 — Remove & Add
// ========================================

let fruits = ["Apple", "Banana", "Mango"];

// 1. Add Orange at the end
fruits.push("Orange");

// 2. Remove the last element
fruits.pop();

// 3. Add Grapes at the beginning
fruits.unshift("Grapes");

// 4. Remove the first element
fruits.shift();

// 5. Print final array
console.log("Final Fruits:", fruits);


// ========================================
// Problem 10 — Second Largest Challenge
// ========================================

let numbers6 = [10, 45, 23, 89, 67, 34];

let largestNumber = -Infinity;
let secondLargest = -Infinity;

for (let i = 0; i < numbers6.length; i++) {

    let current = numbers6[i];

    if (current > largestNumber) {
        secondLargest = largestNumber;
        largestNumber = current;

    } else if (
        current > secondLargest &&
        current !== largestNumber
    ) {
        secondLargest = current;
    }
}

console.log("Largest:", largestNumber);
console.log("Second Largest:", secondLargest);
