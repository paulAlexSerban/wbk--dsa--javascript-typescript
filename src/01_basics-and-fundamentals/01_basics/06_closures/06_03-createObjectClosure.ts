function createObjectClosure() {
    let largeObject = {
        keyOne: new Array(1000000).fill('one'),
        keyTwo: new Array(1000000).fill('two'),
        keyThree: new Array(1000000).fill('three'),
    }; // Suppose this is a large object
    return function () {
        return Object.create(largeObject); // Returns an object that inherits from largeObject without directly referencing it
    };
}

export default createObjectClosure;