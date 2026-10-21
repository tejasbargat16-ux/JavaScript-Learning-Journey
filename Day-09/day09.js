// JavaScript Learning Journey
// Day 09 - Array Methods

// 1. forEach()
let numbers = [1, 2, 3, 4, 5];

console.log("--- forEach ---");
numbers.forEach(num => console.log(num));

// 2. map()
let doubled = numbers.map(num => num * 2);

console.log("--- map ---");
console.log(doubled);

// 3. filter()
let evenNumbers = numbers.filter(num => num % 2 === 0);

console.log("--- filter ---");
console.log(evenNumbers);

// 4. find()
let firstBigNumber = numbers.find(num => num > 3);

console.log("--- find ---");
console.log(firstBigNumber);

// 5. findIndex()
let position = numbers.findIndex(num => num === 4);

console.log("--- findIndex ---");
console.log(position);

// 6. reduce()
let sum = numbers.reduce((total, num) => total + num, 0);

console.log("--- reduce ---");
console.log(sum);

// 7. some()
console.log("--- some ---");
console.log(numbers.some(num => num > 4));

// 8. every()
console.log("--- every ---");
console.log(numbers.every(num => num > 0));

// 9. Real-world example: Student marks
let students = [
    { name: "Tejas", marks: 85 },
    { name: "Rahul", marks: 32 },
    { name: "Amit", marks: 72 },
    { name: "Sneha", marks: 90 }
];

let passedStudents = students.filter(student => student.marks >= 35);
let studentNames = students.map(student => student.name);
let average = students.reduce((sum, student) => sum + student.marks, 0)
    / students.length;

console.log("Passed students:", passedStudents);
console.log("Student names:", studentNames);
console.log("Average marks:", average);
