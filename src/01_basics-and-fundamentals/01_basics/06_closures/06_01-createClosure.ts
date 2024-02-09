function createClosure() {
    let largeObject = new Array(10000000).fill('data');
    largeObject;
    return function () {
        return 'Closure accessing largeObject';
    };
}

export default createClosure
