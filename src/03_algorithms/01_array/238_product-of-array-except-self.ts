interface IProductOfArrayExceptSelf {
  /**
   * @param {number[]} nums
   * @return {number[]}
   */
  productExceptSelf(nums: number[]): number[];
}

export class ProductOfArrayExceptSelf implements IProductOfArrayExceptSelf {
  productExceptSelf(nums: number[]): number[] {
    const n = nums.length;
    const result = new Array(n).fill(1);

    // Calculate left products
    let leftProduct = 1;
    for (let i = 0; i < n; i++) {
      result[i] = leftProduct;
      leftProduct *= nums[i];
    }

    // Calculate right products and update result
    let rightProduct = 1;
    for (let i = n - 1; i >= 0; i--) {
      result[i] *= rightProduct;
      rightProduct *= nums[i];
    }

    return result;
  }
}

export const productOfArrayExceptSelf_FASTEST = (nums: number[]): number[] => {
  const res: number[] = Array(nums.length).fill(1);
  let prefix: number = 1;
  let postfix: number = 1;

  for (let i = 0; i < nums.length; i++) {
    res[i] *= prefix;
    res[nums.length - 1 - i] *= postfix;
    prefix *= nums[i];
    postfix *= nums[nums.length - 1 - i];
  }

  return res;
};
