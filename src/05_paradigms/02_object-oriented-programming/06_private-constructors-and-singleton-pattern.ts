/**
 * Private Constructors and Singleton Pattern
 * - A private constructor can only be called from within the class
 * - A singleton is a class that can only be instantiated once
 * - A singleton is useful when you want to limit the number of instances of a class to one
 */

(() => {
    class SingletonClass {
        private static instance: SingletonClass;
        private constructor() {}

        static getInstance() {
            if (!SingletonClass.instance) {
                SingletonClass.instance = new SingletonClass();
            }
            return SingletonClass.instance;
        }

        public someMethod() {
            console.log("I am a singleton");
        }
    }

    const example1 = SingletonClass;
    const example2 = SingletonClass;
    example1.getInstance().someMethod();
    example2.getInstance().someMethod();
})();

(() => {
    class Department {
        // static properties and methods are accessible without instantiating the class
        private static instance: Department;
        // private constructors ensure that a class can only be instantiated once
        private constructor(public name: string) {}
        // static methods are accessible without instantiating the class
        static getInstance(name: string) {
            if (!Department.instance) {
                Department.instance = new Department(name);
            }
            return Department.instance;
        }

        describe() {
            console.log(`Department: ${this.name}`);
        }

        addEmployee(employee: string) {
            console.log(employee);
        }

        printEmployeeInformation() {
            console.log(this.name);
        }
    }

    // will return a new object with the name "Accounting"
    const accounting = Department.getInstance("Accounting");
    // will return the same instance with the name "Accounting"
    // no new object will be created
    const accounting2 = Department.getInstance("Accounting2");
    console.log(accounting);
    console.log(accounting2);
})();
