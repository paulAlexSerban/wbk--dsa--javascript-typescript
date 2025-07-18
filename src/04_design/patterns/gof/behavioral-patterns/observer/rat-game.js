/**
 * In this code example, we have an implementation of the Observer design pattern.
 * The key components are the Event class, the Game class, and the Rat class. The
 * Event class is responsible for managing subscriptions and firing events. The Game
 * class is the context or subject that coordinates the events, and the Rat class
 * represents the observers. I will now provide the code with step-by-step comments
 * and rewrite the test cases with console.log.
 */

// Event class manages subscriptions and firing events
class Event {
    constructor() {
        this.handlers = new Map();
        this.count = 0;
    }

    // Subscribe a new handler to the event
    subscribe(handler) {
        this.handlers.set(++this.count, handler);
        return this.count;
    }

    // Unsubscribe a handler from the event
    unsubscribe(idx) {
        this.handlers.delete(idx);
    }

    // Fire the event and call all subscribed handlers
    fire(sender, args) {
        this.handlers.forEach(function (v, k) {
            v(sender, args);
        });
    }
}

// Game class represents the subject or context that coordinates events
class Game {
    constructor() {
        this.ratEnters = new Event();
        this.ratDies = new Event();
        this.notifyRat = new Event();
    }

    // Utility method to fire ratEnters event
    fireRatEnters(sender) {
        this.ratEnters.fire(sender, null);
    }

    // Utility method to fire ratDies event
    fireRatDies(sender) {
        this.ratDies.fire(sender, null);
    }

    // Utility method to fire notifyRat event
    fireNotifyRat(sender, whichRat) {
        this.notifyRat.fire(sender, whichRat);
    }
}

// Rat class represents observers in the Observer pattern
class Rat {
    constructor(game) {
        this.game = game;
        this.attack = 1;
        game.ratEnters.subscribe(this.handleRatEnters.bind(this));
        game.ratDies.subscribe(this.handleRatDies.bind(this));
        game.notifyRat.subscribe(this.handleNotifyRat.bind(this));
        game.fireRatEnters(this);
    }

    // Handle ratEnters event
    handleRatEnters(sender, args) {
        if (sender !== this) {
            this.attack++;
            this.game.fireNotifyRat(this, sender);
        }
    }

    // Handle ratDies event
    handleRatDies(sender, args) {
        this.attack--;
    }

    // Handle notifyRat event
    handleNotifyRat(sender, whichRat) {
        if (whichRat === this) {
            this.attack++;
        }
    }

    // Notify game when the rat dies
    die() {
        this.game.fireRatDies(this);
    }
}

// Test cases with console.log instead of expect
{
    console.log('single rat test');
    let game = new Game();
    let rat = new Rat(game);
    console.log(rat.attack === 1);
}

{
    console.log('two rat test');
    let game = new Game();
    let rat = new Rat(game);
    let rat2 = new Rat(game);
    console.log(rat.attack === 2);
    console.log(rat2.attack === 2);
}

{
    console.log('three rats one dies');
    let game = new Game();
    let rat = new Rat(game);
    console.log(rat.attack === 1);
    let rat2 = new Rat(game);
    console.log(rat.attack === 2);
    console.log(rat2.attack === 2);
    let rat3 = new Rat(game);
    console.log(rat.attack === 3);
    console.log(rat2.attack === 3);
    console.log(rat3.attack === 3);
    rat3.die();
    console.log(rat.attack === 2);
    console.log(rat2.attack === 2);
}

/**
 * In the test cases, we create instances of the Game and Rat classes to verify
 * the correct behavior of the Observer pattern. We use console.log to output the
 * test results as true or false, based on whether the expected conditions are met.
 */
