import insert from './57_insert-interval';

describe('Insert Interval', () => {
    test('Example 1', () => {
        const intervals = [[1,3],[6,9]];
        const newInterval = [2,5];
        const result = [[1,5],[6,9]];
        expect(insert(intervals, newInterval)).toStrictEqual(result);
    });

    test('Example 2', () => {
        const intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]];
        const newInterval = [4,8];
        const result = [[1,2],[3,10],[12,16]];
        expect(insert(intervals, newInterval)).toStrictEqual(result);
    });

    test('should insert a non-overlapping interval at the beginning', () => {
      const intervals = [[3, 5], [8, 10]];
      const newInterval = [1, 2];
      expect(insert(intervals, newInterval)).toEqual([[1, 2], [3, 5], [8, 10]]);
    });
  
    test('should insert a non-overlapping interval at the end', () => {
      const intervals = [[1, 2], [3, 5]];
      const newInterval = [6, 7];
      expect(insert(intervals, newInterval)).toEqual([[1, 2], [3, 5], [6, 7]]);
    });
  
    test('should merge an overlapping interval', () => {
      const intervals = [[1, 3], [6, 9]];
      const newInterval = [2, 5];
      expect(insert(intervals, newInterval)).toEqual([[1, 5], [6, 9]]);
    });
  
    test('should merge intervals when new interval overlaps multiple intervals', () => {
      const intervals = [[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]];
      const newInterval = [4, 8];
      // intervals [3, 5], [6, 7], [8, 10] overlap with newInterval [4, 8] so they should be merged into [3, 10]
      expect(insert(intervals, newInterval)).toEqual([[1, 2], [3, 10], [12, 16]]);
    });
  
    test('should handle an interval that does not overlap with any existing interval', () => {
      const intervals = [[1, 5], [10, 15]];
      const newInterval = [6, 7];
      expect(insert(intervals, newInterval)).toEqual([[1, 5], [6, 7], [10, 15]]);
    });
  
    test('should merge into a single interval when the new interval extends beyond all others', () => {
      const intervals = [[2, 3], [4, 5], [6, 7], [8, 9]];
      const newInterval = [1, 10];
      expect(insert(intervals, newInterval)).toEqual([[1, 10]]);
    });
})