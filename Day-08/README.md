# 🟨 JavaScript Learning Journey — Day 08

## Strings & String Methods

Day 08 of my JavaScript learning journey.

Today I learned how to work with **strings**, access individual characters, search inside text, extract parts of strings, modify text, convert strings into arrays, and solve practical string problems.

---

## 🎯 Learning Objectives

By the end of Day 08, I learned how to:

* Create strings
* Access characters using indexes
* Find string length
* Convert strings to uppercase/lowercase
* Remove unwanted spaces
* Search inside strings
* Extract parts of strings
* Replace text
* Split strings into arrays
* Loop through strings
* Count vowels
* Check for palindromes
* Build reusable string functions

---

# 📚 Topics Covered

## 1. Creating Strings

Strings can be created using:

```javascript
let name = "Tejas";
let message = 'Hello JavaScript!';
let text = `Learning JavaScript`;
```

---

## 2. String Indexing

Strings use zero-based indexing.

```javascript
let name = "Tejas";

console.log(name[0]);
console.log(name[1]);
console.log(name[2]);
```

Output:

```text
T
e
j
```

Structure:

```text
T   e   j   a   s
0   1   2   3   4
```

---

## 3. String Length

The `.length` property returns the number of characters.

```javascript
let word = "JavaScript";

console.log(word.length);
```

Output:

```text
10
```

Last character:

```javascript
console.log(word[word.length - 1]);
```

---

# 🔤 String Methods

## 4. `toUpperCase()`

Converts a string to uppercase.

```javascript
let name = "tejas";

console.log(name.toUpperCase());
```

Output:

```text
TEJAS
```

---

## 5. `toLowerCase()`

Converts a string to lowercase.

```javascript
let name = "TEJAS";

console.log(name.toLowerCase());
```

Output:

```text
tejas
```

---

## 6. `trim()`

Removes whitespace from the beginning and end of a string.

```javascript
let username = "   Tejas   ";

console.log(username.trim());
```

Output:

```text
Tejas
```

This is useful when processing user input.

---

## 7. `includes()`

Checks whether a string contains another string.

```javascript
let sentence = "I am learning JavaScript";

console.log(sentence.includes("JavaScript"));
```

Output:

```text
true
```

---

## 8. `startsWith()`

Checks whether a string starts with a specific value.

```javascript
let website = "javascript.com";

console.log(website.startsWith("java"));
```

Output:

```text
true
```

---

## 9. `endsWith()`

Checks whether a string ends with a specific value.

```javascript
let file = "app.js";

console.log(file.endsWith(".js"));
```

Output:

```text
true
```

---

## 10. `indexOf()`

Returns the index where a substring first appears.

```javascript
let language = "JavaScript";

console.log(language.indexOf("Script"));
```

Output:

```text
4
```

If the value is not found:

```javascript
console.log(language.indexOf("Python"));
```

Output:

```text
-1
```

---

## 11. `slice()`

Extracts part of a string.

```javascript
let language = "JavaScript";

console.log(language.slice(0, 4));
`
```
