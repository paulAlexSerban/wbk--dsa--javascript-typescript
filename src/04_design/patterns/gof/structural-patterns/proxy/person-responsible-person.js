/**
 * In this code, we have a Proxy pattern implementation using the Person and ResponsiblePerson
 * classes. The Proxy pattern provides an object that controls access to another object,
 * called the "real subject". In this case, the ResponsiblePerson class acts as a proxy to
 * control access to the methods of the Person class, ensuring that certain actions can only
 * be taken if specific age conditions are met.
 *
 * Here's the code with added step-by-step comments and the test case rewritten using console.log:
 */

// The Person class represents a person with an age and methods for drinking, driving, and drinking and driving
class Person {
    constructor(age = 0) {
        this.age = age;
    }

    drink() {
        return 'drinking';
    }

    drive() {
        return 'driving';
    }

    drinkAndDrive() {
        return 'driving while drunk';
    }
}

// The ResponsiblePerson class acts as a proxy for the Person class, controlling access to its methods based on age restrictions
class ResponsiblePerson {
    constructor(person) {
        this.person = person;
    }

    get age() {
        return this.person.age;
    }

    set age(value) {
        this.person.age = value;
    }

    drink() {
        if (this.age >= 18) return this.person.drink();
        return 'too young';
    }

    drive() {
        if (this.age >= 16) return this.person.drive();
        return 'too young';
    }

    // don't do it, folks!
    drinkAndDrive() {
        return 'dead';
    }
}

// Test case using console.log
{
    let p = new Person(10);
    let rp = new ResponsiblePerson(p);

    console.log(rp.drive() === 'too young');
    console.log(rp.drink() === 'too young');
    console.log(rp.drinkAndDrive() === 'dead');

    rp.age = 20;

    console.log(rp.drive() === 'driving');
    console.log(rp.drink() === 'drinking');
    console.log(rp.drinkAndDrive() === 'dead');
}

/**
 * In the test case, we create a Person instance with an age of 10 and a ResponsiblePerson
 * instance acting as a proxy for the Person. We then check if the proxy correctly restricts
 * access to the drive and drink methods, returning 'too young' for both since the person
 * is underage. We also check that the drinkAndDrive method always returns 'dead', regardless
 * of age. After increasing the age to 20, we verify that the drive and drink methods now
 * return the expected values ('driving' and 'drinking', respectively) while the drinkAndDrive
 * method still returns 'dead'.
 */
