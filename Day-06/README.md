# Day 06: Arrays

## 📌 Concept
Arrays in JavaScript are ordered collections of values. They allow storing multiple items under a single variable name, accessed by zero-based numerical indices.

## 🧪 Syntax
```javascript
let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits[0]); // Apple
fruits.push("Orange");  // add to end
```

## 💡 Examples
```javascript
let numbers = [10, 20, 30, 40];

// Access & Update
numbers[1] = 25;
console.log(numbers); // [10, 25, 30, 40]

// Loop through array
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
```

## ⚠️ Common Mistakes
- Confusing 0-based indexing: the last element is at `array.length - 1`, not `array.length`.
- Trying to access an out-of-bounds index returns `undefined`, not an error.

## ✅ Practice
Problems solved in `day06_practice.js`:
- Student names list printing
- Array sum calculation
- Finding largest & smallest number
- Counting even and odd numbers
- Array reversal and search
