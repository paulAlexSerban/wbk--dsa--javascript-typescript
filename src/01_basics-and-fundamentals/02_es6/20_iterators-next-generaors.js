const BASKET = ['strawberry', 'apple', 'yogurt', 'bread'];

// for iteration
for (const x of BASKET) {
    console.log(x);
}

// an array is called an iterable because it defines its iteration when using loops
// .next() -> returns the next item in the sequence starting from the first one
// .next() return {value: , done: isLastItem ? true : false}

const arrIterator = BASKET.entries();
console.log(JSON.stringify(arrIterator.next())); // { value: [ 0, 'strawberry' ], done: false }
console.log(JSON.stringify(arrIterator.next())); // { value: [ 0, 'apple' ], done: false }
console.log(JSON.stringify(arrIterator.next())); // { value: [ 0, 'yogurt' ], done: false }
console.log(JSON.stringify(arrIterator.next())); // { value: [ 0, 'bread' ], done: false }
console.log(JSON.stringify(arrIterator.next())); // { value: [ 0, 'undefined' ], done: true }

const createIterator = (array = []) => {
    let index = 0;
    return {
        next() {
            if (index < array.length) {
                return {
                    value: array[index++],
                    done: false,
                };
            } else {
                return { done: true };
            }
        },
    };
};

const arrIt2 = createIterator(BASKET);
console.log(arrIt2.next());
console.log(arrIt2.next());
console.log(arrIt2.next());
console.log(arrIt2.next());
console.log(arrIt2.next());

// generator functions: factory of iterators

// the `*` (asterisk marks the declaration of an iterator generating function)
function* generateIterator() {
    console.log('running');
    yield 1; // pause generator

    console.log('running');
    yield 2;
}

const it = generateIterator();
console.log(it.next()); // { value: 1, done: false }
// running
console.log(it.next()); // { value: 2, done: false }
console.log(it.next()); // { value: undefined, done: true }
