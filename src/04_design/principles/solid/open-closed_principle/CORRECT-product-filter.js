let Color = Object.freeze({
    red: 'red',
    green: 'green',
    blue: 'blue',
});

let Size = Object.freeze({
    small: 'small',
    medium: 'medium',
    large: 'large',
});

class Product {
    constructor(name, color, size) {
        this.name = name;
        this.color = color;
        this.size = size;
    }
}

/**
 * This might seem as an overkill, but the consequence is that the
 * filter is untied from another
 * This means if you need a new specification, you do not modify
 * any existing class, you just make a new class that verifies some criteria,
 * and crucially has an isSatisfied method
 */

class ColorSpecification {
    constructor(color) {
        super();
        this.color = color;
    }

    isSatisfied(item) {
        return item.color === this.color;
    }
}

class SizeSpecification {
    constructor(size) {
        this.size = size;
    }

    isSatisfied(item) {
        return item.size === this.size;
    }
}

let apple = new Product('Apple', Color.green, Size.small);
let tree = new Product('Tree', Color.green, Size.large);
let house = new Product('House', Color.blue, Size.large);

let products = [apple, tree, house];

/**
 * This approach is much more flexible
 */

class BetterFilter {
    filter(items, spec) {
        return items.filter((x) => spec.isSatisfied(x));
    }
}

let bf = new BetterFilter();

console.log(`Green products (new):`);
for (let p of bf.filter(products, new ColorSpecification(Color.green))) {
    console.log(` * ${p.name} is green`);
}

/**
 * To make filters for items that are filtered by multiple criteria
 * and use the Specification Patter, you need to build a Combinator
 * A COMBINATOR is itself a specification which combines other specifications
 */

class AndSpecification {
    // this is the COMBINATOR class
    constructor(...specs) {
        this.specs = specs;
    }

    isSatisfied(item) {
        return this.specs.every((x) => x.isSatisfied(item));
    }
}

console.log(`large and green products`);

let spec = new AndSpecification(new ColorSpecification(Color.green), new SizeSpecification(Size.large));

for (let p of bf.filter(products, spec)) {
    console.log(` * ${p.name} is large and green`);
}

/**
 * Same as the AndSpecification was build, and OrSpecification can be defined
 * or also an XOfSpecification
 */

/**
 * THE MAIN IDEA
 * Classes are open for extension but closed for modification, meaning
 * you never jump into an existing class and start to modify it
 * MODIFICATION is allowed only when there is a bug, but extending the
 * functionality is not such a good thing to do by modifying an existing class
 * SO THE BETTER approach is to use inheritance or some sort of way of
 * extending functionality
 * Typically in OOP there is an abstract Specification class
 */
