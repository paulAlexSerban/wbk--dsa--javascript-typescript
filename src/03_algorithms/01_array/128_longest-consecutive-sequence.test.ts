import { Action } from './../../04_design/state-management/basic-redux-like-store/01_basic-redux-like-store.d';
import {
  longestConsecutive,
  longestConsecutive_FASTEST,
  Solution,
} from "./128_longest-consecutive-sequence";

describe("longestConsecutive", () => {
  let SUT = longestConsecutive;
  // bad weather test
  it("should return 0 when input is empty", () => {
    const actual = SUT([]);
    const expected = 0;
    expect(actual).toBe(expected);
  });

  // good weather tests
  it("should return 4 when input is [100,4,200,1,3,2]", () => {
    const actual = SUT([100, 4, 200, 1, 3, 2]);
    const expected = 4;
    expect(actual).toBe(expected);
  });

  it("should return 9 when input is [0,3,7,2,5,8,4,6,0,1]", () => {
    const actual = SUT([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]);
    const expected = 9;
    expect(actual).toBe(expected);
  });

  it("should return 1 when input is [1]", () => {
    const actual = SUT([1]);
    const expected = 1;
    expect(actual).toBe(expected);
  });
});

describe("longestConsecutive_FASTEST", () => {
    const SUT = longestConsecutive_FASTEST;
  // bad weather test
  it("should return 0 when input is empty", () => {
    const actual = SUT([]);
    const expected = 0;
    expect(actual).toBe(expected);
  });

  // good weather tests
  it("should return 4 when input is [100,4,200,1,3,2]", () => {
    const actual = SUT([100, 4, 200, 1, 3, 2]);
    const expected = 4;
    expect(actual).toBe(expected);
  });

  it("should return 9 when input is [0,3,7,2,5,8,4,6,0,1]", () => {
    const actual = SUT([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]);
    const expected = 9;
    expect(actual).toBe(expected);
  });

  it("should return 1 when input is [1]", () => {
    const actual = SUT([1]);
    const expected = 1;
    expect(actual).toBe(expected);
  });
});

describe("NeetCode Solution", () => {
    let SUT = new Solution();

    beforeEach(() => {
        SUT = new Solution();
    })

  // bad weather test
  it("should return 0 when input is empty", () => {
    const actual = SUT.longestConsecutive([]);
    const expected = 0;
    expect(actual).toBe(expected);
  });

  // good weather tests
  it("should return 4 when input is [100,4,200,1,3,2]", () => {
    const actual = SUT.longestConsecutive([100, 4, 200, 1, 3, 2]);
    const expected = 4;
    expect(actual).toBe(expected);
  });

  it("should return 9 when input is [0,3,7,2,5,8,4,6,0,1]", () => {
    const actual = SUT.longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]);
    const expected = 9;
    expect(actual).toBe(expected);
  });

  it("should return 1 when input is [1]", () => {
    const actual = SUT.longestConsecutive([1]);
    const expected = 1;
    expect(actual).toBe(expected);
  });

  it("should return 1 when input is [1, 2]", () => {
    const actual = SUT.longestConsecutive([1, 2]);
    const expected = 2;
    expect(actual).toBe(expected);
  });
});
