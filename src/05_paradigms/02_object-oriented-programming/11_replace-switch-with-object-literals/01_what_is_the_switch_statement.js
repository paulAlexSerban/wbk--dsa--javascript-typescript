/**
 * What switch does is take input and provide an output, such as code being run.
 */

const type = 'coke';
let drink;

switch (type) {
    case 'coke':
        drink = 'Coke';
        break;
    case 'pepsi':
        drink = 'Pepsi';
        break;
    default:
        drink = 'Unknown drink!';
}

console.log(drink); // 'Coke'

/**
 * It’s similar to `if` and `else` statements, but it should evaluate a single value
 * - inside the switch we use a case to evaluate against each value.
 *
 * When you start seeing lots of else if statements, something is likely wrong
 * and generally you should use something like switch as it’s more suited for
 * the purpose and intention. Here’s some else if abuse:
 */

function getDrink(type) {
    if (type === 'coke') {
        type = 'Coke';
    } else if (type === 'pepsi') {
        type = 'Pepsi';
    } else if (type === 'mountain dew') {
        type = 'Mountain Dew';
    } else if (type === 'lemonade') {
        type = 'Lemonade';
    } else if (type === 'fanta') {
        type = 'Fanta';
    } else {
        // acts as our "default"
        type = 'Unknown drink!';
    }
    return "You've picked a " + type;
}

/**
 * This implementation is too loose, there is room for error, plus it’s a very verbose syntax to keep repeating yourself.
 * There’s also the room for hacks as you can evaluate multiple expressions inside each else if,
 * such as `else if (type === 'coke' &amp;&amp; somethingElse !== 'apples')`.
 * The switch was the best tool for the job,
 * albeit you need to keep adding `break;` statements to prevent cases falling through, one of its many issues.
 */
