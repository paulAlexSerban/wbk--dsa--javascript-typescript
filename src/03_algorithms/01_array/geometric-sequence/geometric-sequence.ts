export const geometricSequence = (
    listLength: number,
    totalNumber: number,
    minValue: number,
    weight: number
  ): number[] => {
    if (listLength <= 0) {
      throw new Error("List length must be greater than 0.");
    }
  
    if (weight <= 0 || weight >= 1) {
      throw new Error("Weight must be greater than 0 and less than 1.");
    }
  
    // Calculate the first number in the sequence
    const firstNumber =
      totalNumber / ((1 - Math.pow(weight, listLength)) / (1 - weight));
  
    // Generate the list
    const result: number[] = [];
    let currentNumber = firstNumber;
    for (let i = 0; i < listLength; i++) {
      currentNumber >= minValue
        ? result.push(Math.round(currentNumber))
        : result.push(minValue);
      currentNumber *= weight; // Use the weight to calculate the next number
    }
  
    return result;
  };