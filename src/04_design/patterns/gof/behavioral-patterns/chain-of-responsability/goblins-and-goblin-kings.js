/**
 * This code demonstrates the Chain of Responsibility pattern in JavaScript.
 * It simulates a game where there are goblins and goblin kings. The code
 * calculates the attack and defense points for each goblin based on their
 * type and the presence of other creatures in the game. The code is organized
 * into several classes and an enumeration to represent the queries for
 * attack and defense points.
 */

/**
 * 1. Define an enumeration WhatToQuery to represent the types of
 * queries (attack or defense) for a creature.
 */

let WhatToQuery = Object.freeze({
    attack: 1,
    defense: 2,
});

/**
 * 2. Create a Query class to represent a query to calculate the
 * attack or defense points for a creature.
 */

class Query {
    constructor(whatToQuery, result) {
        this.whatToQuery = whatToQuery;
        this.result = result;
    }
}

/**
 * Create a Goblin class with the following properties and methods:
 *
 * game: the game instance the goblin belongs to
 * baseAttack: the base attack points of the goblin
 * baseDefense: the base defense points of the goblin
 * handleQuery(): calculates the attack or defense points for the goblin based on the query type
 * defense: getter that calculates the total defense points for the goblin
 * attack: getter that calculates the total attack points for the goblin
 */

class Goblin {
    constructor(game, baseAttack = 1, baseDefense = 1) {
        this.game = game;
        game.creatures.push(this);
        this.baseAttack = baseAttack;
        this.baseDefense = baseDefense;
    }

    handleQuery(source, query) {
        if (source === this) {
            switch (query.whatToQuery) {
                case WhatToQuery.attack:
                    query.result += this.baseAttack;
                    break;
                case WhatToQuery.defense:
                    query.result += this.baseDefense;
                    break;
            }
        } else if (query.whatToQuery === WhatToQuery.defense) {
            query.result++;
        }
    }

    get defense() {
        let q = new Query(WhatToQuery.defense, 0);
        for (let c of this.game.creatures) c.handleQuery(this, q);
        return q.result;
    }

    get attack() {
        let q = new Query(WhatToQuery.attack, 0);
        for (let c of this.game.creatures) c.handleQuery(this, q);
        return q.result;
    }
}

/**
 * Create a GoblinKing class, which inherits from the Goblin class. It
 * has a higher base attack and defense points and can boost the attack
 * points of other goblins.
 */

class GoblinKing extends Goblin {
    constructor(game) {
        super(game, 3, 3);
    }

    handleQuery(source, query) {
        if (source !== this && query.whatToQuery === WhatToQuery.attack) {
            query.result++;
        }
        super.handleQuery(source, query);
    }
}

/**
 * Create a Game class with a creatures property, which is an array of
 * all the creatures in the game.
 */

class Game {
    constructor() {
        this.creatures = [];
    }
}

function testChainOfResponsibility() {
    // Create a new game instance
    let game = new Game();

    // Create the first goblin and add it to the game
    let goblin = new Goblin(game);

    // Check if the first goblin has the correct initial attack and defense values
    console.log('First goblin attack:', goblin.attack === 1 ? 'PASS' : 'FAIL');
    console.log('First goblin defense:', goblin.defense === 1 ? 'PASS' : 'FAIL');

    // Create the second goblin and add it to the game
    let goblin2 = new Goblin(game);

    // Check if the presence of the second goblin affects the attack and defense values of the first goblin
    console.log('First goblin attack after adding second goblin:', goblin.attack === 1 ? 'PASS' : 'FAIL');
    console.log('First goblin defense after adding second goblin:', goblin.defense === 2 ? 'PASS' : 'FAIL');

    // Create a goblin king and add it to the game
    let goblin3 = new GoblinKing(game);

    // Check if the presence of the goblin king affects the attack and defense values of the first goblin
    console.log('First goblin attack after adding goblin king:', goblin.attack === 2 ? 'PASS' : 'FAIL');
    console.log('First goblin defense after adding goblin king:', goblin.defense === 3 ? 'PASS' : 'FAIL');
}

testChainOfResponsibility();
