import { findMedianSortedArrays, findMedianSortedArrays_FASTEST } from './04_median-of-two-sorted-arrays';

describe('findMedianSortedArrays', () => {
    const SUT = findMedianSortedArrays;

    test('should return the median of the two sorted arrays', () => {
        const expected = 2;
        const actual = SUT([1, 3], [2]);
        expect(actual).toBe(expected);
    });

});

describe('findMedianSortedArrays_FASTEST', () => {
    const SUT = findMedianSortedArrays_FASTEST;

    test('should return the median of the two sorted arrays', () => {
        const expected = 2;
        const actual = SUT([1, 3], [2]);
        expect(actual).toBe(expected);
    });
});

describe.skip('findMedianSortedArrays VS findMedianSortedArrays_FASTEST', () => {
    const SUT1 = findMedianSortedArrays;
    const SUT2 = findMedianSortedArrays_FASTEST;

    test('SUT2 should be faster than SUT1', () => {
        const arr1 = Array.from({ length: 1000 }, (_, i) => i);
        const arr2 = Array.from({ length: 1000 }, (_, i) => i);

        const start1 = Date.now();
        SUT1(arr1, arr2);
        const end1 = Date.now();
        const time1 = end1 - start1;

        const start2 = Date.now();
        SUT2(arr1, arr2);
        const end2 = Date.now();
        const time2 = end2 - start2;

        expect(time2).toBeLessThan(time1);
    });
})