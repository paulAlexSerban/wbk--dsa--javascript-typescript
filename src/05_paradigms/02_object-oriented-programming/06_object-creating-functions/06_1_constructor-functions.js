/******************************************************************
 * Constructors are functions that create new objects - their job is to construct or create an object.
 * They define properties and behaviors that will belong to the new object.
 * Think of them as a blueprint for the creation of new objects.
 * This pattern is familiar to programmers who know C++ or Java;
 *
 * Constructors follow a few conventions:
 * - constructors are defined with a capitalized name to distinguish them from other functions that are not constructors.
 * - constructors use the keyword this to set properties of the object they will create.
 * - inside the constructor, this refers to the new object it will create.
 * - constructors define properties and behaviors instead of returning a value as other functions might.
 * - `this` inside the constructor always refers to the object being created.
 * - notice that the new operator is used when calling a constructor.
 * - this tells JavaScript to create a new instance of Bird called blueBird.
 * - without the new operator, this inside the constructor would not point to the newly created object, giving unexpected results.
 *****************************************************************/

/****************************************************************
 * Verify an Object's Constructor with `instanceof`
 *
 * - Anytime a constructor function creates a new object, that
 * object is said to be an instance of its constructor.
 * - JavaScript gives a convenient way to verify this with the
 * instanceof operator.
 * - `instanceof` allows you to compare an object to a constructor,
 * returning true or false based on whether or not that object
 * was created with the constructor. Here's an example:
 ****************************************************************/

let Bird = function (name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 2;
};

let crow = new Bird('Alexis', 'black');
let duck = new Bird('Albert', 'blue');

crow instanceof Bird;

/******************************************************************
 * Iterate Object Properties
 *****************************************************************/

function Dog(name) {
    this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog('Snoopy');
let ownProps = [];
let prototypeProps = [];

for (let property in beagle) {
    if (Dog.hasOwnProperty(property)) {
        ownProps.push(property);
    } else {
        prototypeProps.push(property);
    }
}
console.log(ownProps); // ['name']
console.log(prototypeProps); // ['numLegs']

/******************************************************************
 * Understand the Constructor Property
 * - There is a special constructor property located on the
 * object instances
 * - every object in JS has a property called `constructor`,
 * it references a function that was used to create the object
 *****************************************************************/

console.log(duck.constructor === Bird);
console.log(beagle.constructor === Dog);

/******************************************************************
 * - Both of these `console.log` calls would display true in the
 * console.
 * - Note that the constructor property is a reference to the
 * constructor function that created the instance.
 * - The advantage of the constructor property is that it's
 * possible to check for this property to find out what kind of
 * object it is.
 * Here's an example of how this could be used:
 *****************************************************************/

function joinBirdFraternity(candidate) {
    if (candidate.constructor === Bird) {
        return true;
    } else {
        return false;
    }
}

/******************************************************************
 * Note: Since the constructor property can be overwritten it’s
 * generally better to use the `instanceof` method to check the
 * type of an object.
 *****************************************************************/

/******************************************************************
 * Remember to Set the Constructor Property when Changing
 * the Prototype
 * There is one crucial side effect of manually setting the
 * prototype to a new object.
 * It erases the constructor property!
 * This property can be used to check which constructor function
 * created the instance, but since the property has been
 * overwritten, it now gives false results:
 *****************************************************************/

duck.constructor === Bird;
duck.constructor === Object;
duck instanceof Bird;

/******************************************************************
 * In order, these expressions would evaluate to false, true,
 * and true.
 * To fix this, whenever a prototype is manually set to a
 * new object, remember to define the constructor property:
 *****************************************************************/

Bird.prototype = {
    constructor: Bird,
    numLegs: 2,
    eat: function () {
        console.log('nom nom nom');
    },
    describe: function () {
        console.log('My name is ' + this.name);
    },
};

/******************************************************************
 * Understand Where an Object’s Prototype Comes From
 * Just like people inherit genes from their parents, an object
 * inherits its prototype directly from the constructor
 * function that created it.
 * For example, here the Bird constructor creates the duck object:
 * let duck = new Bird("Donald");
 * duck inherits its prototype from the Bird constructor function.
 * You can show this relationship with the isPrototypeOf method:
 *****************************************************************/

Bird.prototype.isPrototypeOf(duck); // TRUE

/******************************************************************
 * Understand the Prototype Chain
 * All objects in JavaScript (with a few exceptions)
 * have a prototype.
 * Also, an object’s prototype itself is an object.
 *****************************************************************/

typeof Bird.prototype;

/******************************************************************
 * Because a prototype is an object, a prototype can have its own
 * prototype! In this case, the prototype of Bird.prototype
 * is Object.prototype:
 *****************************************************************/

Object.prototype.isPrototypeOf(Bird.prototype);

/******************************************************************
 * How is this useful? You may recall the hasOwnProperty method
 * from a previous challenge:
 *****************************************************************/

duck.hasOwnProperty('name');

/******************************************************************
 * The hasOwnProperty method is defined in Object.prototype,
 * which can be accessed by Bird.prototype, which can then
 * be accessed by duck.
 * This is an example of the prototype chain.
 * In this prototype chain, Bird is the supertype for duck,
 * while duck is the subtype.
 * Object is a supertype for both Bird and duck. Object is a
 * supertype for all objects in JavaScript.
 * Therefore, any object can use the hasOwnProperty method.
 *****************************************************************/

/******************************************************************
 * EXAMPLES
 *******************************************************************/

function Circle(radius) {
    this.radius = radius;
    this.draw = () => {
        console.log('draw');
    };
}

const circle = new Circle(1);
console.log(circle);
