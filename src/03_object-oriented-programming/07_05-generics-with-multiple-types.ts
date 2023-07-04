(() => {
    // simple multiple types
    function merge<T, U>(objA: T, objB: U) {
        return {
            ...objA,
            ...objB,
        };
    }

    const mergedObj = merge({ name: "Max", hobbies: ["Sports"] }, { age: 30 });
    console.log(mergedObj);
})();

(() => {
    // multiple types with constraints
    function merge<T extends object, U extends object>(objA: T, objB: U) {
        return {
            ...objA,
            ...objB,
        };
    }

    const mergedObj = merge({ name: "Max", hobbies: ["Sports"] }, { age: 30 });
    console.log(mergedObj);
})();
