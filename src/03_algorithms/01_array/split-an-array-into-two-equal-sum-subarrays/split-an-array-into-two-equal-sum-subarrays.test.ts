import {splitArrayIntoEqualSums} from './split-an-array-into-two-equal-sum-subarrays';

describe('splitArrayIntoEqualSums', () => {
    // good weather test cases
    test('should return two equal sum subarrays', () => {
        expect(splitArrayIntoEqualSums([1, 2, 3, 4, 5, 5])).toEqual([[1, 2, 3, 4], [5, 5]]);
        expect(splitArrayIntoEqualSums([4, 1, 2, 3])).toEqual([[4, 1], [2, 3]]);
    });

    // bad weather test cases
    test('should return "Not Possible" if it is impossible to split into two equal parts', () => {
        expect(splitArrayIntoEqualSums([4, 3, 2, 1])).toBe("Not Possible");
    });

    // edge cases
    test('should return "Not Possible" if the input array is empty', () => {
        expect(splitArrayIntoEqualSums([])).toBe("Not Possible");
    });

    test('should return "Not Possible" if the input array has only one element', () => {
        expect(splitArrayIntoEqualSums([1])).toBe("Not Possible");
    });
});