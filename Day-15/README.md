# Day 15: JavaScript Prototypes and Prototypal Inheritance

## Overview
Day 15 covers how JavaScript objects inherit from other objects using the prototype chain. This is the foundation behind built-in methods (like `map`) and the modern `class` syntax.

## Learning Objectives
- Understand `[[Prototype]]` and the prototype chain
- Use `Object.create()` and constructor functions with `new`
- Add shared methods using `Constructor.prototype`
- Implement prototypal inheritance (Student → Person)
- Use `hasOwnProperty`, `instanceof`, and `Object.getPrototypeOf()`

## Topics Covered
- Prototype and prototype chain
- `Object.create()`
- Constructor functions and `.prototype`
- Inheritance with `Object.create(Parent.prototype)`
- Method overriding
- Own vs inherited properties
- Built-in prototypes (`Array.prototype`)

## Code Examples
```js
function Person(name) { this.name = name; }
Person.prototype.greet = function () {
  console.log(`Hi, I am ${this.name}`);
};

function Student(name, course) {
  Person.call(this, name);
  this.course = course;
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

const s1 = new Student("Tejas", "ECE");
s1.greet(); // Hi, I am Tejas
```

## Practice Problems Completed
1. Inheritance using `Object.create` (vehicle → car)
2. `Book` constructor with shared `info()` method
3. `Circle` with `area()` and `circumference()`
4. `Animal` → `Dog` inheritance with method overriding
5. Custom `Array.prototype.last()` (and why it is bad practice)
6. Printing the prototype chain with a loop
7. Own vs inherited properties using `for...in` and `Object.keys()`

## Mini-Project: Student Report System
A `Student` inherits from `Person` and adds `addMarks()` (with chaining), `average()`, and `report()`.

```
Name: Tejas | Roll: 101 | Avg: 85.00
Name: Rahul | Roll: 102 | Avg: 67.50
```

## Project Folder Structure
```text
Day-15/
├── day15.js
├── day15_practice.js
└── README.md
```

## How to Run
```bash
cd Day-15
node day15.js
node day15_practice.js
```

## Key Learnings
- Every object has a hidden link to a prototype; lookups walk up the chain until `null`.
- Methods on `Constructor.prototype` are shared by all instances (memory efficient).
- Use `Object.create(Parent.prototype)` for inheritance, never `Child.prototype = Parent.prototype`.
- Reset `Child.prototype.constructor` after linking.
- Do not use arrow functions as prototype methods (`this` breaks).
- Avoid modifying built-in prototypes in real projects.

## Learning Progress
- Day 01 to Day 14: Fundamentals, arrays, objects, strings, functions, closures, `this`
- Day 15: Prototypes and prototypal inheritance (completed)

## Next Learning Goal
**Day 16: ES6 Classes** (`class`, `constructor`, `extends`, `super`), which is the modern syntax for everything learned today.