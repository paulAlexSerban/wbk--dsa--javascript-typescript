const basket = ['apple', 'blueberry', 'bread'];

console.log(basket[Symbol.iterator]()); // array iterator

const iterator = basket[Symbol.iterator]();
// console.log(iterator.next()); // { value: 'apple', done: false }
// console.log(iterator.next()); // { value: 'blueberry', done: false }
// console.log(iterator.next()); // { value: 'bread', done: false }
// console.log(iterator.next()); // { value: undefined, done: true }

let iteration = iterator.next();
while (!iteration.done) {
    console.log(iteration.value);
    iteration = iterator.next();
}

// create custom iterator of an object
const obj = {
    *[Symbol.iterator]() {
        for (let i = 1; i < 3; i++) {
            yield i;
        }
    },
};
const it2 = obj[Symbol.iterator]();
console.log(it2.next()); // { value: 1, done: false }

// treat the obj objects as iterables
for (const x of obj) {
    console.log(x);
}
// OR

console.log([...obj]);

// Iterables are only iterated until all bindings are assigned.
const objOne = {
    *[Symbol.iterator]() {
        for (const v of [0, 1, 2, 3]) {
            console.log(v);
            yield v;
        }
    },
};
const [a, b] = objOne; // Only logs 0 and 1

// The rest binding is eagerly evaluated and creates a new array, instead of using the old iterable.
const objTwo = {
    *[Symbol.iterator]() {
        for (const v of [0, 1, 2, 3]) {
            console.log(v);
            yield v;
        }
    },
};
const [x, z, ...rest] = objTwo; // Logs 0 1 2 3
console.log(rest); // [2, 3] (an array)
