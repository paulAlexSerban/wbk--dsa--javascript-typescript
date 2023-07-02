(() => {
    // you can use types to define the structure of a function
    // this is the common way to do it, and also shorted than using an interface
    type addFn = (a: number, b: number) => number;

    let add: addFn;
    add = (a: number, b: number) => {
        return a + b;
    };

    console.log(add(1, 2));
})();

(() => {
    // interfaces can also be used to define the structure of a function
    interface addFn {
        (a: number, b: number): number;
    }

    let add: addFn;
    add = (a: number, b: number) => {
        return a + b;
    };

    console.log(add(1, 2));
})();
