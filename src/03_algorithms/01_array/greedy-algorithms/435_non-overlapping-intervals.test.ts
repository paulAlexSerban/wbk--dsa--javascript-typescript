import {eraseOverlapIntervals, eraseOverlapIntervals_FASTEST} from './435_non-overlapping-intervals';

describe('eraseOverlapIntervals', () => {
    const SUT = eraseOverlapIntervals;

    // bad weather test cases
    test('should return 0 if intervals is empty', () => {
        const expected = 0;
        const actual = SUT([]);
        expect(actual).toBe(expected);
    });

    // good weather test cases
    test('should return the minimum number of intervals to remove to make the rest of the intervals non-overlapping', () => {
        const expected = 1;
        const actual = SUT([[1,2],[2,3],[3,4],[1,3]]);
        expect(actual).toBe(expected);
    });

    test('should return the minimum number of intervals to remove to make the rest of the intervals non-overlapping', () => {
        const expected = 2;
        const actual = SUT([[1,2],[1,2],[1,2]]);
        expect(actual).toBe(expected);
    });

    test('should return the minimum number of intervals to remove to make the rest of the intervals non-overlapping', () => {
        const expected = 0;
        const actual = SUT([[1,2],[2,3]]);
        expect(actual).toBe(expected);
    });
})

describe('eraseOverlapIntervals_FASTEST', () => {
    const SUT = eraseOverlapIntervals_FASTEST;

    // bad weather test cases
    test('should return 0 if intervals is empty', () => {
        const expected = 0;
        const actual = SUT([]);
        expect(actual).toBe(expected);
    });

    // good weather test cases
    test('should return the minimum number of intervals to remove to make the rest of the intervals non-overlapping', () => {
        const expected = 1;
        const actual = SUT([[1,2],[2,3],[3,4],[1,3]]);
        expect(actual).toBe(expected);
    });

    test('should return the minimum number of intervals to remove to make the rest of the intervals non-overlapping', () => {
        const expected = 2;
        const actual = SUT([[1,2],[1,2],[1,2]]);
        expect(actual).toBe(expected);
    });

    test('should return the minimum number of intervals to remove to make the rest of the intervals non-overlapping', () => {
        const expected = 0;
        const actual = SUT([[1,2],[2,3]]);
        expect(actual).toBe(expected);
    });
})