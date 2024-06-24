export function removeDuplicates(nums: number[]): number {
  if (nums.length === 0) return 0;
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
}

export function removeDuplicates_FASTEST(nums: number[]): number {
  let k = 0;

  for (let i = 1; i < nums.length; i++) {
    if (k === 0) {
      k++;
    }
    if (nums[i] !== nums[i - 1]) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
}
