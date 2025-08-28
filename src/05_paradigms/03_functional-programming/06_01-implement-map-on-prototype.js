/**
 * Implement map on a Prototype
 *
 * As you have seen from applying `Array.prototype.map()`, or simply `map()` earlier, the map method returns an array of the same length as the one it was called on.
 * It also doesn't alter the original array, as long as its callback function doesn't.
 *
 * In other words, map is a pure function, and its output depends solely on its inputs. Plus, it takes another function as its argument.
 * You might learn a lot about the map method if you implement your own version of it. It is recommended you use a for loop or `Array.prototype.forEach()`.
 */

var s = [23, 65, 98, 5];

Array.prototype.myMap = function (callback) {
    var newArray = [];
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i]));
    }
    return newArray;
};

var new_s = s.myMap(function (item) {
    return item * 2;
});

/**
 * Code Explanation
 * Solve this challenge using a “for” loop and this
 * The use of a “for” loop allows us to apply the callback function to every item in the Global array and then push the modified items to the empty new array that is returned in the end.
 */
