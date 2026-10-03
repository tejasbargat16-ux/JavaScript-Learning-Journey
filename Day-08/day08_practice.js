// JavaScript Learning Journey
// Day 08 - Practice Solutions
// Topic: Strings & String Methods


// ========================================
// Problem 1 — Uppercase
// ========================================

let name = "tejas";

console.log("Uppercase:", name.toUpperCase());


// ========================================
// Problem 2 — Count Characters
// ========================================

let word = "JavaScript";

console.log("Length:", word.length);


// ========================================
// Problem 3 — First & Last Character
// ========================================

let developer = "Developer";

console.log("First:", developer[0]);
console.log("Last:", developer[developer.length - 1]);


// ========================================
// Problem 4 — Check Word
// ========================================

let sentence = "I am learning JavaScript";

if (sentence.includes("JavaScript")) {
    console.log("JavaScript found");
} else {
    console.log("JavaScript not found");
}


// ========================================
// Problem 5 — Remove Spaces
// ========================================

let username = "   Tejas   ";

console.log("Clean username:", username.trim());


// ========================================
// Problem 6 — Extract Word
// ========================================

let language = "JavaScript";

let extracted = language.slice(0, 4);

console.log("Extracted:", extracted);


// ========================================
// Problem 7 — Replace
// ========================================

let message = "I am learning Java";

let updatedMessage = message.replace(
    "Java",
    "JavaScript"
);

console.log("Updated:", updatedMessage);


// ========================================
// Problem 8 — String to Array
// ========================================

let skills = "HTML,CSS,JavaScript,Python";

let skillArray = skills.split(",");

console.log("Skills:", skillArray);


// ========================================
// Problem 9 — Count Vowels
// ========================================

let vowelWord = "javascript";

let vowelCount = 0;

for (let i = 0; i < vowelWord.length; i++) {

    let character = vowelWord[i];

    if (
        character === "a" ||
        character === "e" ||
        character === "i" ||
        character === "o" ||
        character === "u"
    ) {
        vowelCount++;
    }

}

console.log("Vowels:", vowelCount);


// ========================================
// Problem 10 — Palindrome Challenge
// ========================================

let palindromeWord = "madam";

let reversedWord = "";

for (
    let i = palindromeWord.length - 1;
    i >= 0;
    i--
) {
    reversedWord += palindromeWord[i];
}

if (palindromeWord === reversedWord) {
    console.log("Palindrome");
} else {
    console.log("Not Palindrome");
}


// ========================================
// Bonus Problem — Reverse Any String
// ========================================

function reverseString(text) {

    let reversed = "";

    for (let i = text.length - 1; i >= 0; i--) {
        reversed += text[i];
    }

    return reversed;
}

console.log(
    "Reverse:",
    reverseString("Tejas")
);