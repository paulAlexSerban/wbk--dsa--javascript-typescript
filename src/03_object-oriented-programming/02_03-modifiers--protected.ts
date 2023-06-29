/**
 * Protected
 * Protected members are accessible from within the class
 * Protected members are accessible from derived classes
 * Protected members are not accessible from outside the class
 */
(() => {
    const { log } = console;
    class Example {
        protected protectedProperty: string = "protected";
        protected protectedMethod() {
            log("protected");
        }
    }

    class Example2 extends Example {
        public publicMethod() {
            this.protectedProperty; // OK
            this.protectedMethod(); // OK
        }
    }

    let example = new Example();
    log(example); // Error
    // example.protectedProperty; // Error
    // example.protectedMethod(); // Error

    let example2 = new Example2();
    example2.publicMethod(); // OK
})();
