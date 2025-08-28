/**
 * In this example, we have a Memento design pattern implementation. The Memento pattern
 * is a behavioral design pattern that allows an object to restore its state to a previous
 * state. This is useful when you want to be able to undo actions or revert to a previous
 * state.
 *
 * The code consists of three classes: Token, Memento, and TokenMachine.
 * Let's go through the code with step-by-step comments:
 */

/**
 * Token class: Represents a simple token with a value property.
 */

class Token {
    constructor(value = 0) {
        this.value = value;
    }
}

/**
 * Memento class: Represents a snapshot of the state of a collection of tokens.
 * It has an array called 'tokens' to store the tokens.
 */

class Memento {
    constructor() {
        this.tokens = [];
    }
}

/**
 * TokenMachine class: Represents a machine that manages tokens and their
 * states. It can add tokens, create mementos, and revert to previous states using mementos.
 */

class TokenMachine {
    constructor() {
        this.tokens = [];
    }

    /**
     * addTokenValue(value): Adds a new token with a specified value to the machine and creates a memento.
     */

    addTokenValue(value) {
        return this.addToken(new Token(value));
    }

    /**
     * addToken(token): Adds a new token to the machine and creates a memento.
     */
    addToken(token) {
        this.tokens.push(token);
        let m = new Memento();
        m.tokens = this.tokens.map((t) => new Token(t.value));
        return m;
    }

    /**
     * revert(m): Reverts the machine's state to a previous state represented by a memento.
     */

    revert(m) {
        this.tokens = m.tokens.map((t) => new Token(t.value));
    }
}

// Test case: single token test
{
    let tm = new TokenMachine();
    let m = tm.addTokenValue(123);
    tm.addTokenValue(456);
    tm.revert(m);

    console.log(tm.tokens.length); // Output: 1
    console.log(tm.tokens[0].value); // Output: 123
}

// Test case: two token test
{
    let tm = new TokenMachine();
    tm.addTokenValue(1);
    let m = tm.addTokenValue(2);
    tm.addTokenValue(3);
    tm.revert(m);

    console.log(tm.tokens.length); // Output: 2
    console.log(tm.tokens[0].value); // Output: 1
    console.log(tm.tokens[1].value); // Output: 2
}

// Test case: fiddle token test
{
    let tm = new TokenMachine();
    console.log('made a token with value 111 and kept a reference');
    let token = new Token(111);
    console.log('added this token to the list');
    tm.addToken(token);
    let m = tm.addTokenValue(222);
    console.log("changed this token's value to 333 :)");
    token.value = 333;
    tm.revert(m);

    console.log(tm.tokens.length); // Output: 2
    console.log(tm.tokens[0].value); // Output: 111
}

/**
 * These test cases demonstrate adding tokens, creating mementos, and reverting the state of the TokenMachine using the Memento pattern.
 */
