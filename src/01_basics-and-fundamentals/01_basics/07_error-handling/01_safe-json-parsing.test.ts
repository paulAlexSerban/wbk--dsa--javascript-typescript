import { safeParse } from './01_safe-json-parsing';

describe('safeParse', () => {
    // Test for successful JSON parsing
    it('should correctly parse a valid JSON string', () => {
        const json = '{"name":"John", "age":30}';
        const expected = { name: 'John', age: 30 };
        const result = safeParse(json);
        expect(result).toEqual(expected);
    });

    // Test for handling invalid JSON string
    it('should return null for an invalid JSON string', () => {
        const json = '{"name": "John", age: 30}'; // Missing quote before age
        const result = safeParse(json);
        expect(result).toBeNull();
    });

    // Optional: Test to ensure console.log is called
    // This test checks if console.log is called, which might be over-testing in some contexts
    it('should log messages before and after parsing attempt', () => {
        const json = '{}';
        console.log = jest.fn(); // Mocking console.log

        safeParse(json);

        expect(console.log).toHaveBeenCalledWith('Attempting to parse JSON...');
        expect(console.log).toHaveBeenCalledWith('Parsing attempt completed.');
    });

    // Optional: Test to check error logging
    // Note: Testing console output, especially for errors, is typically less common
    it('should log an error message for an invalid JSON string', () => {
        const json = '{"invalid": }';
        console.log = jest.fn(); // Mocking console.log

        safeParse(json);

        // Check if any call to console.log contains the expected message
        const errorMessageCall = (console.log as jest.Mock).mock.calls.find((call) =>
            call.some((arg) => typeof arg === 'string' && arg.includes('Error parsing JSON:'))
        );

        expect(errorMessageCall).toBeTruthy();
    });
});
