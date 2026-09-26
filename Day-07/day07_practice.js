// JavaScript Learning Journey
// Day 07 - Practice Solutions
// Topic: Objects


// ========================================
// Problem 1 — Student Object
// ========================================

let student = {
    name: "Tejas",
    age: 19,
    branch: "ECE",
    college: "TGPCET"
};

console.log("Name:", student.name);
console.log("Age:", student.age);
console.log("Branch:", student.branch);
console.log("College:", student.college);


// ========================================
// Problem 2 — Update Object
// ========================================

// Update age
student.age = 20;

// Add city
student.city = "Wardha";

// Add skills
student.skills = ["JavaScript", "Python", "C++"];

console.log("Updated Student:", student);


// ========================================
// Problem 3 — Product Object
// ========================================

let product = {
    name: "Laptop",
    price: 50000,
    quantity: 2
};

let total = product.price * product.quantity;

console.log("Product:", product.name);
console.log("Total:", total);


// ========================================
// Problem 4 — Array of Students
// ========================================

let students = [
    {
        name: "Tejas",
        marks: 85
    },
    {
        name: "Rahul",
        marks: 92
    },
    {
        name: "Amit",
        marks: 78
    }
];

for (let i = 0; i < students.length; i++) {
    console.log(
        `${students[i].name} - ${students[i].marks}`
    );
}


// ========================================
// Problem 5 — Find Highest Marks
// ========================================

let highestStudent = students[0];

for (let i = 1; i < students.length; i++) {

    if (students[i].marks > highestStudent.marks) {
        highestStudent = students[i];
    }

}

console.log("Top Student:", highestStudent.name);
console.log("Marks:", highestStudent.marks);


// ========================================
// Problem 6 — Object Method
// ========================================

let person = {

    name: "Tejas",
    age: 19,

    greet: function() {
        console.log(`Hello, my name is ${this.name}.`);
    }

};

person.greet();


// ========================================
// Problem 7 — Count Properties
// ========================================

let car = {
    brand: "Toyota",
    model: "Camry",
    year: 2025,
    color: "Black"
};

let propertyCount = Object.keys(car).length;

console.log("Properties:", propertyCount);


// ========================================
// Problem 8 — Search Student
// ========================================

let studentList = [
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

let searchName = "Rahul";
let foundStudent = null;

for (let i = 0; i < studentList.length; i++) {

    if (studentList[i].name === searchName) {
        foundStudent = studentList[i];
        break;
    }

}

if (foundStudent !== null) {
    console.log(
        `${searchName}'s age: ${foundStudent.age}`
    );
} else {
    console.log("Student not found");
}


// ========================================
// Problem 9 — Student Analyzer Challenge
// ========================================

let studentData = [
    { name: "Tejas", marks: 85 },
    { name: "Rahul", marks: 92 },
    { name: "Amit", marks: 78 },
    { name: "Sneha", marks: 88 }
];


// 1. Print all students

console.log("\n--- All Students ---");

for (let i = 0; i < studentData.length; i++) {
    console.log(
        `${studentData[i].name}: ${studentData[i].marks}`
    );
}


// 2. Calculate average marks

let totalMarks = 0;

for (let i = 0; i < studentData.length; i++) {
    totalMarks += studentData[i].marks;
}

let averageMarks = totalMarks / studentData.length;

console.log("Average Marks:", averageMarks);


// 3. Find highest marks

let topStudent = studentData[0];

for (let i = 1; i < studentData.length; i++) {

    if (studentData[i].marks > topStudent.marks) {
        topStudent = studentData[i];
    }

}

console.log("Highest:", topStudent.name);
console.log("Highest Marks:", topStudent.marks);


// 4. Find lowest marks

let lowestStudent = studentData[0];

for (let i = 1; i < studentData.length; i++) {

    if (studentData[i].marks < lowestStudent.marks) {
        lowestStudent = studentData[i];
    }

}

console.log("Lowest:", lowestStudent.name);
console.log("Lowest Marks:", lowestStudent.marks);


// 5. Count students with 80+ marks

let count80Plus = 0;

for (let i = 0; i < studentData.length; i++) {

    if (studentData[i].marks >= 80) {
        count80Plus++;
    }

}

console.log("Students with 80+ marks:", count80Plus);
