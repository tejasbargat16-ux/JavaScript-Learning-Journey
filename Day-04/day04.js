// JavaScript Learning Journey
// Day 04 - Loops


// ========================================
// 1. for Loop
// ========================================

for (let i = 1; i <= 5; i++) {
    console.log("Number:", i);
}


// ========================================
// 2. Reverse Counting
// ========================================

for (let i = 5; i >= 1; i--) {
    console.log("Reverse:", i);
}


// ========================================
// 3. while Loop
// ========================================

let count = 1;

while (count <= 5) {
    console.log("While:", count);
    count++;
}


// ========================================
// 4. do...while Loop
// ========================================

let number = 1;

do {
    console.log("Do While:", number);
    number++;
} while (number <= 5);


// ========================================
// 5. Even Numbers
// ========================================

for (let i = 1; i <= 20; i++) {

    if (i % 2 === 0) {
        console.log("Even:", i);
    }

}


// ========================================
// 6. break
// ========================================

for (let i = 1; i <= 10; i++) {

    if (i === 6) {
        break;
    }

    console.log("Break Example:", i);
}


// ========================================
// 7. continue
// ========================================

for (let i = 1; i <= 10; i++) {

    if (i === 5) {
        continue;
    }

    console.log("Continue Example:", i);
}


// ========================================
// 8. Multiplication Table
// ========================================

let tableNumber = 7;

for (let i = 1; i <= 10; i++) {
    console.log(
        `${tableNumber} × ${i} = ${tableNumber * i}`
    );
}


// ========================================
// 9. Sum of Numbers
// ========================================

let sum = 0;

for (let i = 1; i <= 10; i++) {
    sum += i;
}

console.log("Sum:", sum);


// ========================================
// 10. Nested Loop
// ========================================

for (let i = 1; i <= 3; i++) {

    for (let j = 1; j <= 3; j++) {
        console.log(`i = ${i}, j = ${j}`);
    }

}
