let students = [
    { name: "Tejas", marks: 85 },
    { name: "Rahul", marks: 32 },
    { name: "Amit", marks: 72 },
    { name: "Sneha", marks: 90 },
    { name: "Priya", marks: 65 }
];

// 1. Sort students by marks, highest first
let sortedStudents = [...students].sort((a, b) => b.marks - a.marks);

// 2. Get the top 3 students
let topThree = sortedStudents.slice(0, 3);

// 3. Get students who passed (35 or more)
let passedStudents = students.filter(student => student.marks >= 35);

// 4. Print results
console.log("All Students - Rank Wise:");
console.log(sortedStudents);

console.log("Top 3 Students:");
console.log(topThree);

console.log("Passed Students:");
console.log(passedStudents);