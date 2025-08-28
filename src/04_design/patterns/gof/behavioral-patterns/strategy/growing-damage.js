// Define a Creature class
class Creature {
    constructor(attack, health) {
        this.attack = attack;
        this.health = health;
        this.alive = this.health > 0;
        this.id = Creature.count++;
    }
}
Creature.count = 0;

// Define a Game class with a damage strategy
class Game {
    constructor(damageStrategy) {
        this.damageStrategy = damageStrategy;
    }

    // Method to apply the damage strategy to a creature
    springTrapOn(creature) {
        this.damageStrategy.damage(creature);
        return creature.alive;
    }
}

// Base DamageStrategy class
class DamageStrategy {
    damage(creature) {
        if (creature.health <= 0) {
            creature.alive = false;
        }
    }
}

// ConstantDamageStrategy class that extends DamageStrategy
class ConstantDamageStrategy extends DamageStrategy {
    damage(creature) {
        creature.health--;
        super.damage(creature);
    }
}

// GrowingDamageStrategy class that extends DamageStrategy
class GrowingDamageStrategy extends DamageStrategy {
    damage(creature) {
        if (GrowingDamageStrategy.impact[creature.id]) {
            let dmg = ++GrowingDamageStrategy.impact[creature.id];
            creature.health -= dmg;
        } else {
            creature.health--;
            GrowingDamageStrategy.impact[creature.id] = 1;
        }

        super.damage(creature);
    }
}
GrowingDamageStrategy.impact = {};

// Test cases
console.log('Testing creature with ordinary strategy:');
let cg = new Game(new ConstantDamageStrategy());
let c = new Creature(1, 3);

console.log(`Initial health: ${c.health}`);
console.log(`Alive status: ${c.alive}`);

cg.springTrapOn(c);
console.log(`Health after first hit: ${c.health}`);
console.log(`Alive status: ${c.alive}`);

cg.springTrapOn(c);
console.log(`Health after second hit: ${c.health}`);
console.log(`Alive status: ${c.alive}`);

cg.springTrapOn(c);
console.log(`Health after third hit: ${c.health}`);
console.log(`Alive status: ${c.alive}`);

console.log('Testing creature with growing strategy:');
cg = new Game(new GrowingDamageStrategy());
c = new Creature(1, 3);

console.log(`Initial health: ${c.health}`);
console.log(`Alive status: ${c.alive}`);

cg.springTrapOn(c);
console.log(`Health after first hit: ${c.health}`);
console.log(`Alive status: ${c.alive}`);

cg.springTrapOn(c);
console.log(`Health after second hit: ${c.health}`);
console.log(`Alive status: ${c.alive}`);

console.log('Testing two creatures with their own deprecation:');
cg = new Game(new GrowingDamageStrategy());
let c1 = new Creature(1, 3);
let c2 = new Creature(1, 3);

console.log('Springing a trap on both creatures:');
console.log('Expecting each creature to be damaged by 1');
cg.springTrapOn(c1);
cg.springTrapOn(c2);

console.log(`Creature 1 health: ${c1.health}`);
console.log(`Creature 1 alive status: ${c1.alive}`);
console.log(`Creature 2 health: ${c2.health}`);
console.log(`Creature 2 alive status: ${c2.alive}`);

cg.springTrapOn(c2);
console.log(`Creature 2 health after second hit: ${c2.health}`);
console.log(`Creature 2 alive status: ${c2.alive}`);

/**
 * This code demonstrates the Strategy design pattern by implementing different
 * damage strategies for creatures in a game. The test cases use console.log
 */
