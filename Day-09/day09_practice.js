
 // JavaScript Learning Journey
 // Day 09 - Practice Solutions
 // Topic: Array Methods

 // ========================================
 // Problem 1 — Print All Numbers
 // Method: forEach()
 // ========================================

 let numbers1 = [10, 20, 30, 40];

 numbers1.forEach(function(num) {
     console.log(num);
 });

 // Expected Output:
 // 10
 // 20
 // 30
 // 40


 // ========================================
 // Problem 2 — Square Every Number
 // Method: map()
 // ========================================

 let numbers2 = [1, 2, 3, 4, 5];

 let squares = numbers2.map(num => num * num);

 console.log("Squares:", squares);

 // Expected Output:
 // Squares: [1, 4, 9, 16, 25]


 // ========================================
 // Problem 3 — Filter Even Numbers
 // Method: filter()
 // ========================================

 let numbers3 = [3, 8, 11, 14, 20, 25];

 let evenNumbers = numbers3.filter(num => num % 2 === 0);

 console.log("Even Numbers:", evenNumbers);

 // Expected Output:
 // Even Numbers: [8, 14, 20]


 // ========================================
 // Problem 4 — Find the First Adult
 // Method: find()
 // ========================================

 let ages = [12, 16, 19, 21, 15];

 let firstAdult = ages.find(age => age >= 18);

 console.log("First Adult:", firstAdult);

 // Expected Output:
 // First Adult: 19


 // ========================================
 // Problem 5 — Find an Index
 // Method: findIndex()
 // ========================================

 let numbers5 = [10, 20, 50, 80];

 let index = numbers5.findIndex(num => num === 50);

 console.log("Index of 50:", index);

 // Expected Output:
 // Index of 50: 2


 // ========================================
 // Problem 6 — Calculate a Total
 // Method: reduce()
 // ========================================

 let prices = [120, 250, 80, 150];

 let total = prices.reduce((sum, price) => {
     return sum + price;
 }, 0);

 console.log("Total:", total);

 // Expected Output:
 // Total: 600


 // ========================================
 // Problem 7 — Check for Failures
 // Method: some()
 // ========================================

 let marks7 = [70, 45, 28, 80];

 let hasFailure = marks7.some(mark => mark < 35);

 console.log("Any Failure:", hasFailure);

 // Expected Output:
 // Any Failure: true


 // ========================================
 // Problem 8 — Check All Marks
 // Method: every()
 // ========================================

 let marks8 = [45, 60, 75, 90];

 let allPassed = marks8.every(mark => mark >= 35);

 console.log("All Passed:", allPassed);

 // Expected Output:
 // All Passed: true


 // ========================================
 // Problem 9 — Student Analyzer
 // Methods: map(), filter(), reduce()
 // ========================================

 let students = [
     { name: "Tejas", marks: 85 },
     { name: "Rahul", marks: 32 },
     { name: "Amit", marks: 72 },
     { name: "Sneha", marks: 90 }
 ];

 // Step 1: Get all student names
 let studentNames = students.map(student => student.name);

 console.log("Student Names:", studentNames);

 // Step 2: Get students who passed
 // Passing marks = 35
 let passedStudents = students.filter(student => student.marks >= 35);

 console.log("Passed Students:", passedStudents);

 // Step 3: Calculate total marks
 let totalMarks = students.reduce((sum, student) => {
     return sum + student.marks;
 }, 0);

 console.log("Total Marks:", totalMarks);

 // Step 4: Calculate average marks
 let averageMarks = totalMarks / students.length;

 console.log("Average Marks:", averageMarks);

 // Expected Output:
 // Student Names: [ 'Tejas', 'Rahul', 'Amit', 'Sneha' ]
 // Passed Students: [
 //   { name: 'Tejas', marks: 85 },
 //   { name: 'Amit', marks: 72 },
 //   { name: 'Sneha', marks: 90 }
 // ]
 // Total Marks: 279
 // Average Marks: 69.75

