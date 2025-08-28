/**
 * Problems with switch
 * From its procedural control flow to its non-standard-looking way it handles code blocks,
 * the rest of JavaScript uses curly braces yet switch does not.
 * Syntactically, it’s not one of JavaScript’s best, nor is its design.
 * We’re forced to manually add `break;` statements within each case, which can lead to
 * difficult debugging and nested errors further down the case should we forget!
 * Douglas Crockford has written and spoken about it numerous times,
 * his recommendations are to treat it with caution.
 *
 * We often use Object lookups for things in JavaScript, often for things
 * we would never contemplate using switch for - so why not use an Object literal
 * to replace switch?
 * Objects are much more flexible, have better readability and maintainability
 * and we don’t need to manually break; each “case”.
 *  They’re a lot friendlier on new JavaScript developers as well, as they’re standard Objects.
 *
 * As the number of “cases” increases, the performance of the object (hash table) gets
 * better than the average cost of the switch (the order of the cases matter).
 * The object approach is a hash table lookup, and the switch has to evaluate
 * each case until it hits a match and a break.
 */
