/**
 * Parameter properties
 * Parameter properties in TypeScript allow you to create and initialize a class
 * member in one place. This feature can greatly simplify your code and make it easier to read.
 */
(() => {
    class Example {
        constructor(public name: string, private value: number) {}

        printValue() {
            console.log(this.value);
        }
    }

    let example = new Example("test", 10);
    console.log(example.name); // Outputs "test"
    example.printValue(); // Outputs 10
})();
