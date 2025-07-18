let movies = ['The Fantastic Mr. Fox', 'Mr. and Mrs. Smith', 'Mrs. Doubtfire', 'Mr. Deeds'];

// Find first movie that includes 'Mrs' in its title:
const movie = movies.find((movie) => {
    return movie.includes('Mrs');
});
console.log(movie);

//Find first movie that begins with 'Mrs':
const movie2 = movies.find((m) => m.indexOf('Mrs') === 0);
console.log(movie2);
