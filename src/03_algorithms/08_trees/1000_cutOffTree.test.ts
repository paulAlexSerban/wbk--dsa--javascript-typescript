import { cutOffTree } from './1000_cutOffTree';

describe('cutOffTree', () => {
    test('successfully cuts off all trees in order', () => {
        const forest = [[1,2,3],[0,0,4],[7,6,5]];
        expect(cutOffTree(forest)).toBe(6);
    });

    test('returns -1 when trees cannot be accessed', () => {
        const forest = [
            [1, 2, 3],
            [0, 0, 0],
            [7, 6, 5]
        ];
        expect(cutOffTree(forest)).toBe(-1);
    });

    test('works with a forest where initial position has a tree', () => {
        const forest = [
            [2, 3, 4],
            [0, 0, 5],
            [8, 7, 6]
        ];
        expect(cutOffTree(forest)).toBe(6);
    });

    test('handles a single tree', () => {
      const forest = [
          [1, 1, 1],
          [1, 2, 1],
          [1, 1, 1],
      ];
      expect(cutOffTree(forest)).toBe(2);
  });
  

  test('handles a complex forest layout', () => {
    const forest = [
        [4, 2, 3],
        [0, 0, 1],
        [7, 6, 5]
    ];
    expect(cutOffTree(forest)).toBe(10); // Assuming '10' is the correct minimum steps
});



    test('returns 0 when there are no trees to cut', () => {
        const forest = [
            [1, 1, 1],
            [1, 1, 1],
            [1, 1, 1]
        ];
        expect(cutOffTree(forest)).toBe(0);
    });

    test('handles large forest with various obstacles', () => {
        const forest = [
            [2, 3, 4, 0, 0],
            [0, 0, 5, 8, 9],
            [1, 7, 6, 0, 0]
        ];
        expect(cutOffTree(forest)).toBe(9);
    });
});
