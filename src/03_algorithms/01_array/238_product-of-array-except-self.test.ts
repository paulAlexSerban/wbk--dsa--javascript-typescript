import { ProductOfArrayExceptSelf, productOfArrayExceptSelf_FASTEST } from './238_product-of-array-except-self';
describe('ProductOfArrayExceptSelf', () => {
    let SUT: ProductOfArrayExceptSelf;
    beforeEach(() => {
        SUT = new ProductOfArrayExceptSelf();
    });
    // GOOD WEATHER TESTS
    it('should return product of array except self - [1, 2, 3, 4]', () => {
        const actual = SUT.productExceptSelf([1, 2, 3, 4]);
        const expected = [24, 12, 8, 6];
        expect(actual).toEqual(expected);
    });
    it('should return product of array except self - [1, 2, 3, 4, 5]', () => {
        const actual = SUT.productExceptSelf([1, 2, 3, 4, 5]);
        const expected = [120, 60, 40, 30, 24];
        expect(actual).toEqual(expected);
    });
    it('should return product of array except self - [1, 2, 3, 4, 5, 6]', () => {
        const actual = SUT.productExceptSelf([1, 2, 3, 4, 5, 6]);
        const expected = [720, 360, 240, 180, 144, 120];
        expect(actual).toEqual(expected);
    });

    // RAINY DAY TESTS
    it('should return product of array except self - [1, 2]', () => {
        const actual = SUT.productExceptSelf([1, 2]);
        const expected = [2, 1];
        expect(actual).toEqual(expected);
    });
});

describe('productOfArrayExceptSelf_FASTEST', () => {
    const SUT = productOfArrayExceptSelf_FASTEST;
    // GOOD WEATHER TESTS
    it('should return product of array except self - [1, 2, 3, 4]', () => {
        const actual = SUT([1, 2, 3, 4]);
        const expected = [24, 12, 8, 6];
        expect(actual).toEqual(expected);
    });
    it('should return product of array except self - [1, 2, 3, 4, 5]', () => {
        const actual = SUT([1, 2, 3, 4, 5]);
        const expected = [120, 60, 40, 30, 24];
        expect(actual).toEqual(expected);
    });
    it('should return product of array except self - [1, 2, 3, 4, 5, 6]', () => {
        const actual = SUT([1, 2, 3, 4, 5, 6]);
        const expected = [720, 360, 240, 180, 144, 120];
        expect(actual).toEqual(expected);
    });

    // RAINY DAY TESTS
    it('should return product of array except self - [1, 2]', () => {
        const actual = SUT([1, 2]);
        const expected = [2, 1];
        expect(actual).toEqual(expected);
    });
})