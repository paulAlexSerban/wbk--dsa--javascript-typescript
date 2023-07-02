/**
 * TypeScript Interfaces
 * ======================
 * An interface is a syntactical contract that an entity should conform to. In other words, an interface 
 * defines the syntax that any entity must adhere to.
 * 
 * TypeScript interfaces define contracts in your code and provide explicit names for type checking. 
 * Interfaces define properties, methods, and events, which are the members of the interface.
 * 
 * Interfaces contain only the declaration of the members. It is the responsibility of the deriving class 
 * to define the members. It often helps in providing a standard structure that the deriving classes 
 * would follow.
 */

(() => {
    interface Todo {
        id: number;
        title: string;
        completed: boolean;
    }

    const todo: Todo = {
        id: 1,
        title: "delectus aut autem",
        completed: false,
    };

    const logObject = (obj: Todo) => {
        console.log(`id: ${obj.id}, title: ${obj.title}, completed: ${obj.completed}`);
    };

    logObject(todo);
})();

(() => {
    interface Person {
        // readonly  cannot be changed after initialization
        readonly firstName: string;
        lastName: string;
        // age is optional
        age?: number;
        isAlive: boolean;
        getFullName(): string;
    }

    const person: Person = {
        firstName: "John",
        lastName: "Doe",
        age: 30,
        isAlive: true,
        getFullName(): string {
            return `${this.firstName} ${this.lastName}`;
        },
    };

    const logObject = (obj: Person) => {
        console.log(
            `firstName: ${obj.firstName}, lastName: ${obj.lastName}, age: ${obj.age}, isAlive: ${
                obj.isAlive
            }, getFullName: ${obj.getFullName()}`
        );
    };

    logObject(person);
})();

(() => {
  interface Greatable {
    greet(): void;
  }

  class Person implements Greatable {
    constructor(private name: string) {}

    greet(): void {
      console.log(`Hello ${this.name}!`);
    }
  }

  const person = new Person("John");
  person.greet();
})()
