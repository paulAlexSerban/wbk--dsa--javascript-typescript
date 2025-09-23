import {compareVersion} from './compare-version-numbers';

describe('compareVersion', () => {
    test('compares versions with different lengths', () => {
        expect(compareVersion("1.0", "1")).toBe(0);
        expect(compareVersion("1.0.1", "1")).toBe(1);
        expect(compareVersion("1", "1.0.1")).toBe(-1);
    });

    test('compares versions with leading zeros', () => {
        expect(compareVersion("1.01", "1.001")).toBe(0);
        expect(compareVersion("1.0.0", "1")).toBe(0);
        expect(compareVersion("1.0.2", "1.0.10")).toBe(-1);
    });

    test('compares versions with multiple revisions', () => {
        expect(compareVersion("1.2.3", "1.2.4")).toBe(-1);
        expect(compareVersion("2.0.0", "1.9.9")).toBe(1);
        expect(compareVersion("3.0.1", "3.0.1")).toBe(0);
    });

    test('compares versions with large numbers', () => {
        expect(compareVersion("1000.0.0", "999.999.999")).toBe(1);
        expect(compareVersion("1.0.0", "1.0.0")).toBe(0);
        expect(compareVersion("1.0.0", "1.0.1")).toBe(-1);
    });
    test('compares versions with trailing zeros', () => {
        expect(compareVersion("1.0.0", "1.0")).toBe(0);
        expect(compareVersion("1.0.0", "1.0.0.0")).toBe(0);
        expect(compareVersion("1.0.1", "1.0")).toBe(1);
    });
    test('compares versions with single digit revisions', () => {
        expect(compareVersion("1.2.3", "1.2.4")).toBe(-1);
        expect(compareVersion("1.2.3", "1.3.0")).toBe(-1);
        expect(compareVersion("1.2.3", "2.0.0")).toBe(-1);
    });
    test('compares versions with varying number of revisions', () => {
        expect(compareVersion("1.0", "1.0.0")).toBe(0);
        expect(compareVersion("1.0.1", "1")).toBe(1);
        expect(compareVersion("1", "1.0.1")).toBe(-1);
    });
    test('compares versions with all zero revisions', () => {
        expect(compareVersion("0.0.0", "0")).toBe(0);
        expect(compareVersion("0.0.1", "0")).toBe(1);
        expect(compareVersion("0.1", "0")).toBe(1);
        expect(compareVersion("0.0", "0.0.0")).toBe(0);
    });
});