/**
 * `this` refers to the object that the method is associated with: duck.
 * If the object's name is changed to mallard, it is not necessary to find all the references to duck in the code. It makes the code reusable and easier to read.
 */

let duck = {
    name: 'Aflac',
    numLegs: 2,
    sayName: function () {
        return 'The name of this duck is ' + this.name + '.';
    },
};

duck.sayName();

let dog = {
    name: 'Spot',
    numLegs: 4,
    sayLegs: function () {
        return 'This dog has ' + this.numLegs + ' legs.';
    },
};

dog.sayLegs();

function sayHi() {
    console.log('HI');
    console.log(this);
}

const greet = function () {
    console.log(this);
};

function sayHi() {
    console.log('HI');
    //this refers to the window (global scope object in the browser)
    console.log(this);
}

const person = {
    first: 'Cherilyn',
    last: 'Sarkisian',
    nickName: 'Cher',
    fullName() {
        //In a method, this refers to the object the method "lives" in
        const { first, last, nickName } = this;
        return `${first} ${last} AKA ${nickName}`;
    },
    printBio() {
        console.log(this);
        const fullName = this.fullName();
        console.log(`${fullName} is a person!`);
    },
    laugh: () => {
        //Arrow functions don't get their 'own' this.
        console.log(this);
        console.log(`${this.nickName} says HAHAHAHAH`);
    },
};

// INVOCATION CONTEXT MATTERS!!!
person.printBio(); //THIS refers to the person object

const printBio = person.printBio;
printBio(); //THIS refers to window object
