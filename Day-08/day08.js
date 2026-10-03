// JavaScript Learning Journey
// Day 08 - Strings & String Methods


// ========================================
// 1. Creating Strings
// ========================================

let name = "Tejas";
let message = "Learning JavaScript";

console.log(name);
console.log(message);


// ========================================
// 2. String Indexing
// ========================================

console.log(name[0]);
console.log(name[1]);
console.log(name[2]);


// ========================================
// 3. String Length
// ========================================

console.log("Length:", name.length);
console.log("Last Character:", name[name.length - 1]);


// ========================================
// 4. Uppercase
// ========================================

console.log(name.toUpperCase());


// ========================================
// 5. Lowercase
// ========================================

console.log(name.toLowerCase());


// ========================================
// 6. Trim
// ========================================

let username = "   Tejas   ";

console.log("Before:", username);
console.log("After:", username.trim());


// ========================================
// 7. Includes
// ========================================

let sentence = "I am learning JavaScript";

console.log(
    "Has JavaScript:",
    sentence.includes("JavaScript")
);

console.log(
    "Has Python:",
    sentence.includes("Python")
);


// ========================================
// 8. startsWith
// ========================================

let website = "javascript.com";

console.log(
    website.startsWith("java")
);


// ========================================
// 9. endsWith
// ========================================

let file = "app.js";

console.log(
    file.endsWith(".js")
);


// ========================================
// 10. indexOf
// ========================================

let language = "JavaScript";

console.log(
    "Index:",
    language.indexOf("Script")
);


// ========================================
// 11. slice
// ========================================

console.log(
    language.slice(0, 4)
);

console.log(
    language.slice(-6)
);


// ========================================
// 12. substring
// ========================================

console.log(
    language.substring(0, 4)
);


// ========================================
// 13. replace
// ========================================

let text = "I like Java";

console.log(
    text.replace("Java", "JavaScript")
);


// ========================================
// 14. replaceAll
// ========================================

let repeated = "Java Java Java";

console.log(
    repeated.replaceAll("Java", "JavaScript")
);


// ========================================
// 15. split
// ========================================

let skills = "JavaScript,Python,C++";

let skillArray = skills.split(",");

console.log(skillArray);


// ========================================
// 16. charAt
// ========================================

console.log(
    "First Character:",
    name.charAt(0)
);


// ========================================
// 17. Template Literal
// ========================================

let age = 19;

console.log(
    `My name is ${name} and I am ${age} years old.`
);


// ========================================
// 18. Loop Through String
// ========================================

let word = "Hello";

for (let i = 0; i < word.length; i++) {
    console.log(word[i]);
}