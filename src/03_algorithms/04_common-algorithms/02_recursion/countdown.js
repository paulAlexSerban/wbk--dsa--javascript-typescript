const countdown = (num) => {
    if (num <= 0) {
        console.log('all done');
        return;
    }
    console.log(num);
    num--;
    countdown(num);
};

/** the for loop that was substituted by the recursive function
 * function countdown(num) {
 *  for(let i = num; i > 0; i--) {
 *    console.log(i);
 *  }
 *  console.log("all done");
 * }
 */

countdown(5);
