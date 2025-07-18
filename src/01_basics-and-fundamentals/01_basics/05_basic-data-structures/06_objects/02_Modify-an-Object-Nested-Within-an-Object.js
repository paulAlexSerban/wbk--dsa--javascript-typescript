/**
 * Modify an Object Nested Within an Object
 * Object properties can be nested to an arbitrary depth, and their values can be any type of data supported by JavaScript, including arrays and even other objects.
 */

let nestedObject = {
    id: 28802695164,
    date: 'December 31, 2016',
    data: {
        totalUsers: 99,
        online: 80,
        onlineStatus: {
            active: 67,
            away: 13,
            busy: 8,
        },
    },
};

nestedObject.data.onlineStatus.busy = 10;
