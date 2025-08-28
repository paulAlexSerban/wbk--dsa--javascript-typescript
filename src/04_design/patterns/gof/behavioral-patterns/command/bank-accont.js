/**
 * This code is an example of the Command design pattern, which encapsulates
 * a request as an object, allowing for parameterization of clients with
 * different requests, queuing or logging requests, and supporting undoable
 * operations. The example features a simple bank account, allowing deposits
 * and withdrawals.
 */

/**
 * Define an enumeration Action to represent the possible actions -
 * deposit and withdraw.
 */

let Action = Object.freeze({
    deposit: 0,
    withdraw: 1,
});

/**
 * Create the Command class, which represents a command object with the following properties:
 *
 * action: the action to perform, deposit or withdraw
 * amount: the amount to deposit or withdraw
 * success: a boolean flag indicating whether the action was successful
 */

class Command {
    constructor(action, amount) {
        this.action = action;
        this.amount = amount;
        this.success = false;
    }
}

/**
 * Create the Account class, which represents a bank account with the
 * following properties and methods:
 *
 * balance: the current account balance
 * process(): a method that takes a command object as an argument and
 * processes it, updating the account balance and the success status
 * of the command
 */

class Account {
    constructor() {
        this.balance = 0;
    }

    process(cmd) {
        switch (cmd.action) {
            case Action.deposit:
                this.balance += cmd.amount;
                cmd.success = true;
                break;
            case Action.withdraw:
                cmd.success = this.balance >= cmd.amount;
                if (cmd.success) this.balance -= cmd.amount;
                break;
        }
    }
}

function testCommandPattern() {
    let a = new Account();

    console.log('depositing $100');
    let command = new Command(Action.deposit, 100);
    a.process(command);

    console.log('Balance after depositing $100:', a.balance === 100 ? 'PASS' : 'FAIL');
    console.log('Deposit success:', command.success === true ? 'PASS' : 'FAIL');

    console.log('withdrawing $50');
    command = new Command(Action.withdraw, 50);
    a.process(command);

    console.log('Balance after withdrawing $50:', a.balance === 50 ? 'PASS' : 'FAIL');
    console.log('Withdraw success:', command.success === true ? 'PASS' : 'FAIL');

    console.log('attempting to withdraw $150');
    command.amount = 150;
    a.process(command);

    console.log('Balance after attempting to withdraw $150:', a.balance === 50 ? 'PASS' : 'FAIL');
    console.log('Withdraw attempt success:', command.success === false ? 'PASS' : 'FAIL');
}

testCommandPattern();
