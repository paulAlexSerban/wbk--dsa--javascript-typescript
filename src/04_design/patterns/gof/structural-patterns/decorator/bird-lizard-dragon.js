/**
 * The given code demonstrates the decorator design pattern, which allows adding new functionality
 * to an object without altering its structure. In this example, we have three classes
 * Bird, Lizard, and Dragon. The Dragon class composes the behavior of both Bird and Lizard classes.
 */

class Bird {
    constructor(age = 0) {
        this.age = age;
    }

    fly() {
        return this.age < 10 ? 'flying' : 'too old';
    }
}

/**
 * - The Bird class has a constructor that takes an optional age parameter and assigns it to
 * the age property. If no value is provided, the default age is 0.
 * - The fly() method returns 'flying' if the bird's age is less than 10, otherwise, it returns 'too old'.
 */

class Lizard {
    constructor(age = 0) {
        this.age = age;
    }

    crawl() {
        return this.age > 1 ? 'crawling' : 'too young';
    }
}

/**
 * - The Lizard class has a constructor that takes an optional age parameter and assigns it to the age property.
 * If no value is provided, the default age is 0.
 * - The crawl() method returns 'crawling' if the lizard's age is greater than 1, otherwise, it returns 'too young'.
 */

class Dragon {
    constructor(age = 0) {
        this._bird = new Bird();
        this._lizard = new Lizard();
        this._age = age;
    }

    set age(value) {
        this._age = this._bird.age = this._lizard.age = value;
    }

    get age() {
        return this._age;
    }

    fly() {
        return this._bird.fly();
    }
    crawl() {
        return this._lizard.crawl();
    }
}

/**
 * - The Dragon class composes the behavior of Bird and Lizard by creating instances of both classes in its constructor.
 * - The constructor takes an optional age parameter. If no value is provided, the default age is 0.
 * - It provides a getter and setter for the age property, which synchronizes the age of both the bird and the lizard instances.
 * - The fly() and crawl() methods delegate their functionality to the corresponding methods of the Bird and Lizard instances.
 */

function testDecorator() {
    let dragon = new Dragon();

    if (dragon.fly() === 'flying' && dragon.crawl() === 'too young') {
        console.log('Test passed: Dragon can fly and is too young to crawl.');
    } else {
        console.log('Test failed: Dragon behavior is incorrect.');
    }

    dragon.age = 20;

    if (dragon.fly() === 'too old' && dragon.crawl() === 'crawling') {
        console.log('Test passed: Dragon is too old to fly and can crawl.');
    } else {
        console.log('Test failed: Dragon behavior is incorrect after aging.');
    }
}

testDecorator();

/**
 * This test case creates a new instance of the Dragon class and checks if the initial
 * behavior is correct (able to fly and too young to crawl).
 * The age of the dragon is then set to 20 and the test checks if the behavior is
 * correct for the older age (too old to fly and able to crawl).
 * If the behavior is correct for both age scenarios, "Test passed" messages are
 * logged to the console. If not, "Test failed" messages are logged.
 */
