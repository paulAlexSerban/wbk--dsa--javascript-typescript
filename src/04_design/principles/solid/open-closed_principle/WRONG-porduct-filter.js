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

// OPEN for extension, but closed for MODIFICATION
/**
 * By EXTENSION we mean INHERITANCE, we mean a class inherits from another class
 * and automatically acquires some if its fields, some of its members,
 * and then adds  additional functionality
 *
 * The whole idea is that the Product Filter class, once defined and tested
 * and put into production, you do not modify the class anymore
 */

class ProductFilter {
    filterByColor(products, color) {
        return products.filter((p) => p.color === color);
    }

    // as soon as I start adding additional methods, that is modification, I am modifying a class that might have been tested, might have already been deployed, this is considered not as good as actually EXTENSION
    // we break the Open-Closed Principle by adding another filter (Eg. filterBySize())
    filterBySize(products, size) {
        return products.filter((p) => p.size === size);
    }

    // Imagine another filter is requested
    // by adding another filter you are going to have is something called the Space-State Explosion - meaning that this entire approach does not work to infinity, so if more filters are needed, and it is not practical to add so many different methods, so another different kind of architecture is needed
    // This is where the specification patterns comes in and is going to take away the problem of exploding numbers, it is going to allow us to write something very modular and easy wo work with
    // The idea is that whenever you want to have a particular filter, you specifi a separate class which defines that sort of filtering, and that class is called a specification class
    filterBySizeAndColor(products, size, color) {
        return products.filter((p) => p.size === size && p.color === color);
    }
}

let apple = new Product('Apple', Color.green, Size.small);
let tree = new Product('Tree', Color.green, Size.large);
let house = new Product('House', Color.blue, Size.large);

let products = [apple, tree, house];

let pf = new ProductFilter();

console.log(`Green products: (old):`);
for (let p of pf.filterByColor(products, Color.green)) {
    console.log(`* ${p.name} is green`);
}
