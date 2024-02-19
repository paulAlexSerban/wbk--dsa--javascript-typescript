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
    interface ITodo {
        id: number;
        title: string;
        completed: boolean;
    }

    const todo: ITodo = {
        id: 1,
        title: "delectus aut autem",
        completed: false,
    };

    const logObject = (obj: ITodo) => {
        console.log(`id: ${obj.id}, title: ${obj.title}, completed: ${obj.completed}`);
    };

    logObject(todo);
})();

(() => {
    interface IPerson {
        // readonly  cannot be changed after initialization
        readonly firstName: string;
        lastName: string;
        // age is optional
        age?: number;
        isAlive: boolean;
        getFullName(): string;
    }

    const person: IPerson = {
        firstName: "John",
        lastName: "Doe",
        age: 30,
        isAlive: true,
        getFullName(): string {
            return `${this.firstName} ${this.lastName}`;
        },
    };

    const logObject = (obj: IPerson) => {
        console.log(
            `firstName: ${obj.firstName}, lastName: ${obj.lastName}, age: ${obj.age}, isAlive: ${
                obj.isAlive
            }, getFullName: ${obj.getFullName()}`
        );
    };

    logObject(person);
})();

(() => {
    interface IGreatable {
        greet(): void;
    }

    class Person implements IGreatable {
        constructor(private name: string) {}

        greet(): void {
            console.log(`Hello ${this.name}!`);
        }
    }

    const person = new Person("John");
    person.greet();
})();

(() => {
    interface IUser {
        id: number;
        firstName: string;
        lastName: string;
        isAdmin: boolean;
    }

    /**
     * How do we ensure that defaultUser is of type User
     * at THIS LINE - not further down in the code?
     */
    const defaultUser = {
        id: 0,
        firstName: "John",
        lastName: "Doe",
        isAdmin: false,
    };

    const getUserId = (user: IUser) => {
        return user.id;
    };

    getUserId(defaultUser);
})();
