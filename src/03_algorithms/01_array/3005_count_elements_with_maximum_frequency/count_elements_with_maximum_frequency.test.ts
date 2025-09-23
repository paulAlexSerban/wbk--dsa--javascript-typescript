import { maxFrequencyElements } from './count_elements_with_maximum_frequency';
import { maxFrequencyElements as maxFrequencyElementsOptimized } from './count_elements_with_maximum_frequency_optimized_sol';

describe('maxFrequencyElements', () => {
    test('returns the correct count for a simple case', () => {
        const nums = [1, 2, 2, 3, 3, 3];
        expect(maxFrequencyElements(nums)).toBe(3); // 3 appears most frequently (3 times)
    });
    
    test('handles multiple elements with the same maximum frequency', () => {
        const nums = [1, 1, 2, 2, 3];
        expect(maxFrequencyElements(nums)).toBe(4); // Both 1 and 2 appear twice
    });

    test('returns 0 for an empty array', () => {
        const nums: number[] = [];
        expect(maxFrequencyElements(nums)).toBe(0);
    });

    test('handles negative numbers and zeros', () => {
        const nums = [0, -1, -1, 0, 0, -2];
        expect(maxFrequencyElements(nums)).toBe(3); // 0 appears most frequently (3 times)
    });

    test('handles large arrays efficiently', () => {
        const nums = Array(100000).fill(1).concat(Array(50000).fill(2));
        expect(maxFrequencyElements(nums)).toBe(100000); // 1 appears most frequently (100000 times)
    }); 

    test('handles all unique elements', () => {
        const nums = [1, 2, 3, 4, 5];
        expect(maxFrequencyElements(nums)).toBe(5); // All elements appear once
    });

    test('handles single element array', () => {
        const nums = [42];
        expect(maxFrequencyElements(nums)).toBe(1); // Single element appears once
    });

    test('handles large range of numbers', () => {
        const nums = [1000, 2000, 1000, 3000, 2000, 1000];
        expect(maxFrequencyElements(nums)).toBe(3); // 1000 appears most frequently (3 times)
    });

    test('handles array with all identical elements', () => {
        const nums = [7, 7, 7, 7, 7];
        expect(maxFrequencyElements(nums)).toBe(5); // 7 appears most frequently (5 times)
    });

    test('handles large numbers', () => {
        const nums = [Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER];
        expect(maxFrequencyElements(nums)).toBe(2); // MAX_SAFE_INTEGER appears most frequently (2 times)
    });
})

describe('maxFrequencyElementsOptimized', () => {
    test('returns the correct count for a simple case', () => {
        const nums = [1, 2, 2, 3, 3, 3];
        expect(maxFrequencyElementsOptimized(nums)).toBe(3); // 3 appears most frequently (3 times)
    });
    
    test('handles multiple elements with the same maximum frequency', () => {
        const nums = [1, 1, 2, 2, 3];
        expect(maxFrequencyElementsOptimized(nums)).toBe(4); // Both 1 and 2 appear twice
    });

    test('returns 0 for an empty array', () => {
        const nums: number[] = [];
        expect(maxFrequencyElementsOptimized(nums)).toBe(0);
    });

    test('handles negative numbers and zeros', () => {
        const nums = [0, -1, -1, 0, 0, -2];
        expect(maxFrequencyElementsOptimized(nums)).toBe(3); // 0 appears most frequently (3 times)
    });

    test('handles large arrays efficiently', () => {
        const nums = Array(100000).fill(1).concat(Array(50000).fill(2));
        expect(maxFrequencyElementsOptimized(nums)).toBe(100000); // 1 appears most frequently (100000 times)
    }); 

    test('handles all unique elements', () => {
        const nums = [1, 2, 3, 4, 5];
        expect(maxFrequencyElementsOptimized(nums)).toBe(5); // All elements appear once
    });

    test('handles single element array', () => {
        const nums = [42];
        expect(maxFrequencyElementsOptimized(nums)).toBe(1); // Single element appears once
    });

    test('handles large range of numbers', () => {
        const nums = [1000, 2000, 1000, 3000, 2000, 1000];
        expect(maxFrequencyElementsOptimized(nums)).toBe(3); // 1000 appears most frequently (3 times)
    });

    test('handles array with all identical elements', () => {
        const nums = [7, 7, 7, 7, 7];
        expect(maxFrequencyElementsOptimized(nums)).toBe(5); // 7 appears most frequently (5 times)
    });
});