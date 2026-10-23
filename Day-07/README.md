# Day 07: Objects

## 📌 Concept
Objects in JavaScript are collections of key-value pairs used to represent entities with properties and methods.

## 🧪 Syntax
```javascript
let student = {
    name: "Tejas",
    age: 19,
    branch: "ECE"
};

// Dot & Bracket notation
console.log(student.name);
console.log(student["branch"]);
```

## 💡 Examples
```javascript
let person = {
    name: "Tejas",
    city: "Pune",
    greet() {
        return `Hello, my name is ${this.name}!`;
    }
};

person.age = 20; // adding property
delete person.city; // removing property
console.log(person.greet());
```

## ⚠️ Common Mistakes
- Using bracket notation with an unquoted key name instead of a variable (`person[name]` vs `person["name"]`).
- Forgetting that object keys are strings or Symbols.

## ✅ Practice
Problems solved in `day07_practice.js`:
- Student details object
- Book information object
- Adding and updating object properties
- Looping over object keys with `for...in`
- Nested objects and methods
