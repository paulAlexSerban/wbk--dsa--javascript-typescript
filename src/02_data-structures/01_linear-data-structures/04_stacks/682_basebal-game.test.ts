import { calPoints } from "./682_basebal-game";

describe("calPoints", () => {
  const SUT = calPoints;

  // bad weather tests
  it("should return 0 for an empty array", () => {
    const actual = SUT([]);
    const expected = 0;
    expect(actual).toBe(expected);
  });

  it("should return 0 for an array with a single invalid operation", () => {
    const actual = SUT(["X"]);
    const expected = 0;
    expect(actual).toBe(expected);
  });

  // good weather tests

  it('should return 30 for ["5","2","C","D","+"]', () => {
    const actual = SUT(["5", "2", "C", "D", "+"]);
    const expected = 30;
    expect(actual).toBe(expected);
  });

  it('should return 27 for ["5","-2","4","C","D","9","+","+"]', () => {
    const actual = SUT(["5", "-2", "4", "C", "D", "9", "+", "+"]);
    const expected = 27;
    expect(actual).toBe(expected);
  });

  it('should return 1 for ["1"]', () => {
    const actual = SUT(["1"]);
    const expected = 1;
    expect(actual).toBe(expected);
  });

  it('should return 0 for ["C"]', () => {
    const actual = SUT(["C"]);
    const expected = 0;
    expect(actual).toBe(expected);
  });

  it('should return 1 for ["1","C"]', () => {
    const actual = SUT(["1", "C"]);
    const expected = 0;
    expect(actual).toBe(expected);
  });

  it('should return 0 for ["C","C"]', () => {
    const actual = SUT(["C", "C"]);
    const expected = 0;
    expect(actual).toBe(expected);
  });

  it('should return 0 for ["C","C","C"]', () => {
    const actual = SUT(["C", "C", "C"]);
    const expected = 0;
    expect(actual).toBe(expected);
  });

  it('should return 0 for ["+","C","C"]', () => {
    const actual = SUT(["+", "C", "C"]);
    const expected = 0;
    expect(actual).toBe(expected);
  });
});
