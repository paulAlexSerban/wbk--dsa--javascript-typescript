const { helloWorld, helloWorldLogger } = require('./helloWorld');

describe('Hello, World! test suite', () => {
    test('It should return "Hello, World!"', () => {
        expect(helloWorld()).toBe('Hello, World!');
    });

    test('It should log Hello, World!', () => {
        console.log = jest.fn(); // Mock console.log
        helloWorldLogger();
        expect(console.log).toHaveBeenCalledWith('Hello, World!'); // Check if console.log was called with the right argument
    });
});
