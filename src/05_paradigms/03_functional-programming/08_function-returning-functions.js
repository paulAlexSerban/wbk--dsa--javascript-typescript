const greet = (greeting) => {
    return (name) => {
        console.log(`${greeting} ${name}`);
    };
};

const greetHey = greet('Hey');
greetHey('Jonas');

greet('Hey')('Paul');

const greeterArr = (greeting) => (name) => console.log(`${greeting} ${name}`);
greeterArr('Hello')('Array John');
