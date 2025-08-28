/**
 * The function can be written in just two lines of code.
 * The first line should just use the push() function to add the friend parameter to the array found in `user.data.friend.
 * The second line will return the modified array.
 * Remember that user must be referenced with the first parameter given to the addFriend() function.
 */

let user = {
    name: 'Kenneth',
    age: 28,
    data: {
        username: 'kennethCodesAllDay',
        joinDate: 'March 26, 2016',
        organization: 'freeCodeCamp',
        friends: ['Sam', 'Kira', 'Tomo'],
        location: {
            city: 'San Francisco',
            state: 'CA',
            country: 'USA',
        },
    },
};

function addFriend(userObj, friend) {
    userObj.data.friends.push(friend);
    return userObj.data.friends;
}

console.log(addFriend(user, 'Pete'));
