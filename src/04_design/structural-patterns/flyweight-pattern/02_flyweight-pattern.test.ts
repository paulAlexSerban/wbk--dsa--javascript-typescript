import { FlyweightFactory, addCarToPoliceDatabase } from './02_flyweight-pattern';
describe('Flyweight Pattern Implementation', () => {
    let factory;
    let consoleSpy;

    beforeEach(() => {
        // Mock console.log before each test
        consoleSpy = jest.spyOn(console, 'log').mockImplementation();

        // Initialize a new FlyweightFactory instance before each test
        factory = new FlyweightFactory([
            ['Chevrolet', 'Camaro2018', 'pink'],
            ['Mercedes Benz', 'C300', 'black'],
            // Add more initial flyweights as needed
        ]);
    });

    afterEach(() => {
        // Restore the original implementation of console.log after each test
        consoleSpy.mockRestore();
    });

    test('FlyweightFactory creates new flyweight if it does not exist', () => {
        addCarToPoliceDatabase(factory, 'CL234IR', 'James Doe', 'BMW', 'M5', 'red');

        // Check if a new flyweight was created
        expect(consoleSpy).toHaveBeenCalledWith("FlyweightFactory: Can't find a flyweight, creating new one.");
    });

    test('FlyweightFactory reuses existing flyweight if it exists', () => {
        // Add a car to ensure the flyweight exists
        addCarToPoliceDatabase(factory, 'CL234IR', 'James Doe', 'Mercedes Benz', 'C300', 'black');

        // Attempt to add another car that should reuse the existing flyweight
        addCarToPoliceDatabase(factory, 'XY123YZ', 'Jane Doe', 'Mercedes Benz', 'C300', 'black');

        // Check if the existing flyweight was reused
        expect(consoleSpy).toHaveBeenCalledWith('FlyweightFactory: Reusing existing flyweight.');
    });

    test('listFlyweights lists correct number of flyweights', () => {
        // Trigger the listing of flyweights
        factory.listFlyweights();

        // Verify the correct count of flyweights is logged
        // Adjust the expected number based on the initial flyweights and any additions
        expect(consoleSpy).toHaveBeenCalledWith('\nFlyweightFactory: I have 2 flyweights:');
    });

    // Add more tests as needed to cover other scenarios and behaviors
});
