import {canBeEqual} from './1460_make-two-arrays-equal-by-reversing-subarrays';

describe('canBeEqual', () => {
    // good weather tests
    test('returns true for [1, 2, 3, 4] and [2, 4, 1, 3]', () => {
        expect(canBeEqual([1, 2, 3, 4], [2, 4, 1, 3])).toBe(true);
    });

    test('returns true for [7] and [7]', () => {
        expect(canBeEqual([7], [7])).toBe(true);
    });

    test('returns true for [1, 2, 3, 4] and [1, 2, 3, 4]', () => {
        expect(canBeEqual([1, 2, 3, 4], [1, 2, 3, 4])).toBe(true);
    });

    // bad weather tests
    test('returns false for [1, 2, 3, 4] and [1, 2, 4, 3]', () => {
        expect(canBeEqual([1, 2, 3, 4], [1, 2, 4, 3])).toBe(true);
    });

    test('returns false for [1, 2, 3, 4] and [1, 2, 3]', () => {
        expect(canBeEqual([1, 2, 3, 4], [1, 2, 3])).toBe(false);
    });

    test('returns false for [1, 2, 3, 4] and [1, 2, 3, 4, 5]', () => {
        expect(canBeEqual([1, 2, 3, 4], [1, 2, 3, 4, 5])).toBe(false);
    });

    test('returns false for [1, 2, 3, 4] and [1, 2, 3, 5]', () => {
        expect(canBeEqual([1, 2, 3, 4], [1, 2, 3, 5])).toBe(false);
    });

    test('returns false for [1, 2, 3, 4] and [1, 2, 3, 4, 5]', () => {
        expect(canBeEqual([1, 2, 3, 4], [1, 2, 3, 4, 5])).toBe(false);
    });

    test('returns false for [1, 2, 3, 4] and [1, 2, 3, 4, 5]', () => {
        expect(canBeEqual([1, 2, 3, 4], [1, 2, 3, 4, 5])).toBe(false);
    });
})