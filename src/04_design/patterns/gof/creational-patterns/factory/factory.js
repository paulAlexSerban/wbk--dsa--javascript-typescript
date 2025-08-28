/**
 * This code demonstrates the factory design pattern in JavaScript.
 * The factory design pattern is a creational pattern that provides an interface for creating objects in a super class but allows subclasses to alter the type of objects that will be created.
 */

// Define a class 'Person' with a constructor that takes 'id' and 'name' as arguments
class Person {
    constructor(id, name) {
        this.id = id; // Assign the 'id' parameter to the 'id' property of the 'Person' instance
        this.name = name; // Assign the 'name' parameter to the 'name' property of the 'Person' instance
    }
}

// Define a class 'PersonFactory' with a method 'createPerson'
class PersonFactory {
    createPerson(name) {
        // Create a new 'Person' instance with a unique ID (incremented each time) and the provided 'name'
        return new Person(PersonFactory.id++, name);
    }
}
PersonFactory.id = 0; // Initialize a static property 'id' with a value of 0

// Test cases
console.log('Factory Design Pattern Test Cases:');

let pf = new PersonFactory();

let p1 = pf.createPerson('Chris');
console.log('Expect p1.name to equal "Chris":', p1.name === 'Chris'); // Test if 'p1.name' is equal to 'Chris'
console.log('Expect p1.id to equal 0:', p1.id === 0); // Test if 'p1.id' is equal to 0

let p2 = pf.createPerson('Sarah');
console.log('Expect p2.id to equal 1:', p2.id === 1); // Test if 'p2.id' is equal to 1

/**
 * This code demonstrates the factory design pattern by creating Person
 * instances using the PersonFactory class. The PersonFactory class has a createPerson
 * method that takes a name parameter and creates a new Person instance with a unique
 * ID and the provided name. The ID is incremented each time a new Person is created,
 * ensuring a unique ID for each instance.
 */
