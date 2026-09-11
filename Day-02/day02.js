// JavaScript Learning Journey
// Day 02 - Operators, Input & Type Conversion


// ========================================
// 1. Arithmetic Operators
// ========================================

let a = 20;
let b = 6;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Remainder:", a % b);
console.log("Power:", a ** 2);


// ========================================
// 2. Assignment Operators
// ========================================

let score = 10;

score += 5;
console.log("After +=:", score);

score -= 3;
console.log("After -=:", score);

score *= 2;
console.log("After *=:", score);

score /= 4;
console.log("After /=:", score);


// ========================================
// 3. Comparison Operators
// ========================================

let x = 10;
let y = 20;

console.log("x > y:", x > y);
console.log("x < y:", x < y);
console.log("x >= y:", x >= y);
console.log("x <= y:", x <= y);
console.log("x === y:", x === y);
console.log("x !== y:", x !== y);


// ========================================
// 4. Logical Operators
// ========================================

let age = 20;

console.log("AND:", age >= 18 && age <= 25);
console.log("OR:", age === 18 || age === 20);
console.log("NOT:", !(age >= 18));


// ========================================
// 5. Type Conversion
// ========================================

let textNumber = "100";

let convertedNumber = Number(textNumber);

console.log("Original:", textNumber);
console.log("Converted:", convertedNumber);
console.log("Type:", typeof convertedNumber);


// ========================================
// 6. Template Literal
// ========================================

let name = "Tejas";
let city = "Wardha";

console.log(`My name is ${name} and I live in ${city}.`);
