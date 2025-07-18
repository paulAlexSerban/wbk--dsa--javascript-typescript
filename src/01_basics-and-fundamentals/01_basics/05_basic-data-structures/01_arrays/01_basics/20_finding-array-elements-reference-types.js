const courses = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' },
    { id: 3, name: 'c' },
    { id: 4, name: 'd' },
    { id: 5, name: 'e' },
];

console.log(courses.includes({ id: 1, name: 'a' })); // => FALSE because there are two different references - not the right way

const courseA = courses.find((course) => {
    return course.name === 'a'; // returns the actual object if found or undefined
});

console.log(courseA);
