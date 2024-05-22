import { DynamicArray } from "./1470_dynamic-arrays";

describe("DynamicArray", () => {
  let SUT = new DynamicArray(1);
  beforeEach(() => {
    SUT = new DynamicArray(1);
  });
  // BAD WEATHER TESTS
  it("should throw an error when popping an empty array", () => {
    expect(() => SUT.popback()).toThrow("Array is empty");
  });

  // GOOD WEATHER TESTS
  it("should push and pop a value", () => {
    SUT.pushback(1);
    expect(SUT.popback()).toBe(1);
  });

  it("should push and get a value", () => {
    SUT.pushback(1);
    expect(SUT.get(0)).toBe(1);
  });

  it("should push and set a value", () => {
    SUT.pushback(1);
    SUT.set(0, 2);
    expect(SUT.get(0)).toBe(2);
  });

  it("should resize the array", () => {
    SUT.pushback(1);
    SUT.pushback(2);
    expect(SUT.getCapacity()).toBe(2);
  });

  it("should get the size of the array", () => {
    SUT.pushback(1);
    SUT.pushback(2);
    expect(SUT.getSize()).toBe(2);
  });

  // NEETCODE TESTS
  /**
   * Input: ["Array", 1, "getSize", "getCapacity"]
   * Output: [null, 0, 1]
   */
  it("should return the size and capacity of the array", () => {
    expect(SUT.getSize()).toBe(0);
    expect(SUT.getCapacity()).toBe(1);
  });
  /**
   * Input: ["Array", 1, "pushback", 1, "getCapacity", "pushback", 2, "getCapacity"]
   * Output: [null, null, 1, null, 2]
   */

  it("should return the capacity of the array after resizing", () => {
    SUT.pushback(1);
    expect(SUT.getCapacity()).toBe(1);
    SUT.pushback(2);
    expect(SUT.getCapacity()).toBe(2);
  });

  /**
   * Input: ["Array", 1, "getSize", "getCapacity", "pushback", 1, "getSize", "getCapacity", "pushback", 2, "getSize", "getCapacity", "get", 1, "set", 1, 3, "get", 1, "popback", "getSize", "getCapacity"]
   * Output: [null,0,1,null,1,1,null,2,2,2,null,3,3,1,2]
   */
  it("should return the size and capacity of the array after pushing, setting, and popping", () => {
    expect(SUT.getSize()).toBe(0);
    expect(SUT.getCapacity()).toBe(1);
    SUT.pushback(1);
    expect(SUT.getSize()).toBe(1);
    expect(SUT.getCapacity()).toBe(1);
    SUT.pushback(2);
    expect(SUT.getSize()).toBe(2);
    expect(SUT.getCapacity()).toBe(2);
    expect(SUT.get(1)).toBe(2);
    SUT.set(1, 3);
    expect(SUT.get(1)).toBe(3);
    expect(SUT.popback()).toBe(3);
    expect(SUT.getSize()).toBe(1);
    expect(SUT.getCapacity()).toBe(2);
  });
});
