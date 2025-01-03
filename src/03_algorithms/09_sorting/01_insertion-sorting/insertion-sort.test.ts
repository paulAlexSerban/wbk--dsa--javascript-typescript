import { insertionSort } from "./insertion-sort";

describe('insertionSort', () => {
    // good weather tests
    test('should return the sorted array out of [4,2,1,3]', () => {
        expect(insertionSort([4, 2, 1, 3])).toEqual([1, 2, 3, 4]);
    });

    test('should return the sorted array out of [-1,5,3,4,0]', () => {
        expect(insertionSort([-1, 5, 3, 4, 0])).toEqual([-1, 0, 3, 4, 5]);
    });

    // bad weather tests
    test('should return the same array if it has 0 or 1 element', () => {
        expect(insertionSort([1])).toEqual([1]);
    });

    // edge cases
    test('should return an empty array if the input is an empty array', () => {
        expect(insertionSort([])).toEqual([]);
    });
})