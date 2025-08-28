const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    },
};

for (let key in circle) {
    console.log(key, circle[key]);
}
// for..of loops can only be use  with iterables such as arrays and maps
// => objects are not iterables
// so in order to make the Object iterable we use Object.keys

for (let key of Object.keys(circle)) {
    console.log(key);
}

for (entry of Object.entries(circle)) {
    console.log(entry);
}

// check if property exits in an object
if ('radius' in circle) {
    console.log('yes, radius property exists');
}
