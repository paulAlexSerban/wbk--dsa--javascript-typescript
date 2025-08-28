/**
 * Here's the code example with step-by-step comments explaining the
 * Singleton pattern implementation and test cases with console.log:
 */

// The SingletonTester class is used to test if the provided generator function
// returns a Singleton object or not.
class SingletonTester {
    // The static method `isSingleton` takes a generator function as an argument.
    static isSingleton(generator) {
        // It calls the generator function twice to create two objects.
        let obj1 = generator();
        let obj2 = generator();

        // Log both objects' string representations to the console.
        console.log(obj1.toString());
        console.log(obj2.toString());

        // Compare the two objects for equality and log the result.
        console.log(`Returning ${obj1 === obj2}`);

        // If obj1 and obj2 are the same, it's a Singleton. Otherwise, it's not.
        return obj1 === obj2;
    }
}

// Test the SingletonTester with two test cases.
function runTests() {
    // Test with a real singleton.
    console.log('Test with a real singleton:');
    const item = [1, 2, 3];

    // Log the result of the SingletonTester test for the item array.
    console.log(
        'Is singleton: ',
        SingletonTester.isSingleton(() => item)
    );

    // Test with a non-singleton.
    console.log('Test with a non-singleton:');

    // Log the result of the SingletonTester test for a randomly generated array.
    let result = SingletonTester.isSingleton(() => [Math.random()]);
    console.log('Is singleton: ', result);
}

// Run the tests.
runTests();

/**
 * This code snippet demonstrates a Singleton pattern tester using the
 * SingletonTester class. The tester checks if the provided generator
 * function returns a Singleton object or not by comparing the references
 * of the two objects created using the generator. The test cases include
 * a real singleton (a shared item array) and a non-singleton (a randomly
 * generated array). The results are logged to the console.
 */
