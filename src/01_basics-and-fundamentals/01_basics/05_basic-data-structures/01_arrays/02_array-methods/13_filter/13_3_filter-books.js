const books = [
    {
        title: 'Good Omens',
        authors: ['Terry Pratchett', 'Neil Gaiman'],
        rating: 4.25,
        genres: ['fiction', 'fantasy'],
    },
    {
        title: 'Changing My Mind',
        authors: ['Zadie Smith'],
        rating: 3.83,
        genres: ['nonfiction', 'essays'],
    },
    {
        title: 'Bone: The Complete Edition',
        authors: ['Jeff Smith'],
        rating: 4.42,
        genres: ['fiction', 'graphic novel', 'fantasy'],
    },
    {
        title: 'American Gods',
        authors: ['Neil Gaiman'],
        rating: 4.11,
        genres: ['fiction', 'fantasy'],
    },
    {
        title: 'A Gentleman in Moscow',
        authors: ['Amor Towles'],
        rating: 4.36,
        genres: ['fiction', 'historical fiction'],
    },
    {
        title: 'The Name of the Wind',
        authors: ['Patrick Rothfuss'],
        rating: 4.54,
        genres: ['fiction', 'fantasy'],
    },
    {
        title: 'The Overstory',
        authors: ['Richard Powers'],
        rating: 4.19,
        genres: ['fiction', 'short stories'],
    },
    {
        title: 'The Way of Kings',
        authors: ['Brandon Sanderson'],
        rating: 4.65,
        genres: ['fantasy', 'epic'],
    },
    {
        title: 'Lord of the flies',
        authors: ['William Golding'],
        rating: 3.67,
        genres: ['fiction'],
    },
];

//All books rated over 4.3:
const goodBooks = books.filter((b) => b.rating > 4.3);
console.log(goodBooks);

// All books with fantasy as a genre:
const fantasyBooks = books.filter((book) => book.genres.includes('fantasy'));
console.log(fantasyBooks);

// all books that are either short stories or essays:
const shortForm = books.filter((book) => book.genres.includes('short stories') || book.genres.includes('essays'));
console.log(shortForm);

// Simple search functionality:
const query = 'The';
const results = books.filter((book) => {
    const title = book.title.toLowerCase();
    return title.includes(query.toLowerCase());
});
console.log(query);
