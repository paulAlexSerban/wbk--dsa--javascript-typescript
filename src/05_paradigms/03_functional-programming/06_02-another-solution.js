var s = [23, 65, 98, 5];

Array.prototype.myMap = function (callback) {
    var newArray = [];
    this.forEach((a) => newArray.push(callback(a)));
    return newArray;
};

var new_s = s.myMap(function (item) {
    return item * 2;
});

/**
 * Code Explanation
 *
 * Solve this challenge using this and the forEach method
 * The this keyword gives us access to the object we are calling myMap on.
 * From there we can use the forEach method to add elements to already declared empty array as we modify each element with the given callback method.
 */
