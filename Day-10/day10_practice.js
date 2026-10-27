// Day 10 - Practice Solutions
// Advanced Array Operations

// Problem 1: Sort in ascending order
let numbers1 = [45, 12, 89, 3, 27];

numbers1.sort((a, b) => a - b);

console.log("Problem 1:", numbers1);
// [3, 12, 27, 45, 89]


// Problem 2: Sort in descending order
let numbers2 = [45, 12, 89, 3, 27];

numbers2.sort((a, b) => b - a);

console.log("Problem 2:", numbers2);
// [89, 45, 27, 12, 3]


// Problem 3: Reverse an array
let days = ["Monday", "Tuesday", "Wednesday", "Thursday"];

days.reverse();

console.log("Problem 3:", days);
// ["Thursday", "Wednesday", "Tuesday", "Monday"]


// Problem 4: Extract elements using slice()
let numbers4 = [10, 20, 30, 40, 50];

let result4 = numbers4.slice(1, 4);

console.log("Problem 4:", result4);
// [20, 30, 40]


// Problem 5: Remove Java using splice()
let languages = ["C", "Java", "Python", "JavaScript"];

languages.splice(1, 1);

console.log("Problem 5:", languages);
// ["C", "Python", "JavaScript"]


// Problem 6: Insert React using splice()
let skills = ["JavaScript", "Node.js"];

skills.splice(1, 0, "React");

console.log("Problem 6:", skills);
// ["JavaScript", "React", "Node.js"]


// Problem 7: Combine arrays using spread operator
let a = [1, 2, 3];
let b = [4, 5, 6];

let combined = [...a, ...b];

console.log("Problem 7:", combined);
// [1, 2, 3, 4, 5, 6]