import { checkEqual as checkEqualV1 } from "./are-arrays-equal-naive-approach";
import { checkEqual as checkEqualV2 } from "./are-arrays-equal-expected-approach";
import { areArraysEqual } from "./are-arrays-equal";

describe("checkEqualV1", () => {
  // Test for positive cases
  test("returns true for [1, 2, 3] and [1, 2, 3]", () => {
    expect(checkEqualV1([1, 2, 3], [1, 2, 3])).toBe(true);
  });

  test("returns true for two empty arrays", () => {
    expect(checkEqualV1([], [])).toBe(true);
  });

  // Test for negative cases
  test("returns false for [1, 2, 3] and [1, 2, 4]", () => {
    expect(checkEqualV1([1, 2, 3], [1, 2, 4])).toBe(false);
  });

  test("returns false for arrays of different lengths", () => {
    expect(checkEqualV1([1, 2, 3], [1, 2, 3, 4])).toBe(false);
  });

  // string case ["uid", "id", "name", "email", "phone", "address", "city", "state", "country", "zip", "created_at", "updated_at"]

  test('returns false for ["uid", "id", "name", "email", "phone", "address", "city", "state", "country", "zip", "created_at", "updated_at"] and ["uid", "id", "name", "email", "phone", "address", "city", "state", "country", "zip", "created_at", "updated_at", "extra"]', () => {
    expect(
      checkEqualV1(
        [
          "uid",
          "id",
          "name",
          "email",
          "phone",
          "address",
          "city",
          "state",
          "country",
          "zip",
          "created_at",
          "updated_at",
        ],
        [
          "uid",
          "id",
          "name",
          "email",
          "phone",
          "address",
          "city",
          "state",
          "country",
          "zip",
          "created_at",
          "updated_at",
          "extra",
        ]
      )
    ).toBe(false);
  });

  // Test including Unicode characters
  test("returns true for arrays with Unicode characters that are equal", () => {
    expect(checkEqualV1(["日本", "本日"], ["日本", "本日"])).toBe(true);
  });
});

describe("checkEqualV2", () => {
  // Test for positive cases
  test("returns true for [1, 2, 3] and [1, 2, 3]", () => {
    expect(checkEqualV2([1, 2, 3], [1, 2, 3])).toBe(true);
  });

  test("returns true for two empty arrays", () => {
    expect(checkEqualV2([], [])).toBe(true);
  });

  // Test for negative cases
  test("returns false for [1, 2, 3] and [1, 2, 4]", () => {
    expect(checkEqualV2([1, 2, 3], [1, 2, 4])).toBe(false);
  });

  test("returns false for arrays of different lengths", () => {
    expect(checkEqualV2([1, 2, 3], [1, 2, 3, 4])).toBe(false);
  });

  // string case ["uid", "id", "name", "email", "phone", "address", "city", "state", "country", "zip", "created_at", "updated_at"]

  test('returns false for ["uid", "id", "name", "email", "phone", "address", "city", "state", "country", "zip", "created_at", "updated_at"] and ["uid", "id", "name", "email", "phone", "address", "city", "state", "country", "zip", "created_at", "updated_at", "extra"]', () => {
    expect(
      checkEqualV2(
        [
          "uid",
          "id",
          "name",
          "email",
          "phone",
          "address",
          "city",
          "state",
          "country",
          "zip",
          "created_at",
          "updated_at",
        ],
        [
          "uid",
          "id",
          "name",
          "email",
          "phone",
          "address",
          "city",
          "state",
          "country",
          "zip",
          "created_at",
          "updated_at",
          "extra",
        ]
      )
    ).toBe(false);
  });

  // Test including Unicode characters
  test("returns true for arrays with Unicode characters that are equal", () => {
    expect(checkEqualV2(["日本", "本日"], ["日本", "本日"])).toBe(true);
  });
});

describe("areArraysEqual", () => {
  // Test for positive cases
  test("returns true for [1, 2, 3] and [1, 2, 3]", () => {
    expect(areArraysEqual([1, 2, 3], [1, 2, 3])).toBe(true);
  });

  test("returns true for two empty arrays", () => {
    expect(areArraysEqual([], [])).toBe(true);
  });

  // Test for negative cases
  test("returns false for [1, 2, 3] and [1, 2, 4]", () => {
    expect(areArraysEqual([1, 2, 3], [1, 2, 4])).toBe(false);
  });

  test("returns false for arrays of different lengths", () => {
    expect(areArraysEqual([1, 2, 3], [1, 2, 3, 4])).toBe(false);
  });

  // string case ["uid", "id", "name", "email", "phone", "address", "city", "state", "country", "zip", "created_at", "updated_at"]

  test('returns false for ["uid", "id", "name", "email", "phone", "address", "city", "state", "country", "zip", "created_at", "updated_at"] and ["uid", "id", "name", "email", "phone", "address", "city", "state", "country", "zip", "created_at", "updated_at", "extra"]', () => {
    expect(
      areArraysEqual(
        [
          "uid",
          "id",
          "name",
          "email",
          "phone",
          "address",
          "city",
          "state",
          "country",
          "zip",
          "created_at",
          "updated_at",
        ],
        [
          "uid",
          "id",
          "name",
          "email",
          "phone",
          "address",
          "city",
          "state",
          "country",
          "zip",
          "created_at",
          "updated_at",
          "extra",
        ]
      )
    ).toBe(false);
  });
});