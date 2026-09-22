// JavaScript Learning Journey
// Day 06 - Arrays


// ========================================
// 1. Creating an Array
// ========================================

let fruits = ["Apple", "Banana", "Mango"];

console.log("Fruits:", fruits);


// ========================================
// 2. Accessing Elements
// ========================================

console.log("First:", fruits[0]);
console.log("Second:", fruits[1]);
console.log("Third:", fruits[2]);


// ========================================
// 3. Updating an Element
// ========================================

fruits[1] = "Orange";

console.log("Updated:", fruits);


// ========================================
// 4. Array Length
// ========================================

console.log("Length:", fruits.length);
console.log("Last Element:", fruits[fruits.length - 1]);


// ========================================
// 5. push()
// ========================================

fruits.push("Grapes");

console.log("After push:", fruits);


// ========================================
// 6. pop()
// ========================================

fruits.pop();

console.log("After pop:", fruits);


// ========================================
// 7. unshift()
// ========================================

fruits.unshift("Pineapple");

console.log("After unshift:", fruits);


// ========================================
// 8. shift()
// ========================================

fruits.shift();

console.log("After shift:", fruits);


// ========================================
// 9. includes()
// ========================================

console.log("Has Mango:", fruits.includes("Mango"));
console.log("Has Watermelon:", fruits.includes("Watermelon"));


// ========================================
// 10. indexOf()
// ========================================

console.log("Mango Index:", fruits.indexOf("Mango"));


// ========================================
// 11. Loop Through Array
// ========================================

let languages = ["JavaScript", "Python", "Java", "C++"];

for (let i = 0; i < languages.length; i++) {
    console.log("Language:", languages[i]);
}


// ========================================
// 12. Sum of Array
// ========================================

let numbers = [10, 20, 30, 40, 50];

let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

console.log("Sum:", sum);


// ========================================
// 13. Largest Number
// ========================================

let values = [25, 70, 15, 90, 45];

let largest = values[0];

for (let i = 1; i < values.length; i++) {

    if (values[i] > largest) {
        largest = values[i];
    }

}

console.log("Largest:", largest);


// ========================================
// 14. Array + Function
// ========================================

function printArray(array) {

    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }

}

let names = ["Tejas", "Rahul", "Amit"];

printArray(names);
