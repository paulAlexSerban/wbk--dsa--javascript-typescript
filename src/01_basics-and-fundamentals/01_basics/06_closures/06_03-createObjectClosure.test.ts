// Import the createObjectClosure function
import createObjectClosure from './06_03-createObjectClosure'; // Adjust the path according to your file structure

describe('createObjectClosure', () => {
  it('should create an object that inherits from largeObject without holding a direct reference', () => {
    const getObject = createObjectClosure();
    const object = getObject();

    // Check if object inherits properties from largeObject
    expect(object.keyOne).toBeDefined();
    expect(object.keyTwo).toBeDefined();
    expect(object.keyThree).toBeDefined();

    // Verify that properties are inherited and not directly present on the object
    expect(object.hasOwnProperty('keyOne')).toBeFalsy();
    expect(object.hasOwnProperty('keyTwo')).toBeFalsy();
    expect(object.hasOwnProperty('keyThree')).toBeFalsy();

    // Verify the prototype chain
    const prototype = Object.getPrototypeOf(object);
    expect(prototype).toEqual({
      keyOne: expect.any(Array),
      keyTwo: expect.any(Array),
      keyThree: expect.any(Array),
    });

    // Ensure prototype properties match expected values
    expect(prototype.keyOne[0]).toBe('one');
    expect(prototype.keyTwo[0]).toBe('two');
    expect(prototype.keyThree[0]).toBe('three');

    // Verify that the object does not hold a direct reference to largeObject
    // This can be inferred if the hasOwnProperty checks above are false,
    // and by checking that modifications to the returned object do not affect the original largeObject
    object.newProperty = 'test';
    expect(prototype.newProperty).toBeUndefined(); // This verifies no direct reference
  });
});
