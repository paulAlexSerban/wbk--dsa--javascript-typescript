/**
 * Abstract classes are base classes from which other classes may be derived.
 * They may not be instantiated directly.
 * Unlike an interface, an abstract class may contain implementation details for its members.
 * The abstract keyword is used to define abstract classes as well as abstract methods within an abstract class.
 */

(() => {
    abstract class Employee {
        constructor(public name: string, public salary: number) {}
        abstract pay(): void;
        greet() {
            console.log(`Good morning ${this.name}`);
        }
    }

    class FullTimeEmployee extends Employee {
        pay() {
            console.log(`${this.name} is paid ${this.salary} per month`);
        }
    }

    class PartTimeEmployee extends Employee {
        pay() {
            console.log(`${this.name} is paid ${this.salary} per hour`);
        }
    }

    const john = new FullTimeEmployee("John", 5000);
    const jane = new PartTimeEmployee("Jane", 100);

    john.pay();
    jane.pay();
})();
