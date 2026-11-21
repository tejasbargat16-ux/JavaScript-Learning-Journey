// ---------- Part 1: Object.create ----------
const animal = {
    eats: true,
    eat() {
        console.log("Animal is eating");
    },
};

const dog = Object.create(animal); // dog ka prototype = animal
dog.barks = true;

console.log(dog.eats);                              // inherited property
dog.eat();                                          // inherited method
console.log(Object.getPrototypeOf(dog) === animal);
console.log(dog.hasOwnProperty("eats"));            // inherited hai, own nahi
console.log(dog.hasOwnProperty("barks"));           // own property

// ---------- Part 2: Constructor + prototype ----------
function Person(name) {
    this.name = name;               // har object ki apni copy
}

Person.prototype.greet = function () {   // arrow function mat use karna (this issue)
    console.log(`Hi, I am ${this.name}`);
};

const p1 = new Person("Tejas");
const p2 = new Person("Rahul");

p1.greet();
p2.greet();
console.log(p1.greet === p2.greet);          // same function share ho raha hai
console.log(p1.hasOwnProperty("greet"));

// ---------- Part 3: Prototypal Inheritance ----------
function Student(name, course) {
    Person.call(this, name);        // parent constructor chalao (Day 14 ka call())
    this.course = course;
}

Student.prototype = Object.create(Person.prototype); // chain link
Student.prototype.constructor = Student;             // constructor wapas set karo

Student.prototype.study = function () {
    console.log(`${this.name} is studying ${this.course}`);
};

const s1 = new Student("Tejas", "ECE");
s1.greet();   // Person se inherited
s1.study();   // Student ka apna

console.log(s1 instanceof Student);
console.log(s1 instanceof Person);
console.log(Object.getPrototypeOf(s1) === Student.prototype);

// ---------- Part 4: Built-ins ----------
console.log(Object.getPrototypeOf([]) === Array.prototype);