const showBumbers = (limit) => {
    // loop through numbers from 0 to limit
    for (let i = 0; i <= limit; i++) {
        // if number is even, print "even"
        const message = i % 2 === 0 ? 'even' : 'odd';
        console.log(i, message);
    }
};

// show numbers from 0 to 10
showBumbers(10);
