// ===== Day 15 Practice: Prototypes and Prototypal Inheritance =====

// ---------- Problem 1: Object.create ----------
console.log("--- Problem 1 ---");
const vehicle = {
    wheels: 4,
    start() {
        console.log("Vehicle started");
    },
};
const car = Object.create(vehicle);
car.brand = "Maruti";
console.log(car.wheels);
car.start();
console.log(car.hasOwnProperty("wheels"));

// ---------- Problem 2: Book constructor ----------
console.log("--- Problem 2 ---");
function Book(title, author) {
    this.title = title;
    this.author = author;
}
Book.prototype.info = function () {
    return `${this.title} by ${this.author}`;
};
const b1 = new Book("Wings of Fire", "A.P.J. Abdul Kalam");
const b2 = new Book("Clean Code", "Robert C. Martin");
console.log(b1.info());
console.log(b2.info());
console.log(b1.info === b2.info);

// ---------- Problem 3: Circle ----------
console.log("--- Problem 3 ---");
function Circle(radius) {
    this.radius = radius;
}
Circle.prototype.area = function () {
    return Math.PI * this.radius * this.radius;
};
Circle.prototype.circumference = function () {
    return 2 * Math.PI * this.radius;
};
const c1 = new Circle(5);
console.log("Area:", c1.area().toFixed(2));
console.log("Circumference:", c1.circumference().toFixed(2));

// ---------- Problem 4: Inheritance + override ----------
console.log("--- Problem 4 ---");
function Animal(name) {
    this.name = name;
}
Animal.prototype.speak = function () {
    console.log(`${this.name} makes a sound`);
};
function Dog(name, breed) {
    Animal.call(this, name);
    this.breed = breed;
}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.speak = function () {
    console.log(`${this.name} (${this.breed}) barks: Woof!`);
};
const a1 = new Animal("Generic");
const d1 = new Dog("Bruno", "Labrador");
a1.speak();
d1.speak();
Animal.prototype.speak.call(d1);

// ---------- Problem 5: Array.prototype.last ----------
console.log("--- Problem 5 ---");
Array.prototype.last = function () {
    return this[this.length - 1];
};
console.log([1, 2, 3].last());
console.log(["a", "b", "c"].last());
console.log([].last());
// NOTE: Built-in prototypes modify karna galat practice hai
// (naming conflict, for...in mein dikhna, dusre code ka toot jana).

// ---------- Problem 6: Prototype chain ----------
console.log("--- Problem 6 ---");
function printChain(obj) {
    let current = Object.getPrototypeOf(obj);
    let level = 1;
    while (current !== null) {
        console.log(`Level ${level}:`, current.constructor.name);
        current = Object.getPrototypeOf(current);
        level++;
    }
    console.log("End: null");
}
printChain(d1);
printChain([1, 2, 3]);

// ---------- Problem 7: Own vs inherited ----------
console.log("--- Problem 7 ---");
const base = { inheritedA: "A", inheritedB: "B" };
const obj = Object.create(base);
obj.ownX = "X";
obj.ownY = "Y";
for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
        console.log(`Own: ${key} = ${obj[key]}`);
    } else {
        console.log(`Inherited: ${key}`);
    }
}
console.log(Object.keys(obj));