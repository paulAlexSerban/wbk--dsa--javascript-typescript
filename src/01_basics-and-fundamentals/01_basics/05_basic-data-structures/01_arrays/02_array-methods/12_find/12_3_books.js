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
//Find first book w/ rating over 4.3
const goodBook = books.find((b) => b.rating >= 4.3);
console.log(goodBook);

//Find first book with Neil Gaiman as an author:
const neilBook = books.find((b) => b.authors.includes('Neil Gaiman'));
console.log(neilBook);
