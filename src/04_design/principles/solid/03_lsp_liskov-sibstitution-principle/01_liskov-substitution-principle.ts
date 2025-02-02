/**
 * LSP: Liskov Substitution Principle
 * - sub-types must be substitutable for their base types
 * - if you have some method that takes some base type, it should be able to take a derived type as well
 * - concrete implementations must adhere to the expected interface contracts
 * - if Bird is a class and Duck is a sub-class, wherever bird is used, Duc can also be used
 */

class Rectangle {
    private _width: number;
    private _height: number;

    constructor(_width: number, _height: number) {
        this._width = _width;
        this._height = _height;
    }

    get width(): number {
        return this._width;
    }

    get height(): number {
        return this._height;
    }

    set height(value: number) {
        this._height = value;
    }

    set width(value: number) {
        this._width = value;
    }

    get area() {
        return this.width * this.height;
    }

    toString() {
        return `Rectangle: ${this.width}x${this.height}`;
    }

    isSquare() {
        return this.width === this.height;
    }
}

const rectangle = new Rectangle(2, 3);
console.log(rectangle.area);
console.log(rectangle.toString());
console.log(rectangle.isSquare());

const useIt = (rc: Rectangle) => {
    const width = rc.width;
    rc.height = 10;
    console.log(`Expected area of ${10 * width}, got ${rc.area}`);
}
