// Event class is responsible for managing event handlers
class Event {
    constructor() {
        this.handlers = new Map(); // Map to store handlers
        this.count = 0; // Counter to assign unique identifiers to handlers
    }

    // Method to subscribe to an event
    subscribe(handler) {
        this.handlers.set(++this.count, handler);
        return this.count;
    }

    // Method to unsubscribe from an event
    unsubscribe(idx) {
        this.handlers.delete(idx);
    }

    // Method to fire all the handlers with the provided sender and arguments
    fire(sender, args) {
        this.handlers.forEach(function (v, k) {
            v(sender, args);
        });
    }
}

// Mediator class acts as a central hub for communication between participants
class Mediator {
    constructor() {
        this.alert = new Event(); // Alert event
    }

    // Method to broadcast the alert event
    broadcast(sender, n) {
        this.alert.fire(sender, n);
    }
}

// Participant class represents a participant in the system
class Participant {
    constructor(mediator) {
        this.mediator = mediator; // Mediator reference
        this.value = 0; // Value to be updated when an alert is received

        // Subscribe to the mediator's alert event
        mediator.alert.subscribe(this.alert.bind(this));
    }

    // Method to be called when an alert is received from the mediator
    alert(sender, n) {
        if (sender !== this) {
            this.value += n;
        }
    }

    // Method to tell the mediator to broadcast a message
    say(n) {
        this.mediator.broadcast(this, n);
    }
}

// Test cases using console.log
console.log('Creating Mediator and Participants...');
let mediator = new Mediator();
let p1 = new Participant(mediator);
let p2 = new Participant(mediator);

console.log(`Initial values: p1.value=${p1.value}, p2.value=${p2.value}`);

p1.say(2);
console.log(`After p1 says 2: p1.value=${p1.value}, p2.value=${p2.value}`);

p2.say(4);
console.log(`After p2 says 4: p1.value=${p1.value}, p2.value=${p2.value}`);

/**
 * The code demonstrates the Mediator design pattern, which centralizes communication
 * between different components or objects to reduce their coupling. The comments
 * in the code explain each part of the implementation, making it easier to
 * understand how the pattern works.
 */
