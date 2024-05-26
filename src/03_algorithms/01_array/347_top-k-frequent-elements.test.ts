import { topKFrequent, topKFrequent_FAST, topKFrequent_MOST_SUBMITIONS, topKFrequent_MINE } from './347_top-k-frequent-elements';

describe('topKFrequent', () => {
    const SUT = topKFrequent;
    // GOOD WEATHER TESTS
    it('should return [1, 2] for nums = [1, 1, 1, 2, 2, 3], k = 2', () => {
        const actual = SUT([1, 1, 1, 2, 2, 3], 2);
        const expected = [1, 2];
        expect(actual).toEqual(expected);
    })

    it('should return [1] for nums = [1], k = 1', () => {
        const actual = SUT([1], 1);
        const expected = [1];
        expect(actual).toEqual(expected);
    })

    it('should return [1, 2, 3] for nums = [1, 2, 3], k = 3', () => {
        const actual = SUT([1, 2, 3], 3);
        const expected = [1, 2, 3];
        expect(actual).toEqual(expected);
    })

    // BAD WEATHER TESTS
    it('should return [] for nums = [], k = 0', () => {
        const actual = SUT([], 0);
        const expected = [];
        expect(actual).toEqual(expected);
    })
})

describe('topKFrequent_FAST', () => {
    const SUT = topKFrequent_FAST;
    // GOOD WEATHER TESTS
    it('should return [1, 2] for nums = [1, 1, 1, 2, 2, 3], k = 2', () => {
        const actual = SUT([1, 1, 1, 2, 2, 3], 2);
        const expected = [1, 2];
        expect(actual).toEqual(expected);
    })

    it('should return [1] for nums = [1], k = 1', () => {
        const actual = SUT([1], 1);
        const expected = [1];
        expect(actual).toEqual(expected);
    })

    it('should return [1, 2, 3] for nums = [1, 2, 3], k = 3', () => {
        const actual = SUT([1, 2, 3], 3);
        const expected = [1, 2, 3];
        expect(actual).toEqual(expected);
    })

    // BAD WEATHER TESTS
    it('should return [] for nums = [], k = 0', () => {
        const actual = SUT([], 0);
        const expected = [];
        expect(actual).toEqual(expected);
    })
});

describe('topKFrequent_MOST_SUBMITIONS', () => {
    const SUT = topKFrequent_MOST_SUBMITIONS;
    // GOOD WEATHER TESTS
    it('should return [1, 2] for nums = [1, 1, 1, 2, 2, 3], k = 2', () => {
        const actual = SUT([1, 1, 1, 2, 2, 3], 2);
        const expected = [1, 2];
        expect(actual).toEqual(expected);
    })

    it('should return [1] for nums = [1], k = 1', () => {
        const actual = SUT([1], 1);
        const expected = [1];
        expect(actual).toEqual(expected);
    })

    it('should return [1, 2, 3] for nums = [1, 2, 3], k = 3', () => {
        const actual = SUT([1, 2, 3], 3);
        const expected = [1, 2, 3];
        expect(actual).toEqual(expected);
    })

    // BAD WEATHER TESTS
    it('should return [] for nums = [], k = 0', () => {
        const actual = SUT([], 0);
        const expected = [];
        expect(actual).toEqual(expected);
    })
});

describe('topKFrequent_MINE', () => {
    const SUT = topKFrequent_MINE;
    // GOOD WEATHER TESTS
    it('should return [1, 2] for nums = [1, 1, 1, 2, 2, 3], k = 2', () => {
        const actual = SUT([1, 1, 1, 2, 2, 3], 2);
        const expected = [1, 2];
        expect(actual).toEqual(expected);
    })

    it('should return [1] for nums = [1], k = 1', () => {
        const actual = SUT([1], 1);
        const expected = [1];
        expect(actual).toEqual(expected);
    })

    it('should return [1, 2, 3] for nums = [1, 2, 3], k = 3', () => {
        const actual = SUT([1, 2, 3], 3);
        const expected = [1, 2, 3];
        expect(actual).toEqual(expected);
    })

    // BAD WEATHER TESTS
    it('should return [] for nums = [], k = 0', () => {
        const actual = SUT([], 0);
        const expected = [];
        expect(actual).toEqual(expected);
    })
});