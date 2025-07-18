// Define a Creature class with attack and health properties
class Creature {
    constructor(attack, health) {
        this.attack = attack;
        this.health = health;
    }
}

// Define a CardGame class to handle game logic and combat
class CardGame {
    constructor(creatures) {
        this.creatures = creatures;
    }

    // Combat method to determine the winner of a fight
    combat(creature1index, creature2index) {
        let first = this.creatures[creature1index];
        let second = this.creatures[creature2index];
        this.hit(first, second);
        this.hit(second, first);
        let firstAlive = first.health > 0;
        let secondAlive = second.health > 0;
        if (firstAlive === secondAlive) return -1;
        return firstAlive ? creature1index : creature2index;
    }

    // Abstract hit method to be implemented in child classes
    hit(attacker, defender) {
        throw new Error('Please implement this in inheritors');
    }
}

// TemporaryCardDamageGame class with temporary damage logic
class TemporaryCardDamageGame extends CardGame {
    constructor(creatures) {
        super(creatures);
    }

    // Implement the hit method for temporary damage
    hit(attacker, defender) {
        let oldHealth = defender.health;
        defender.health -= attacker.attack;
        if (defender.health > 0) defender.health = oldHealth;
    }
}

// PermanentCardDamageGame class with permanent damage logic
class PermanentCardDamageGame extends CardGame {
    constructor(creatures) {
        super(creatures);
    }

    // Implement the hit method for permanent damage
    hit(attacker, defender) {
        defender.health -= attacker.attack;
    }
}

// Test cases
// Impasse test
let c1 = new Creature(1, 2);
let c2 = new Creature(1, 2);
let game = new TemporaryCardDamageGame([c1, c2]);
console.log(game.combat(0, 1) === -1);
console.log(game.combat(0, 1) === -1);

// Temporary murder test
c1 = new Creature(1, 1);
c2 = new Creature(2, 2);
game = new TemporaryCardDamageGame([c1, c2]);
console.log(game.combat(0, 1) === 1);

// Double murder test
c1 = new Creature(2, 2);
c2 = new Creature(2, 2);
game = new TemporaryCardDamageGame([c1, c2]);
console.log(game.combat(0, 1) === -1);

// Permanent damage death test
c1 = new Creature(1, 2);
c2 = new Creature(1, 3);
game = new PermanentCardDamageGame([c1, c2]);
console.log(game.combat(0, 1) === -1);
console.log(game.combat(0, 1) === 1);

/**
 * This code demonstrates the Template design pattern, which defines
 * a common algorithm with some interchangeable steps. The CardGame
 * class serves as the template, and its child classes, TemporaryCardDamageGame
 * and PermanentCardDamageGame, implement the specific hit methods for
 * different damage types.
 */
