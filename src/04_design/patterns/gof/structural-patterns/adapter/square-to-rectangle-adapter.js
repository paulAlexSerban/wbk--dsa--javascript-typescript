// The Square class represents a square with a given side length.
class Square {
    constructor(side) {
        this.side = side; // Set the side length of the square.
    }
}

// The area function calculates the area of a rectangle given its width and height.
function area(rectangle) {
    return rectangle.width * rectangle.height; // Calculate and return the area.
}

// The SquareToRectangleAdapter class is an implementation of the Adapter design pattern.
// It adapts a Square object to be used as a Rectangle object, as expected by the area function.
class SquareToRectangleAdapter {
    constructor(square) {
        this.square = square; // Store the Square object.
    }

    // Define a width getter that retrieves the side length of the square as its width.
    get width() {
        return this.square.side;
    }

    // Define a height getter that retrieves the side length of the square as its height.
    get height() {
        return this.square.side;
    }
}

// Test the adapter using console logs instead of a testing library.
function testAdapter() {
    let sq = new Square(11); // Create a new square with a side length of 11.
    let adapter = new SquareToRectangleAdapter(sq); // Adapt the square to be used as a rectangle.

    // Calculate the area of the adapted square using the area function and check if it's equal to 121.
    if (area(adapter) === 121) {
        console.log('adapter test passed');
    } else {
        console.log('adapter test failed');
    }
}

testAdapter(); // Run the test.

/**
 * In this code, we have a Square class, an area function, and a SquareToRectangleAdapter class.
 * The area function expects a rectangle object with width and height properties, but we have a
 * square object with a side property. The adapter class allows us to use a square object where a
 * rectangle object is expected by creating an object with width and height properties that are
 * equal to the side property of the square.
 *
 * The test case is now using console.log statements instead of a testing library to check if the
 * adapter works as expected.
 */
