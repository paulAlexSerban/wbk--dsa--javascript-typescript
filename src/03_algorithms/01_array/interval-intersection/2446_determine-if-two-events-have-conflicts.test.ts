import {haveConflict, haveConflict_FASTEST} from './2446_determine-if-two-events-have-conflicts';

describe('haveConflicts', () => {
    const SUT = haveConflict;

    // bad weather test cases
    test('should return false if events is empty', () => {
        const expected = false;
        const actual = SUT([], []);
        expect(actual).toBe(expected);
    });

    // good weather test cases
    test('should return true if events have conflicts', () => {
        const expected = true;
        const actual = SUT(['10:00', '11:00'], ['10:30', '11:30']);
        expect(actual).toBe(expected);
    });

    test('should return false if events do not have conflicts', () => {
        const expected = true;
        const actual = SUT(["01:15","02:00"], ["02:00","03:00"]);
        expect(actual).toBe(expected);
    });

    test('should return true if events have conflicts', () => {
        const expected = true;
        const actual = SUT(["01:00","02:00"], ["01:20","03:00"]);
        expect(actual).toBe(expected);
    });

    test('should return true if events have conflicts', () => {
        const expected = false;
        const actual = SUT(["10:00","11:00"], ["14:00","15:00"]);
        expect(actual).toBe(expected);
    });
});

describe('haveConflicts_FASTEST', () => {
    const SUT = haveConflict_FASTEST;

    // bad weather test cases
    test('should return false if events is empty', () => {
        const expected = false;
        const actual = SUT([], []);
        expect(actual).toBe(expected);
    });

    // good weather test cases
    test('should return true if events have conflicts', () => {
        const expected = true;
        const actual = SUT(['10:00', '11:00'], ['10:30', '11:30']);
        expect(actual).toBe(expected);
    });

    test('should return false if events do not have conflicts', () => {
        const expected = true;
        const actual = SUT(["01:15","02:00"], ["02:00","03:00"]);
        expect(actual).toBe(expected);
    });

    test('should return true if events have conflicts', () => {
        const expected = true;
        const actual = SUT(["01:00","02:00"], ["01:20","03:00"]);
        expect(actual).toBe(expected);
    });

    test('should return true if events have conflicts', () => {
        const expected = false;
        const actual = SUT(["10:00","11:00"], ["14:00","15:00"]);
        expect(actual).toBe(expected);
    });
});