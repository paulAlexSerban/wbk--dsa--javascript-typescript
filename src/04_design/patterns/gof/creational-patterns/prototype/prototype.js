// Define a Point class to represent a point with x and y coordinates
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

// Define a Line class to represent a line with a start and end point
class Line {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }

    // Implement a deepCopy method to create a new instance of Line with a copy of the start and end points
    deepCopy() {
        let newStart = new Point(this.start.x, this.start.y);
        let newEnd = new Point(this.end.x, this.end.y);
        return new Line(newStart, newEnd);
    }
}

// Test the prototype design pattern using console logs

// Create a new Line instance with start and end points
let line1 = new Line(new Point(3, 3), new Point(10, 10));

// Create a deep copy of the Line instance
let line2 = line1.deepCopy();

// Modify the start and end points of the original Line instance
line1.start.x = line1.end.x = line1.end.x = line1.end.y = 0;

// Log the expected and actual values for the start and end points of the copied Line instance
console.log('Expected line2 start x:', 3, 'Actual:', line2.start.x);
console.log('Expected line2 start y:', 3, 'Actual:', line2.start.y);
console.log('Expected line2 end x:', 10, 'Actual:', line2.end.x);
console.log('Expected line2 end y:', 10, 'Actual:', line2.end.y);

/**
 * This code defines two classes, Point and Line, and demonstrates the prototype design pattern
 * using a deepCopy method in the Line class. The test case creates a new Line instance, makes a
 * deep copy of it, modifies the original Line instance, and logs the expected and actual values
 * for the start and end points of the copied Line instance.
 */
