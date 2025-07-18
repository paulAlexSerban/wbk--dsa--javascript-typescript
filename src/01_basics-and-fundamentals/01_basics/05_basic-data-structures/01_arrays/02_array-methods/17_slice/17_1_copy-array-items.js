/**
 * slice() copies or extracts a given number of elements to a new array, leaving the array it is called upon untouched
 * slice() takes only 2 parameters — the first is the index at which to begin extraction, and the second is the index at which to stop extraction (extraction will occur up to, but not including the element at this index).
 */

let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];
let todaysWeather = weatherConditions.slice(1, 3);

function forecast(arr) {
    arr = arr.slice(2, 4);
    return arr;
}

console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));
