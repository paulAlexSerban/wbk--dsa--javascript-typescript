/**
 *  JavaScript provides us with two different ways to do this. One uses the `hasOwnProperty()` method and the other uses the `in` keyword.
 */

let users = {
    Alan: {
        age: 27,
        online: true,
    },
    Jeff: {
        age: 32,
        online: true,
    },
    Sarah: {
        age: 48,
        online: true,
    },
    Ryan: {
        age: 19,
        online: true,
    },
};

users.hasOwnProperty('Alan');
'Alan' in users;

function isEveryoneHere_v1(userObj) {
    if (
        userObj.hasOwnProperty('Alan') &&
        userObj.hasOwnProperty('Jeff') &&
        userObj.hasOwnProperty('Sarah') &&
        userObj.hasOwnProperty('Ryan')
    ) {
        return true;
    }
    return false;
}

function isEveryoneHere_v2(userObj) {
    return ['Alan', 'Jeff', 'Sarah', 'Ryan'].every((name) => userObj.hasOwnProperty(name));
}
