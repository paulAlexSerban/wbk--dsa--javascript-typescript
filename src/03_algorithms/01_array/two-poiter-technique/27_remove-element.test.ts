import {removeElement} from './27_remove-element';

describe('test removeElement', () => {
    const SUT = removeElement;

    // bad weather tests
    it('should return 0 when nums is []', () => {
        const actual = SUT([], 1);
        const expected = 0;
        expect(actual).toBe(expected);
    });

    // good weather tests
    it('should return 2 when nums is [3, 2, 2, 3] and val is 3', () => {
        const actual = SUT([3, 2, 2, 3], 3);
        const expected = 2;
        expect(actual).toBe(expected);
    });

    it('should return 5 when nums is [0, 1, 2, 2, 3, 0, 4, 2] and val is 2', () => {
        const actual = SUT([0, 1, 2, 2, 3, 0, 4, 2], 2);
        const expected = 5;
        expect(actual).toBe(expected);
    });

    it('should return 0 when nums is [1] and val is 1', () => {
        const actual = SUT([1], 1);
        const expected = 0;
        expect(actual).toBe(expected);
    });
})
