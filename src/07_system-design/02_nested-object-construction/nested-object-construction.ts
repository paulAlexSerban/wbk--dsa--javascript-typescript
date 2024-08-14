// Function to convert the fieldPath string into an array of keys
const getNestedPath = (fieldPath: string, parentKey: string): string[] => {
  const arr = fieldPath.split(" ");
  if (arr[arr.length - 1] === "") {
    arr.pop();
  }
  // Remove the first item if equal to parentKey
  if (arr[0] === parentKey) {
    arr.shift();
  }
  return arr;
};

// Function to build the nested object using the path array
const getNestedObject = (pathArr: string[], value: any): any => {
  return pathArr.reduceRight<any>((acc, key) => {
    if (!isNaN(Number(key))) {
      // If the key is a number, it's an array index
      const index = parseInt(key, 10);
      const arr: any[] = [];
      // from 0 to the index, fill the array with {}
      for (let i = 0; i <= index; i++) {
        arr[i] = i === index ? acc : {};
      }
      arr[index] = acc;
      return arr;
    } else {
      return { [key]: acc };
    }
  }, value); // Initialize with true as the final value (e.g., pgc_eligible: true)
};

export const getNestedObjectFromPath = (
  fieldPath: string,
  parentKey: string,
  value: any = ""
): any => {
  const pathArr = getNestedPath(fieldPath, parentKey);
  return getNestedObject(pathArr, value);
};

export const checkIfNestedObjectExists = (
  nestedObject: any,
  objectToCheck: any
): boolean => {
  const keys = Object.keys(nestedObject);
  return keys.every((key) => {
    const nestedValue = nestedObject[key];
    const checkValue = objectToCheck[key];

    if (Array.isArray(nestedValue)) {
      // If the nested value is an array, check if the corresponding value in objectToCheck is also an array
      if (!Array.isArray(checkValue)) {
        return false;
      }
      // Check if each element in the nested array exists in the check array
      return nestedValue.every((item, index) =>
        checkIfNestedObjectExists(item, checkValue[index])
      );
    } else if (typeof nestedValue === "object" && nestedValue !== null) {
      // If the nested value is an object, recurse
      if (checkValue === undefined) {
        return false;
      }
      return checkIfNestedObjectExists(nestedValue, checkValue);
    } else {
      // For primitive values, perform a direct comparison
      return nestedValue === checkValue;
    }
  });
};

