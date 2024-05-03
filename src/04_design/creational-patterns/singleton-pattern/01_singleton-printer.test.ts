import { singletonPrinter } from './01_singleton-printer';

describe('Singleton Printer Implementation', () => {
    test('should return the same instance of the printer', () => {
        const printer1 = singletonPrinter.getInstance();
        const printer2 = singletonPrinter.getInstance();

        expect(printer1).toBe(printer2);
    });

    test('should print a page', () => {
        const printer = singletonPrinter.getInstance();
        const consoleSpy = jest.spyOn(console, 'log');

        printer.print();
        expect(consoleSpy).toHaveBeenCalledWith('Printing a page');
        consoleSpy.mockRestore();  // Reset the spy to not interfere with other tests
    });

    test('should turn on the printer', () => {
        const printer = singletonPrinter.getInstance();
        const consoleSpy = jest.spyOn(console, 'log');

        printer.turnOn();
        expect(consoleSpy).toHaveBeenCalledWith('Turning on the printer');
        consoleSpy.mockRestore();  // Reset the spy to not interfere with other tests
    });
});
