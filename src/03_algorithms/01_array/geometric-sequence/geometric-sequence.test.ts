import { geometricSequence } from "./geometric-sequence";

describe("geometricSequence", () => {
  it("should generate a geometric sequence with the given length and total number", () => {
    const listLength = 5;
    const totalNumber = 20000;
    const minValue = 1000;
    const weight = 0.5;
    const expectedResult = [10323, 5161, 2581, 1290, 1000];
    expect(geometricSequence(listLength, totalNumber, minValue, weight)).toEqual(
      expectedResult
    );
  });

  it("should generate a geometric sequence with the given length and total number", () => {
    const listLength = 10;
    const totalNumber = 60000;
    const minValue = 1000;
    const weight = 0.5;
    const expectedResult = [
      30029, 15015, 7507, 3754, 1877, 1000, 1000, 1000, 1000, 1000,
    ];
    expect(geometricSequence(listLength, totalNumber, minValue, weight)).toEqual(
      expectedResult
    );
  });

  it("should generate a geometric sequence with the given length and total number", () => {
    const listLength = 4;
    const totalNumber = 50000;
    const minValue = 1000;
    const weight = 0.5;
    const expectedResult = [26667, 13333, 6667, 3333];
    expect(geometricSequence(listLength, totalNumber, minValue, weight)).toEqual(
      expectedResult
    );
  });

  it("should generate a geometric sequence with the given length and total number and total sum of all items to be equal to totalNumber", () => {
    const listLength = 5;
    const totalNumber = 120000;
    const minValue = 1000;
    const weight = 0.8;
    const expectedResult = [35697, 28558, 22846, 18277, 14622];
    expect(geometricSequence(listLength, totalNumber, minValue, weight)).toEqual(
      expectedResult
    );

    // expect total sum of all items to be equal to totalNumber
    const sum = expectedResult.reduce((acc, val) => acc + val, 0);
    console.log({ sum });
    expect(sum).toBeCloseTo(totalNumber, 2);
  });

  it("should generate a geometric sequence with the given length and total number and total sum of all items to be equal to totalNumber", () => {
    const listLength = 4;
    const totalNumber = 50000;
    const minValue = 1000;
    const weight = 0.8;
    const expectedResult = [16938, 13550, 10840, 8672];
    expect(geometricSequence(listLength, totalNumber, minValue, weight)).toEqual(
      expectedResult
    );

    // expect total sum of all items to be equal to totalNumber
    const sum = expectedResult.reduce((acc, val) => acc + val, 0);
    console.log({ sum });
    expect(sum).toBeCloseTo(totalNumber, 2);
  });

  it("should throw an error if the list length is less than or equal to 0", () => {
    const listLength = -1;
    const totalNumber = 31.25;
    const minValue = 1;
    const weight = 0.5;
    expect(() =>
      geometricSequence(listLength, totalNumber, minValue, weight)
    ).toThrow("List length must be greater than 0.");
  });
});
