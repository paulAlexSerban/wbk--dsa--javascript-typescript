/***************
 * Use Closure to Protect Properties Within an Object from Being Modified Externally
 */

function Bird() {
    let hatchedEgg = 10;

    this.getHatchedEggCount = function () {
        return hatchedEgg;
    };
}
let ducky = new Bird();
ducky.getHatchedEggCount();

/****
 * Here getHatchedEggCount is a privileged method, because it has access to the private variable hatchedEgg.
 * This is possible because hatchedEgg is declared in the same context as getHatchedEggCount.
 * In JavaScript, a function always has access to the context in which it was created. This is called closure.
 */
