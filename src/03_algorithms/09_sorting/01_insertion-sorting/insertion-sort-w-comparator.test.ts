import {
  insertionSortWithComparator,
  stringComparator,
  descendingAgeComparator,
  ascendingAgeComparator,
} from "./insertion-sort-w-comparator";

describe("insertionSortWithComparator", () => {
  describe("default comparator", () => {
    //good weather tests
    test("should return the sorted array out of [4,2,1,3]", () => {
      expect(insertionSortWithComparator([4, 2, 1, 3])).toEqual([1, 2, 3, 4]);
    });

    test("should return the sorted array out of [4, 20, 12, 10, 7, 9]", () => {
      expect(insertionSortWithComparator([4, 20, 12, 10, 7, 9])).toEqual([
        4, 7, 9, 10, 12, 20,
      ]);
    });

    test("should return the sorted array out of [0, -10, 7, 4]", () => {
      expect(insertionSortWithComparator([0, -10, 7, 4])).toEqual([
        -10, 0, 4, 7,
      ]);
    });

    test("should return the sorted array out of [1, 2, 3]", () => {
      expect(insertionSortWithComparator([1, 2, 3])).toEqual([1, 2, 3]);
    });

    // bad weather tests
    test("should return the same array if it has 0 or 1 element", () => {
      expect(insertionSortWithComparator([1])).toEqual([1]);
    });

    // edge cases
    test("should return an empty array if the input is an empty array", () => {
      expect(insertionSortWithComparator([])).toEqual([]);
    });
  });

  describe("string comparator", () => {
    //good weather tests
    test("should return the sorted array out of ['c', 'a', 'b']", () => {
      expect(
        insertionSortWithComparator(["c", "a", "b"], stringComparator)
      ).toEqual(["a", "b", "c"]);
    });

    test("should return the sorted array out of ['LilBub', 'Garfield', 'Heathcliff', 'Blue', 'Grumpy']", () => {
      expect(
        insertionSortWithComparator(
          ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"],
          stringComparator
        )
      ).toEqual(["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"]);
    });

    // bad weather tests
    test("should return the same array if it has 0 or 1 element", () => {
      expect(insertionSortWithComparator(["a"], stringComparator)).toEqual([
        "a",
      ]);
    });

    // edge cases
    test("should return an empty array if the input is an empty array", () => {
      expect(insertionSortWithComparator([], stringComparator)).toEqual([]);
    });

    test("should return the sorted array out of ['a', 'a', 'c']", () => {
      expect(
        insertionSortWithComparator(["a", "a", "c"], stringComparator)
      ).toEqual(["a", "a", "c"]);
    });
  });

  describe("ascending age comparator comparator", () => {
    // good weather tests
    test("should return the sorted array out of [ { age: 4 }, { age: 8 }, { age: 2 }, { age: 9 } ]", () => {
      expect(
        insertionSortWithComparator(
          [{ age: 4 }, { age: 8 }, { age: 2 }, { age: 9 }],
          ascendingAgeComparator
        )
      ).toEqual([{ age: 2 }, { age: 4 }, { age: 8 }, { age: 9 }]);
    });

    test("should return the sorted array out of [ { age: 1 }, { age: 2 }, { age: 3 } ]", () => {
      expect(
        insertionSortWithComparator(
          [{ age: 1 }, { age: 2 }, { age: 3 }],
          ascendingAgeComparator
        )
      ).toEqual([{ age: 1 }, { age: 2 }, { age: 3 }]);
    });

    // bad weather tests
    test("should return the same array if it has 0 or 1 element", () => {
      expect(insertionSortWithComparator([{ age: 1 }], ascendingAgeComparator)).toEqual([
        { age: 1 },
      ]);
    });

    // edge cases
    test("should return an empty array if the input is an empty array", () => {
      expect(insertionSortWithComparator([], ascendingAgeComparator)).toEqual([]);
    });
  });

  describe("descending age comparator comparator", () => {
    // good weather tests
    test("should return the sorted array out of [ { age: 4 }, { age: 8 }, { age: 2 }, { age: 9 } ]", () => {
      expect(
        insertionSortWithComparator(
          [{ age: 4 }, { age: 8 }, { age: 2 }, { age: 9 }],
          descendingAgeComparator
        )
      ).toEqual([{ age: 9 }, { age: 8 }, { age: 4 }, { age: 2 }]);
    });

    test("should return the sorted array out of [ { age: 1 }, { age: 2 }, { age: 3 } ]", () => {
      expect(
        insertionSortWithComparator(
          [{ age: 1 }, { age: 2 }, { age: 3 }],
          descendingAgeComparator
        )
      ).toEqual([{ age: 3 }, { age: 2 }, { age: 1 }]);
    });

    // bad weather tests
    test("should return the same array if it has 0 or 1 element", () => {
      expect(insertionSortWithComparator([{ age: 1 }], descendingAgeComparator)).toEqual([
        { age: 1 },
      ]);
    });

    // edge cases
    test("should return an empty array if the input is an empty array", () => {
      expect(insertionSortWithComparator([], descendingAgeComparator)).toEqual([]);
    });
  })
});
