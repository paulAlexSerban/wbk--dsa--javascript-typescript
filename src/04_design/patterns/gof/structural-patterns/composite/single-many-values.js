/**
 * The given code implements the composite design pattern, which is a structural pattern
 * that allows treating a group of objects as a single object. Here, we have two classes
 * SingleValue and ManyValues which can be treated uniformly.
 */

class SingleValue {
    constructor(value) {
        this.value = value;
    }

    [Symbol.iterator]() {
        let returned = false;
        return {
            next: () => ({
                value: this.value,
                done: returned++,
            }),
        };
    }
}

/**
 * This class has a constructor that takes a value as input and assigns it to the value property.
 * It implements a custom iterator using the [Symbol.iterator]() method. This allows instances
 * of the class to be used in for...of loops.
 * The iterator has a next() function that returns an object with properties value and done.
 *    - value is the value of the instance.
 *    - done indicates if the value has been returned before. If the value has already been
 * returned, done will be true.
 */

class ManyValues extends Array {}
/**
 * This class extends the built-in Array class, so it inherits all the properties and
 * methods of an array. No additional functionality is added.
 */

let sum = function (containers) {
    let result = 0;
    for (let c of containers) for (let i of c) result += i;
    return result;
};

/**
 * This function accepts an array of containers as input and calculates the sum of all elements
 * in these containers.
 * It uses nested for...of loops to iterate through the containers and their individual elements.
 * The sum is stored in the variable result and returned.
 */

function testComposite() {
    let singleValue = new SingleValue(11);
    let otherValues = new ManyValues();
    otherValues.push(22);
    otherValues.push(33);

    let result = sum([singleValue, otherValues]);
    if (result === 66) {
        console.log('Test passed: The sum of different objects is correct.');
    } else {
        console.log('Test failed: The sum of different objects is incorrect.');
    }
}

testComposite();

/**
 * This test case creates an instance of SingleValue with a value of 11,
 * and an instance of ManyValues containing 22 and 33.
 * It calls the sum() function with these instances and checks if the result is 66.
 * If the result is correct, a "Test passed" message is logged to the console.
 * If not, a "Test failed" message is logged.
 */
