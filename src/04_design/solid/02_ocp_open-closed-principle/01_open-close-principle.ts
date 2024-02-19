export enum Color {
    red = 'red',
    green = 'green',
    blue = 'blue',
}

export enum Size {
    small = 'small',
    medium = 'medium',
    large = 'large',
}

export interface IProduct {
    name: string;
    color: string;
    size: string;
}

export class Product implements IProduct {
    name: string;
    color: string;
    size: string;
    constructor(name: string, color: string, size: string) {
        this.name = name;
        this.color = color;
        this.size = size;
    }
}

/**
 * @VIOLATION: this is modification, not extension and violates OCP
 */

// class ProductFilter {
//     filterByColor(products: Product[], color: string) {
//         return products.filter((p) => p.color === color);
//     }

//     // @VIOLATION: this is modification, not extension and violates OCP
//     filterBySize(products: Product[], size: string) {
//         return products.filter((p) => p.size === size);
//     }
//     // @VIOLATION: this is modification, not extension and violates OCP
//     filterBySizeAndColor(products: Product[], size: string, color: string) {
//         return products.filter((p) => p.size === size && p.color === color);
//     }

//     // space state explosion - it means that this approach will not work to infinity
// }

// let productFilter = new ProductFilter();
// console.log('Green products (old):');
// for (let p of productFilter.filterByColor(products, Color.green)) {
//     console.log(`* ${p.name} is green`);
// }

/**
 * OCP: Open-Closed Principle - open for extension, closed for modification
 * it means that you never jump into an existing class and modify it unless strong reasons
 * having something that worked and got into production and change it is a bad idea
 * you should always be able to extend a class without modifying it
 */

// Specification Pattern

export interface ISpecification {
    isSatisfied(item: Product): boolean;
}

/**
 * JS Abstract class example instead of interface
 * class Specification {
 *  constructor() {
 *   if (this.constructor.name === Specification) {
 *      throw new Error('Specification is abstract!');
 *  }
 *    isSatisfied(item) {
 *       throw new Error('not implemented');
 *   }
 * }
 */

export class ColorSpecification implements ISpecification {
    constructor(private color: string) {}

    isSatisfied(item: Product): boolean {
        return item.color === this.color;
    }
}

export class SizeSpecification implements ISpecification {
    constructor(private size: string) {}

    isSatisfied(item: Product): boolean {
        return item.size === this.size;
    }
}

// combinator class - combining two specifications
export class AndSpecification implements ISpecification {
    private specs: ISpecification[];
    constructor(...specs: ISpecification[]) {
        this.specs = specs;
    }
    isSatisfied(item: Product): boolean {
        return this.specs.every((spec) => spec.isSatisfied(item));
    }
}

export class BetterFilter {
    filter(items: Product[], spec: ColorSpecification | SizeSpecification | AndSpecification) {
        return items.filter((item) => spec.isSatisfied(item));
    }
}

/**
 * Usage
 */

// let apple = new Product('Apple', Color.green, Size.small);
// let tree = new Product('Tree', Color.green, Size.large);
// let house = new Product('House', Color.blue, Size.large);

// let products = [apple, tree, house];

// let betterFilter = new BetterFilter();
// console.log('Green products (new):');
// for (let p of betterFilter.filter(products, new ColorSpecification(Color.green))) {
//     console.log(`* ${p.name} is green`);
// }

// console.log('Large blue items:');
// for (let p of betterFilter.filter(
//     products,
//     new AndSpecification(new ColorSpecification(Color.blue), new SizeSpecification(Size.large))
// )) {
//     console.log(`* ${p.name} is large and blue`);
// }
