/**
 * The given code is an example of the bridge design pattern, which is used to
 * decouple an abstraction from its implementation, enabling both to vary independently.
 */

// The base Shape class represents the abstraction part of the Bridge pattern.
class Shape {
    // The constructor takes a renderer object and an optional name for the shape.
    constructor(renderer, name = null) {
        this.renderer = renderer; // Assigns the renderer object to the instance.
        this.name = name; // Assigns the name to the instance.
    }

    // The toString method returns a string representation of the shape being drawn.
    toString() {
        return `Drawing ${this.name} as ${this.renderer.whatToRenderAs}`;
    }
}

// Triangle class represents a specific shape (triangle) that extends the Shape class.
class Triangle extends Shape {
    // The constructor takes a renderer object.
    constructor(renderer) {
        super(renderer, 'triangle'); // Calls the parent class constructor with the renderer and the name 'triangle'.
    }
}

// Square class represents a specific shape (square) that extends the Shape class.
class Square extends Shape {
    // The constructor takes a renderer object.
    constructor(renderer) {
        super(renderer, 'square'); // Calls the parent class constructor with the renderer and the name 'square'.
    }
}

// RasterRenderer class represents one type of renderer (raster).
class RasterRenderer {
    // Getter method that returns the rendering method as a string ('pixels').
    get whatToRenderAs() {
        return 'pixels';
    }
}

// VectorRenderer class represents another type of renderer (vector).
class VectorRenderer {
    // Getter method that returns the rendering method as a string ('lines').
    get whatToRenderAs() {
        return 'lines';
    }
}

// Test case 1: Render a vector square.
{
    let sq = new Square(new VectorRenderer());
    console.log(sq.toString() === 'Drawing square as lines' ? 'Passed' : 'Failed');
}

// Test case 2: Render a raster triangle.
{
    let sq = new Triangle(new RasterRenderer());
    console.log(sq.toString() === 'Drawing triangle as pixels' ? 'Passed' : 'Failed');
}
