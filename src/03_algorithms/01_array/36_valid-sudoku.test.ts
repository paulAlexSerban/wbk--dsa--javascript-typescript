import { isValidSudoku, isValidSudoku__FAST } from "./36_valid-sudoku";

describe("isValidSudoku", () => {
  const SUT = isValidSudoku;
  // GOOD WEATHER TESTS
  it("should return true for valid board", () => {
    const board = [
      ["5", "3", ".", ".", "7", ".", ".", ".", "."],
      ["6", ".", ".", "1", "9", "5", ".", ".", "."],
      [".", "9", "8", ".", ".", ".", ".", "6", "."],
      ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
      ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
      ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
      [".", "6", ".", ".", ".", ".", "2", "8", "."],
      [".", ".", ".", "4", "1", "9", ".", ".", "5"],
      [".", ".", ".", ".", "8", ".", ".", "7", "9"],
    ];
    const actual = SUT(board);
    const expected = true;
    expect(actual).toBe(expected);
  });

    it("should return true for empty board", () => {
        const board = Array.from({ length: 9 }, () => Array(9).fill("."));
        const actual = SUT(board);
        const expected = true;
        expect(actual).toBe(expected);
    });

    // BAD WEATHER TESTS
    it("should return false for invalid board (duplicate in row)", () => {
        const board = [
            ["5", "3", ".", ".", "7", ".", ".", ".", "."],
            ["6", ".", ".", "1", "9", "5", ".", ".", "."],
            [".", "9", "8", ".", ".", ".", ".", "6", "."],
            ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
            ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
            ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
            [".", "6", ".", ".", ".", ".", "2", "8", "."],
            [".", ".", ".", "4", "1", "9", ".", ".", "5"],
            ["5", ".", ".", ".", "8", ".", ".", "7", "9"],
        ];
        const actual = SUT(board);
        const expected = false;
        expect(actual).toBe(expected);
    });
});


describe("isValidSudoku__FAST", () => {
    const SUT = isValidSudoku__FAST
    // GOOD WEATHER TESTS
    it("should return true for valid board", () => {
      const board = [
        ["5", "3", ".", ".", "7", ".", ".", ".", "."],
        ["6", ".", ".", "1", "9", "5", ".", ".", "."],
        [".", "9", "8", ".", ".", ".", ".", "6", "."],
        ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
        ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
        ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
        [".", "6", ".", ".", ".", ".", "2", "8", "."],
        [".", ".", ".", "4", "1", "9", ".", ".", "5"],
        [".", ".", ".", ".", "8", ".", ".", "7", "9"],
      ];
      const actual = SUT(board);
      const expected = true;
      expect(actual).toBe(expected);
    });
  
      it("should return true for empty board", () => {
          const board = Array.from({ length: 9 }, () => Array(9).fill("."));
          const actual = SUT(board);
          const expected = true;
          expect(actual).toBe(expected);
      });
  
      // BAD WEATHER TESTS
      it("should return false for invalid board (duplicate in row)", () => {
          const board = [
              ["5", "3", ".", ".", "7", ".", ".", ".", "."],
              ["6", ".", ".", "1", "9", "5", ".", ".", "."],
              [".", "9", "8", ".", ".", ".", ".", "6", "."],
              ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
              ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
              ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
              [".", "6", ".", ".", ".", ".", "2", "8", "."],
              [".", ".", ".", "4", "1", "9", ".", ".", "5"],
              ["5", ".", ".", ".", "8", ".", ".", "7", "9"],
          ];
          const actual = SUT(board);
          const expected = false;
          expect(actual).toBe(expected);
      });
});