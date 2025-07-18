/**
 * TASK
 * `getArea(length, width)` : Calculate and return the area of a rectangle

 * @param { Number } length 
 * @param { Number } width 
 * @returns the area of a rectangle
 */

function getArea(length, width) {
    let area;
    return 1 <= length && 1 <= width && 1000 >= length && 1000 >= width
        ? (area = length.toFixed(3) * width.toFixed(3))
        : null;
}

/**
 * TASK
 * `getPerimeter(length, width)` : Calculate and return the perimeter of a rectangle
 * @param { Number } length
 * @param { Number } width
 * @returns the perimeter of a rectangle
 */

function getPerimeter(length, width) {
    let perimeter;
    return 1 <= length && 1 <= width && 1000 >= length && 1000 >= width
        ? (perimeter = length.toFixed(3) * 2 + width.toFixed(3) * 2)
        : null;
}

console.log(`The AREA is: ${getArea(12, 10)}`);
console.log(`The PERIMETER is: ${getPerimeter(30, 10)}`);
