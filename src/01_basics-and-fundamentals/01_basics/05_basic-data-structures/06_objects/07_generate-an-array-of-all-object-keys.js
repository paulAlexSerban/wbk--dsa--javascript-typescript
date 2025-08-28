/**
 * We can generate an array which contains all the keys stored in an object using the Object.keys() method and passing in an object as the argument.
 * This will return an array with strings representing each property in the object.
 * Again, there will be no specific order to the entries in the array.
 */

let users = {
    Alan: {
        age: 27,
        online: false,
    },
    Jeff: {
        age: 32,
        online: true,
    },
    Sarah: {
        age: 48,
        online: false,
    },
    Ryan: {
        age: 19,
        online: true,
    },
};

function getArrayOfUsers(obj) {
    return Object.keys(obj);
}

console.log(getArrayOfUsers(users));
