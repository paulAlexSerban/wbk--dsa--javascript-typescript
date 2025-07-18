/**
 * CODE EXPLANATION
- Check the value of each card via a switch statement.
- The variable count:
  - Increases by 1 if the card is a 2, 3, 4, 5, or 6.
  - Since 7, 8, and 9 aren’t worth anything, we ignore those cards in our switch statement.
  - Decreases by 1 if the card is a 10, ‘J’, ‘Q’, ‘K’, or ‘A’.
- Check the value of count and return the appropriate response.} card 
 */

function cc(card) {
    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case 'J':
        case 'Q':
        case 'K':
        case 'A':
            count--;
            break;
    }
    if (count > 0) {
        return count + ' Bet';
    } else {
        return count + ' Hold';
    }
}

/**
 * Example Run
 * - cc(2); runs.
 * - The switch statement hits case 2, jumps down and adds 1 to the variable count.
 * - The switch statement then hits the break and cc(3); runs.
 * - This cycle continues until the final call is made, cc('A');.
 * - After the switch statement, the if statement checks count, which is now 0.
 * - This then drops down to the else statement, which will return 0 Hold.
Note: As mentioned earlier, the switch statement could have also been an else if statement.
*/
