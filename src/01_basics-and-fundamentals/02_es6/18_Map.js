const mapData = new Map([
    [10, 'ten'],
    ['isMarried', false],
]);

mapData.set('name', 'John');
mapData.set(true, 'Yes');
// console.log(mapData);
/**
Map {
  10 => 'ten',
  'isMarried' => false,
  'name' => 'John',
  true => 'Yes'
}
 */

const obj = {};
mapData.set(obj, 'person');
// console.log(mapData);

mapData.clear();
// console.log(mapData); // Map {}

mapData.delete(10);
// console.log(mapData.has(obj)); // false

// console.log(mapData.get("name")); // undefined
// console.log(mapData); // Map {}
// console.log(mapData.size); // 0

mapData.set('name', 'John');
mapData.set(true, 'Yes');

mapData.forEach((value, key) => {
    console.log(value, key);
});

for (let [key, value] of mapData.entries()) {
    console.log(key, value);
}

const [x, y, z] = [1, NaN, 3];
const LANGUAGE = {
    name: 'JavaScript',
    version: 'ES6',
};

const add = (a, b) => a + b;
const str1 = 'build interactive websites';
const str2 = 'NaN is not equal to itself, but this changes when it comes to Maps';
const arr = [2, 3];
let myMap = new Map();
myMap.set(x, z);
console.log(myMap); // Map { 1 => 3 }
myMap.set(LANGUAGE, str1);
console.log(myMap); // Map { name: 'JavaScript', version: 'ES6' } => 'build interactive websites';
myMap.set(add, arr);
console.log(myMap); // Map {[Function: add] => [ 2, 3 ]}
myMap.set(y, str2);
console.log(myMap); // Map {NaN => 'NaN is not equal to itself, but this changes when it comes to Maps'}
console.log(myMap.get(x)); // looks for te key and returns the value => 3
console.log(myMap.has(x)); // looks for te key and returns if it exists => true
console.log(
    myMap.has({
        name: 'JavaScript',
        version: 'ES6',
    })
); // returns false as object can't be compared and are not equal
// each object creates a new reference in JS
console.log(myMap.get(NaN));
console.log(myMap.has(NaN));
console.log(y === NaN); // NaN is not equal to itself, but this changes when it comes to maps

for (const [key, value] of myMap) {
    console.log(`key: ${key} -> value: ${value}`);
}

// iterators
const e = myMap.entries();
console.log(e);

const k = myMap.keys();
console.log(k);

const v = myMap.values();
console.log(v);

console.log(k.next());
