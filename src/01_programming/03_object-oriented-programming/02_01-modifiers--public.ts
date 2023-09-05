/**
 * Modifiers
 * - keywords that set the accessability of properties and methods in a class
 * - public, private, protected, readonly
 * - public is the default modifier
 */

/**
 * Public
 * Public is the default modifier
 * Public members are accessible everywhere, any time
 * Public members are accessible from the class, from derived classes, and from outside the class
 */
(() => {
    const { log } = console;
    class Example {
        public publicProperty: string = "public";
        public publicMethod() {
            log("public");
        }
    }

    let example = new Example();
    example.publicProperty; // "public"
})();
