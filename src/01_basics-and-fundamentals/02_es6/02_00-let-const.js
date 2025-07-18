/**
 * TASK
 *
 * (1) Declare a constant variable, `PI`, and assign it the value `Math.PI` - You will not pass this challenge unless the variable is declared as a constant and named PI (uppercase);
 * (2) Read a number,`r` , denoting the radius of a circle from stdin.
 * (3) Use `PI` and `r` to calculate the area and perimeter of a circle having radius `r`.
 * (4) Print `area` as the first line of output and print `perimeter` as the second line of output.
 *
 * @param { Number } arg - te radius or the circle
 */

function circleProperties(arg) {
    let r = arg; // (2)
    const PI = Math.PI; // (1)

    if (0 < r && 100 >= r) {
        console.log(`Area of the circle is ${PI * r * r}`); // (3)
        console.log(`Perimeter of the circle is ${PI * 2 * r}`); // (4)
    }
}

circleProperties(13);
