// JavaScript Learning Journey
// Day 07 - Objects


// ========================================
// 1. Creating an Object
// ========================================

let student = {
    name: "Tejas",
    age: 19,
    branch: "ECE"
};

console.log(student);


// ========================================
// 2. Accessing Properties
// ========================================

console.log("Name:", student.name);
console.log("Age:", student.age);
console.log("Branch:", student.branch);


// ========================================
// 3. Bracket Notation
// ========================================

console.log("Name:", student["name"]);


// ========================================
// 4. Dynamic Property Access
// ========================================

let property = "branch";

console.log("Dynamic:", student[property]);


// ========================================
// 5. Updating Property
// ========================================

student.age = 20;

console.log("Updated Age:", student.age);


// ========================================
// 6. Adding Property
// ========================================

student.city = "Wardha";

console.log("City:", student.city);


// ========================================
// 7. Deleting Property
// ========================================

delete student.city;

console.log(student);


// ========================================
// 8. Object with Array
// ========================================

let developer = {
    name: "Tejas",
    skills: ["JavaScript", "Python", "C++"]
};

console.log("First Skill:", developer.skills[0]);


// ========================================
// 9. Array of Objects
// ========================================

let students = [
    {
        name: "Tejas",
        age: 19
    },
    {
        name: "Rahul",
        age: 20
    },
    {
        name: "Amit",
        age: 19
    }
];

console.log(students[0].name);


// ========================================
// 10. Loop Through Array of Objects
// ========================================

for (let i = 0; i < students.length; i++) {
    console.log(
        `${students[i].name} - ${students[i].age}`
    );
}


// ========================================
// 11. Object Method
// ========================================

let person = {

    name: "Tejas",

    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }

};

person.greet();


// ========================================
// 12. Object.keys()
// ========================================

console.log("Keys:", Object.keys(student));


// ========================================
// 13. Object.values()
// ========================================

console.log("Values:", Object.values(student));


// ========================================
// 14. Object.entries()
// ========================================

console.log("Entries:", Object.entries(student));


// ========================================
// 15. Loop Through Object
// ========================================

for (let [key, value] of Object.entries(student)) {
    console.log(`${key}: ${value}`);
}
