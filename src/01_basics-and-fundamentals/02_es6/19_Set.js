/**
 * a set is an object storing a collection of unique values
 * NOTE: even if you add a value twice, we get a set of unique values
 */

const setData = new Set(['John', 10, false, { firstName: 'Bob' }, 'John']);

// console.log(setData.size); // 4

setData.add('Nick');
// console.log(setData.size); // 5

for (let value of setData.values()) {
    console.log(value);
}
// /**
// John
// 10
// false
// { firstName: 'Bob' }
// Nick
//  */

for (let value of setData.keys()) {
    console.log(value);
}
// /**
// John
// 10
// false
// { firstName: 'Bob' }
// Nick
//  */

for (let value of setData.entries()) {
    console.log(value);
}
// /**
// [ 'John', 'John' ]
// [ 10, 10 ]
// [ false, false ]
// [ { firstName: 'Bob' }, { firstName: 'Bob' } ]
// [ 'Nick', 'Nick' ]
//  */
