import {
  getConcatenation,
  getConatenation_concat,
} from "./1929_concatenation-of-array";

describe("test getConcatenation", () => {
  const SUT = getConcatenation;

  // bad weather tests
  it("should return [] when nums is []", () => {
    const actual = SUT([]);
    const expected = [];
    expect(actual).toEqual(expected);
  });

  // good weather tests
  it("should return [1, 2, 1, 2] when nums is [1, 2]", () => {
    const actual = SUT([1, 2]);
    const expected = [1, 2, 1, 2];
    expect(actual).toEqual(expected);
  });

  it("should return [1, 2, 3, 1, 2, 3] when nums is [1, 2, 3]", () => {
    const actual = SUT([1, 2, 3]);
    const expected = [1, 2, 3, 1, 2, 3];
    expect(actual).toEqual(expected);
  });
});

describe("test getConatenation_concat", () => {
  const SUT = getConatenation_concat;

  // bad weather tests
  it("should return [] when nums is []", () => {
    const actual = SUT([]);
    const expected = [];
    expect(actual).toEqual(expected);
  });

  // good weather tests
  it("should return [1, 2, 1, 2] when nums is [1, 2]", () => {
    const actual = SUT([1, 2]);
    const expected = [1, 2, 1, 2];
    expect(actual).toEqual(expected);
  });

  it("should return [1, 2, 3, 1, 2, 3] when nums is [1, 2, 3]", () => {
    const actual = SUT([1, 2, 3]);
    const expected = [1, 2, 3, 1, 2, 3];
    expect(actual).toEqual(expected);
  });
});
