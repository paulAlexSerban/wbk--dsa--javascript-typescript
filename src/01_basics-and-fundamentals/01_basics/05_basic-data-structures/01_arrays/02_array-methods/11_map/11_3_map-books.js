/**
 * map()
 * - creates a new array with the result of calling a callback on every element oin the array
 */

const books = [
    {
        title: 'Good Omens',
        authors: ['Terry Pratchett', 'Neil Gaiman'],
        rating: 4.25,
    },
    {
        title: 'Bone: The Complete Edition',
        authors: ['Jeff Smith'],
        rating: 4.42,
    },
    {
        title: 'American Gods',
        authors: ['Neil Gaiman'],
        rating: 4.11,
    },
    {
        title: 'A Gentleman in Moscow',
        authors: ['Amor Towles'],
        rating: 4.36,
    },
];

const titles = books.map(function (b) {
    return b.title;
});
console.log(titles);
//["Good Omens", "Bone: The Complete Edition", "American Gods", "A Gentleman in Moscow"]
