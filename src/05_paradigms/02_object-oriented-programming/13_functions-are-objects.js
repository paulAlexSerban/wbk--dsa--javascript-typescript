function Circle(radius) {
    this.radius = radius;
    this.draw = () => console.log('draw');
}

const another = new Circle(1);

// NOTE - in JavaScript functions are objects
console.log('Circle.name: ', Circle.name);
console.log('Circle.length: ', Circle.length);
console.log('Circle.constructor: ', Circle.constructor);

// another way to create an object using a function
// `new Circle(1)` SAME AS `Circle.call({}, 1)`
Circle.call({}, 1);

const argsArray = [1];
Circle.apply({}, argsArray);
