import {
  removeDuplicates,
  removeDuplicates_FASTEST,
} from "./28_remove-duplicates-from-sorted-array";

describe("remove duplicates from sorted array - removeDuplicates", () => {
    const SUT = removeDuplicates;
  // bad weather tests
  test("empty array", () => {
    const actual = SUT([]);
    const expected = 0;
    expect(actual).toBe(expected);
  });

  // good weather tests
  test("no duplicates", () => { 
    const actual = SUT([1, 2, 3]);
    const expected = 3;
    expect(actual).toBe(expected);
  });

  test("duplicates", () => {
    const actual = SUT([1, 1, 2, 3]);
    const expected = 3;
    expect(actual).toBe(expected);
  });
});

describe("remove duplicates from sorted array - removeDuplicates_FASTEST", () => {
    const SUT = removeDuplicates_FASTEST;
  // bad weather tests
  test("empty array", () => {
    const actual = SUT([]);
    const expected = 0;
    expect(actual).toBe(expected);
  });

  // good weather tests
  test("no duplicates", () => { 
    const actual = SUT([1, 2, 3]);
    const expected = 3;
    expect(actual).toBe(expected);
  });

  test("duplicates", () => {
    const actual = SUT([1, 1, 2, 3]);
    const expected = 3;
    expect(actual).toBe(expected);
  });
})