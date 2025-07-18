const showStringProperties = (obj) => {
    for (let key in obj) {
        if (typeof obj[key] === 'string') {
            console.log(key, obj[key]);
        }
    }
};

const movies = {
    title: 'test title',
    releaseYear: 2014,
    rating: 4,
    director: 'test director',
};

showStringProperties(movies);
