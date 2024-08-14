import {
  getNestedObjectFromPath,
  checkIfNestedObjectExists,
} from "./nested-object-construction";
describe("getNestedObjectFromPath", () => {
  const SUT = getNestedObjectFromPath;

  test("should return a nested object from 'data body1 0 primary pgc_eligible' with Simple Nested Object", () => {
    const actual = SUT("data body1 0 primary pgc_eligible ", "data", true);
    const expected = {
      body1: [
        {
          primary: {
            pgc_eligible: true,
          },
        },
      ],
    };
    expect(actual).toEqual(expected);
  });

  test("should return a nested object from 'data body 0 primary gan_id' with Simple Nested Object", () => {
    const actual = SUT("data body 0 primary gan_id ", "data", true);
    const expected = {
      body: [
        {
          primary: {
            gan_id: true,
          },
        },
      ],
    };
    expect(actual).toEqual(expected);
  });

  test("should return a nested object from 'data level1 level2 finalKey' with Simple Nested Object", () => {
    const actual = SUT("data level1 level2 finalKey ", "data", true);
    const expected = {
      level1: {
        level2: {
          finalKey: true,
        },
      },
    };
    expect(actual).toEqual(expected);
  });

  test("should return a nested object from 'data list 0 item value' with Nested Object with Arrays", () => {
    const actual = SUT("data list 0 item value ", "data", true);
    const expected = {
      list: [
        {
          item: {
            value: true,
          },
        },
      ],
    };
    expect(actual).toEqual(expected);
  });

  test("should return a nested object from 'data arr1 1 arr2 0 key' with Multiple Nested Arrays", () => {
    const actual = SUT("data arr1 1 arr2 0 key", "data", true);
    const expected = {
      arr1: [
        {},
        {
          arr2: [
            {
              key: true,
            },
          ],
        },
      ],
    };
    expect(actual).toEqual(expected);
  });

  test("should return a nested object from 'data 0 key' with Array at Root", () => {
    const actual = SUT("data 0 key", "data", true);
    const expected = [
      {
        key: true,
      },
    ];
    expect(actual).toEqual(expected);
  });

  test("should check if nested object exists in another object", () => {
    const nestedObject = SUT(
      "data body1 0 primary pgc_eligible ",
      "data",
      true
    );
    const objectToCheck = {
      body1: [
        {
          primary: {
            pgc_eligible: true,
          },
        },
      ],
    };
    const actual = checkIfNestedObjectExists(nestedObject, objectToCheck);
    expect(actual).toBe(true);
  });
});
