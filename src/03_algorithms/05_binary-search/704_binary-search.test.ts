import { searchV1, searchV2, searchV3 } from './704_binary-search';

describe('search function', () => {
    it('should return the index of a target value when it exists in the array', () => {
        expect(searchV1([-1, 0, 3, 5, 9, 12], 9)).toBe(4);
        expect(searchV1([-10, -3, 0, 5, 9, 12], -10)).toBe(0);
        expect(searchV1([1, 2, 3, 4, 5], 5)).toBe(4);
    });

    it('should return -1 when the target value does not exist in the array', () => {
        expect(searchV1([-1, 0, 3, 5, 9, 12], 2)).toBe(-1);
        expect(searchV1([1, 3, 5, 7, 9], 4)).toBe(-1);
    });

    it('should handle edge cases correctly', () => {
        // Empty array
        expect(searchV1([], 1)).toBe(-1);
        // Single-element array where the element is the target
        expect(searchV1([5], 5)).toBe(0);
        // Single-element array where the element is not the target
        expect(searchV1([5], 3)).toBe(-1);
        // Large array to ensure performance is not degraded
        const largeArray = Array.from({ length: 10000 }, (_, i) => i * 2); // Even numbers from 0 to 19998
        expect(searchV1(largeArray, 1234)).toBe(617);
        expect(searchV1(largeArray, 19999)).toBe(-1); // Element not in array
    });
});

describe('search function', () => {
  it('should return the index of a target value when it exists in the array', () => {
      expect(searchV2([-1, 0, 3, 5, 9, 12], 9)).toBe(4);
      expect(searchV2([-10, -3, 0, 5, 9, 12], -10)).toBe(0);
      expect(searchV2([1, 2, 3, 4, 5], 5)).toBe(4);
  });

  it('should return -1 when the target value does not exist in the array', () => {
      expect(searchV2([-1, 0, 3, 5, 9, 12], 2)).toBe(-1);
      expect(searchV2([1, 3, 5, 7, 9], 4)).toBe(-1);
  });

  it('should handle edge cases correctly', () => {
      // Empty array
      expect(searchV2([], 1)).toBe(-1);
      // Single-element array where the element is the target
      expect(searchV2([5], 5)).toBe(0);
      // Single-element array where the element is not the target
      expect(searchV2([5], 3)).toBe(-1);
      // Large array to ensure performance is not degraded
      const largeArray = Array.from({ length: 10000 }, (_, i) => i * 2); // Even numbers from 0 to 19998
      expect(searchV2(largeArray, 1234)).toBe(617);
      expect(searchV2(largeArray, 19999)).toBe(-1); // Element not in array
  });
});

describe('search function', () => {
  it('should return the index of a target value when it exists in the array', () => {
      expect(searchV3([-1, 0, 3, 5, 9, 12], 9)).toBe(4);
      expect(searchV3([-10, -3, 0, 5, 9, 12], -10)).toBe(0);
      expect(searchV3([1, 2, 3, 4, 5], 5)).toBe(4);
  });

  it('should return -1 when the target value does not exist in the array', () => {
      expect(searchV3([-1, 0, 3, 5, 9, 12], 2)).toBe(-1);
      expect(searchV3([1, 3, 5, 7, 9], 4)).toBe(-1);
  });

  it('should handle edge cases correctly', () => {
      // Empty array
      expect(searchV3([], 1)).toBe(-1);
      // Single-element array where the element is the target
      expect(searchV3([5], 5)).toBe(0);
      // Single-element array where the element is not the target
      expect(searchV3([5], 3)).toBe(-1);
      // Large array to ensure performance is not degraded
      const largeArray = Array.from({ length: 10000 }, (_, i) => i * 2); // Even numbers from 0 to 19998
      expect(searchV3(largeArray, 1234)).toBe(617);
      expect(searchV3(largeArray, 19999)).toBe(-1); // Element not in array
  });
});