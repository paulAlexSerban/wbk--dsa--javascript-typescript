/**
 * With switch cases, we can let them fall through (which means more
 * than one case can apply to a specific piece of code):
 */

const type = 'coke';
let snack;

switch (type) {
    case 'coke':
    case 'pepsi':
        snack = 'Drink';
        break;
    case 'cookies':
    case 'crisps':
        snack = 'Food';
        break;
    default:
        drink = 'Unknown type!';
}
console.log(snack); // 'Drink'

/**
 * We let coke and pepsi “fall through” by not adding a break statement.
 * Doing this for Object Literals is simple and more declarative -
 * as well as being less prone to error. Our code suddenly becomes
 * much more structured, readable and reusable:
 */

const getSnack = (type) => {
    let snack;
    const isDrink = () => (snack = 'Drink');

    const isFood = () => (snack = 'Food');

    const snacks = {
        coke: isDrink,
        pepsi: isDrink,
        cookies: isFood,
        crisps: isFood,
    };

    return snacks[type]();
};

console.log(getSnack('coke')); // 'Drink'
