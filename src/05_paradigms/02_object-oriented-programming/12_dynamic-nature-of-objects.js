// objects are dynamic, which means that you can always add new properties or methods to an object

const circle = {
    radius: 1,
};

// add properties or methods
circle.color = 'yellow';
circle.draw = () => {};

console.log(circle);

// delete properties or methods
delete circle.color;
delete circle.draw;
console.log(circle);

// even though it is a constant, we can not reassign the variable, but we can change properties of the object
