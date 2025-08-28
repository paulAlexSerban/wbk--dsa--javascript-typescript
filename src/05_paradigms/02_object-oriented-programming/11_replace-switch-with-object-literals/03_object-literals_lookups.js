/**
 * We use Objects all the time, either as constructors or literals.
 * Often, we use them for Object lookup purposes, to get values from Object properties.
 */

const getDrink = (type) => {
    const drinks = {
        coke: 'Coke',
        pepsi: 'Pepsi',
        lemonade: 'Lemonade',
        default: 'Default item',
    };

    return `The drink I chose was ${drinks[type] || drinks['default']} - v1`;
};

console.log(getDrink('coke'));

/**
 * We’ve saved a few lines of code from the switch, and to me the data
 * is a lot cleaner in presentation. We can even simplify it further, without a default case:
 */

function getDrink_v2(type) {
    return `The drink I chose was ${
        {
            coke: 'Coke',
            pepsi: 'Pepsi',
            lemonade: 'Lemonade',
        }[type]
    } - v2`;
}

console.log(getDrink_v2('coke'));

/**
 * We might, however, need more complex code than a String, which could hang inside a function.
 * For sake of brevity and easy to understand examples, I’ll just return the above
 * strings from the newly created function:
 */

const getDrink_v3 = (type) => {
    const drinks = {
        coke: () => {
            return 'Coke';
        },
        pepsi: () => {
            return 'Pepsi';
        },
        lemonade: () => {
            return 'Lemonade';
        },
    };
    return drinks[type]();
};

console.log(getDrink_v3('coke'), 'v3'); // 'Coke'

/**
 * Nice and easy, but this doesn’t cater for a “default” case, so we can create that easily:
 */

const getDrink_v4 = (type) => {
    const drinks = {
        coke: () => 'Coke',
        pepsi: () => 'Pepsi',
        lemonade: () => 'Lemonade',
        default: () => 'Default item',
    };
    return (drinks[type] || drinks['default'])();
};

console.log(getDrink_v4('dr pepper')); // 'Default item'

/**
 * This wraps the two Object lookups inside parenthesis ( ), treating them as an expression.
 * The result of the expression is then invoked. If drinks[type] isn’t found in the lookup,
 * it’ll default to drinks['default'], simple!
 */

/**
 * We don’t have to always return inside the function either, we can change references to any variable then return it:
 */

const getDrink_v5 = (type) => {
    let drink;
    const drinks = {
        coke: () => (drink = 'Coke'),
        pepsi: () => (drink = 'Pepsi'),
        lemonade: () => (drink = 'Lemonade'),
        default: () => (drink = 'Default item'),
    };

    // invoke it
    (drinks[type] || drinks['default'])();

    // return a String with chosen drink
    return `The drink I chose was ${drink}`;
};

// The drink I chose was Coke
console.log(getDrink_v5('coke'));

/**
 * These are very basic solutions, and the Object literals hold a function
 * that returns a String, in the case you only need a String,
 * you could use a String as the key’s value - some of the time the
 * functions will contain logic, which will get returned from the function.
 * If you’re mixing functions with strings, it might be easier to use a function
 * at all times to save looking up the type and invoking
 * if it’s a function - we don’t want to attempt invoking a String.
 */
