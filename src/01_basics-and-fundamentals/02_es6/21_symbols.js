// why do we need symbols
const feature1 = 'feature';
const feature2 = 'feature';
const OFF_STATE = 'off';
const ON_STATE = 'on';

let car = {
    make: 'audi',
    [feature1]: 'cruise-control',
    [feature2]: 'air-conditioning',
    state: 'on',
    speed: 20,
    turnOn() {
        this.state = 'on';
    },
    turnOff() {
        this.state = 'off';
    },
    accelerate() {
        if (this.state === 'on') {
            this.speed += 10;
        }
    },
};

console.log(car);
/**
{ make: 'audi',
  feature: 'air-conditioning', // only one feature is listed and this can be solved by making the object key unique
  state: 'on',
  speed: 20,
  turnOn: [Function: turnOn],
  turnOff: [Function: turnOff],
  accelerate: [Function: accelerate] }
 */
car.accelerate();
console.log(car);
/**
 * Symbols are new in ES6 and they are a primitive type
 */

const mySymbol = Symbol('Optional symbol description');
console.log(mySymbol); // Symbol(Optional symbol description)
console.log(mySymbol.toString()); // Symbol(Optional symbol description)

const symbol1 = Symbol('a');
const symbol2 = Symbol('b');
console.log(symbol1 === symbol2); // false - symbols are always unique
console.log(typeof symbol1); // symbol

// why do we need symbols
const feature1s = Symbol('feature');
const feature2s = Symbol('feature');
const OFF_STATEs = Symbol('off');
const ON_STATEs = Symbol('on');

let cars = {
    make: 'audi',
    [feature1s]: 'cruise-control',
    [feature2s]: 'air-conditioning',
    state: ON_STATEs,
    speed: 20,
    turnOn() {
        this.state = ON_STATEs;
    },
    turnOff() {
        this.state = OFF_STATEs;
    },
    accelerate() {
        if (this.state === ON_STATEs) {
            this.speed += 10;
        }
    },
};
console.log(cars);
console.log(Object.keys(cars)); //[ 'make', 'state', 'speed', 'turnOn', 'turnOff', 'accelerate' ]

for (const x in cars) {
    console.log(x);
}

/**
make
state
speed
turnOn
turnOff
accelerate
 */
