/**
 * Use Inheritance So You Don't Repeat Yourself
 * There's a principle in programming called Don't Repeat Yourself (DRY).
 * The reason repeated code is a problem is because any change requires fixing code in multiple places.
 * This usually means more work for programmers and more room for errors.
 * Notice in the example below that the describe method is shared by Bird and Dog:

Bird.prototype = {
  constructor: Bird,
  describe: function () {
    console.log("My name is " + this.name);
  },
};

Dog.prototype = {
  constructor: Dog,
  describe: function () {
    console.log("My name is " + this.name);
  },
};

 * The describe method is repeated in two places. The code can be edited to follow the DRY principle by creating a supertype (or parent) called Animal:
 */

function Animal() {}

Animal.prototype = {
    constructor: Animal,
    describe: function () {
        console.log('My name is ' + this.name);
    },
    eat: function () {
        console.log('nom nom nom');
    },
};

/**
 * Since Animal includes the describe method, you can remove it from Bird and Dog:
 */
function Bird() {}
Bird.prototype = {
    constructor: Bird,
};

function Dog() {}

Dog.prototype = {
    constructor: Dog,
};

// Another example

function Cat(name) {
    this.name = name;
}

Cat.prototype = {
    constructor: Cat,
};

function Bear(name) {
    this.name = name;
}

Bear.prototype = {
    constructor: Bear,
};

/**
 * Inherit Behaviors from a Supertype
 */

let beagle = Object.create(Animal.prototype);

/**
 * Set the Child's Prototype to an Instance of the Parent
 * set the prototype of the subtype (or child)—in this case, Bird—to be an instance of Animal.
 */

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);
/**
 * Remember that the prototype is like the "recipe" for creating an object.
 * In a way, the recipe for Bird now includes all the key "ingredients" from Animal.
 */

/**
 * Reset an Inherited Constructor Property
 * When an object inherits its prototype from another object, it also inherits the supertype's constructor property.
 */

let duck = new Bird();
duck.constructor;

/**
 * But duck and all instances of Bird should show that they were constructed by Bird and not Animal.
 * To do so, you can manually set the constructor property of Bird to the Bird object:
 */

Bird.prototype.constructor = Bird;
duck.constructor;

/**
 * Add Methods After Inheritance
 * A constructor function that inherits its prototype object from a supertype constructor function can still have its own methods in addition to inherited methods.
 * In addition to what is inherited from Animal, you want to add behavior that is unique to Bird objects.
 * Here, Bird will get a fly() function. Functions are added to Bird's prototype the same way as any constructor function:
 */

Bird.prototype.fly = function () {
    console.log("I'm flying!");
};

/**
 * Now instances of Bird will have both eat() and fly() methods:
 */

let duck2 = new Bird();
duck2.eat(); // would display the string nom nom nom in the console
duck2.fly(); // would display the string I'm flying!

Dog.prototype.bark = function () {
    console.log('Woof!');
};

let beagle2 = new Dog();

beagle2.eat(); // Should print "nom nom nom"
beagle2.bark(); // Should print "Woof!"

/**
 * It's possible to override an inherited method.
 * It's done the same way - by adding a method to `ChildObject.prototype` using the same method name as the one to override.
 * Here's an example of Bird overriding the eat() method inherited from Animal:
 */

function Animal() {}
Animal.prototype.eat = function () {
    return 'nom nom nom';
};
function Bird() {}

Bird.prototype = Object.create(Animal.prototype);

Bird.prototype.eat = function () {
    return 'peck peck peck';
};

/**
 * Use a Mixin to Add Common Behavior Between Unrelated Objects
 * As you have seen, behavior is shared through inheritance.
 * However, there are cases when inheritance is not the best solution.
 * Inheritance does not work well for unrelated objects like Bird and Airplane.
 * They can both fly, but a Bird is not a type of Airplane and vice versa.
 * For unrelated objects, it's better to use mixins. A mixin allows other objects to use a collection of functions.
 */

let flyMixin = function (obj) {
    obj.fly = function () {
        console.log('Flying, wooosh!');
    };
};
