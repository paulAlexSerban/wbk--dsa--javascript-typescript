import {
    Product,
    Color,
    Size,
    ColorSpecification,
    SizeSpecification,
    AndSpecification,
    BetterFilter,
} from './01_open-close-principle';

describe('Product Filter with Specifications', () => {
    const apple = new Product('Apple', Color.green, Size.small);
    const tree = new Product('Tree', Color.green, Size.large);
    const house = new Product('House', Color.blue, Size.large);
    const products = [apple, tree, house];

    describe('ColorSpecification', () => {
        it('filters products by color', () => {
            const colorSpec = new ColorSpecification(Color.green);
            const filteredProducts = products.filter((p) => colorSpec.isSatisfied(p));
            expect(filteredProducts).toEqual([apple, tree]);
        });
    });

    describe('SizeSpecification', () => {
        it('filters products by size', () => {
            const sizeSpec = new SizeSpecification(Size.large);
            const filteredProducts = products.filter((p) => sizeSpec.isSatisfied(p));
            expect(filteredProducts).toEqual([tree, house]);
        });
    });

    describe('AndSpecification', () => {
        it('combines specifications to filter products', () => {
            const colorSpec = new ColorSpecification(Color.blue);
            const sizeSpec = new SizeSpecification(Size.large);
            const andSpec = new AndSpecification(colorSpec, sizeSpec);
            const filteredProducts = products.filter((p) => andSpec.isSatisfied(p));
            expect(filteredProducts).toEqual([house]);
        });
    });

    describe('BetterFilter', () => {
        it('uses specifications to filter products', () => {
            const betterFilter = new BetterFilter();
            const colorSpec = new ColorSpecification(Color.green);
            const filteredProducts = betterFilter.filter(products, colorSpec);
            expect(filteredProducts).toEqual([apple, tree]);
        });

        it('filters products by size and color using AndSpecification', () => {
            const betterFilter = new BetterFilter();
            const andSpec = new AndSpecification(new ColorSpecification(Color.blue), new SizeSpecification(Size.large));
            const filteredProducts = betterFilter.filter(products, andSpec);
            expect(filteredProducts).toEqual([house]);
        });
    });
});
