// CombinationLock class represents a lock with a combination
class CombinationLock {
    // constructor initializes the lock with a given combination
    constructor(combination) {
        this.combination = combination;
        this.reset();
    }

    // reset method sets the lock status to 'LOCKED' and clears any entered digits
    reset() {
        this.status = 'LOCKED';
        this.digitsEntered = 0;
        this.failed = false;
    }

    // enterDigit method updates the lock status as digits are entered
    enterDigit(digit) {
        if (this.status === 'LOCKED') this.status = '';
        this.status += digit.toString();
        if (this.combination[this.digitsEntered] !== digit) {
            this.failed = true;
        }
        this.digitsEntered++;

        if (this.digitsEntered === this.combination.length) this.status = this.failed ? 'ERROR' : 'OPEN';
    }
}

// Test case: successful lock combination entry
{
    let cl = new CombinationLock([1, 2, 3, 4, 5]);
    console.log(cl.status); // LOCKED
    cl.enterDigit(1);
    console.log(cl.status); // 1
    cl.enterDigit(2);
    console.log(cl.status); // 12
    cl.enterDigit(3);
    console.log(cl.status); // 123
    cl.enterDigit(4);
    console.log(cl.status); // 1234
    cl.enterDigit(5);
    console.log(cl.status); // OPEN
}

// Test case: unsuccessful lock combination entry
{
    let cl = new CombinationLock([1, 2, 3]);
    console.log(cl.status); // LOCKED
    cl.enterDigit(1);
    console.log(cl.status); // 1
    cl.enterDigit(2);
    console.log(cl.status); // 12
    cl.enterDigit(5);
    console.log(cl.status); // ERROR
}

/**
 * In this code, the CombinationLock class represents a lock with a combination.
 * The enterDigit method is used to enter digits one at a time, and the lock's
 * status is updated as digits are entered. If the entered combination is correct,
 * the lock's status becomes 'OPEN', otherwise, it becomes 'ERROR'.
 */
