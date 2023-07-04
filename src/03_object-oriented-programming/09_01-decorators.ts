(() => {
    // Decorators
    // - Decorators are functions that can be attached to classes, methods, and properties
    // - Decorators are executed when the class is defined, not when the class is instantiated
    function Logger(constructor: Function) {
        console.log("Logging...");
        console.log(constructor);
    }

    @Logger
    class Person {
        name = "Max";
        constructor() {
            console.log("Creating person object...");
        }
    }

    const person = new Person();
    console.log(person);
})();
