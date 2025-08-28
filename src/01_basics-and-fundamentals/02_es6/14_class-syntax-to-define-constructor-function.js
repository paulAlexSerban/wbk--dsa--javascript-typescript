/**
 * class Syntax to Define a Constructor Function
 * ES6 provides a new syntax to create objects, using the class keyword.
 * It should be noted that the class syntax is just syntax, and not a full-fledged class-based implementation of an object-oriented paradigm, unlike in languages such as Java, Python, Ruby, etc.
 * a class is a blueprint for creating objects with predefined properties and methods
 */

/**
 * In ES5, we usually define a constructor function and use the new keyword to instantiate an object.

 var SpaceShuttle = function(targetPlanet){
   this.targetPlanet = targetPlanet;
 }
 var zeus = new SpaceShuttle('Jupiter');

 */

// The class syntax simply replaces the constructor function creation:

class SpaceShuttle {
    constructor(targetPlanet) {
        this.targetPlanet = targetPlanet;
    }
}
const zeus = new SpaceShuttle('Jupiter');

// Note: UpperCamelCase should be used by convention for ES6 class names, as in SpaceShuttle used above.
// The constructor method is a special method for creating and initializing an object created with a class.

class Vegetable {
    constructor(name) {
        this.name = name;
    }
}

const carrot = new Vegetable('carrot');
console.log(carrot.name);

class Student {
    constructor(firstName, lastName, year) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = year;
        this.tardies = 0;
        this.scores = [];
    }

    // instance methods
    fullName() {
        return `Your full name is ${this.firstName} ${this.lastName}`;
    }

    markLate() {
        this.tardies += 1;
        if (this.tardies >= 3) {
            return 'You are Expelled!';
        }
        return `${this.firstName} ${this.lastName} has been late ${this.tardies} times.`;
    }

    addScore(score) {
        this.scores.push(score);
        return this.scores;
    }

    calculateAverage() {
        let sum = this.scores.reduce((a, b) => a + b);
        return sum / this.scores.length;
    }

    // class methods
    static EnrollStudents(...students) {
        // the static keyword defines a static method for a class
        // static methods are called without instantiating their class and cannot be called through a class instance
        // static methods are often ued to create utility functions for and application
        // the static method is attached to the class itself and not to the instances of the class
        return 'Enrolling students';
    }
}

const firstStudent = new Student('Colt', 'Steele');
const secondStudent = new Student('Blue', 'Steele');

firstStudent.fullName();
firstStudent.markLate();
firstStudent.addScore(7);

Student.EnrollStudents([firstStudent, secondStudent]);
