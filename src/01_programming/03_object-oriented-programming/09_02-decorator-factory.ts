/**
 * Decorators
 * - Decorators are functions that can be attached to classes, methods, and properties
 * - Decorators are executed when the class is defined, not when the class is instantiated
 * - Decorators receive different arguments depending on what they are attached to
 * - Decorators can be used to configure, define, or log classes, methods, and properties
 * - Decorators are just functions
 * - Decorators run bottom up
 * - Decorators are executed when the class is defined, not when the class is instantiated
 * - Decorators are metadata attached to classes, methods, and properties
 */

(() => {
    function Logger(logString: string) {
        return function (constructor: Function) {
            console.log(logString);
            console.log(constructor);
        };
    }

    // function WithTemplate(template: string, hookId: string) {
    //     return function (constructor: any) {
    //         const hookEl = document.getElementById(hookId);
    //         const p = new constructor();
    //         if (hookEl) {
    //             hookEl.innerHTML = template;
    //             hookEl.querySelector("h1")!.textContent = p.name;
    //         }
    //     };
    // }

    @Logger("Logging - Person")
    // @WithTemplate("<h1>My Person Object</h1>", "app")
    class Person {
        name = "Max";
        constructor() {
            console.log("Creating person object...");
        }
    }

    const person = new Person();
    console.log(person);
})();

(() => {

    function Log(target: any, propertyName: string | Symbol) {
        console.log("Property decorator!");
        console.log(target, propertyName);
    }

    function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
        console.log("Accessor decorator!");
        console.log(target);
        console.log(name);
        console.log(descriptor);
    }

    function Log3(
        target: any,
        name: string | Symbol,
        descriptor: PropertyDescriptor
    ) {
        console.log("Method decorator!");
        console.log(target);
        console.log(name);
        console.log(descriptor);
    }

    function Log4(target: any, name: string | Symbol, position: number) {
        console.log("Parameter decorator!");
        console.log(target);
        console.log(name);
        console.log(position);
    }

    class Product {
        @Log
        title: string;
        _price: number;


        @Log2
        set price(val: number) {
            if (val > 0) {
                this._price = val;
            } else {
                throw new Error("Invalid price - should be positive!");
            }
        }

        constructor(t: string, p: number) {
            this.title = t;
            this._price = p;
        }

        @Log3
        getPriceWithTax(@Log4 tax: number) {
            return this._price * (1 + tax);
        }
    }

    const p1 = new Product("Book", 19);
    const p2 = new Product("Book 2", 29);
    p1.getPriceWithTax(0.1);
    p2.getPriceWithTax(0.2);
})();
