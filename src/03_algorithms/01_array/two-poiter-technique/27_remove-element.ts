function removeElement(nums: number[], val: number): number {
    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] !== val) {
            nums[i] = nums[j];
            i++;
        }
    }
    return i;
};

export { removeElement };

/**
 * Example Walkthrough
 * 
 * Let's take the example nums = [3, 2, 2, 3] and val = 3:
 * 
 * Initial State:
 * nums = [3, 2, 2, 3]
 * val = 3
 * i = 0
 * 
 * First Iteration (j = 0):
 * nums[0] is 3, which is equal to val, so nothing changes.
 * i = 0
 * 
 * Second Iteration (j = 1):
 * nums[1] is 2, which is not equal to val.
 * nums[0] = nums[1], so nums becomes [2, 2, 2, 3].
 * Increment i to 1.
 * 
 * Third Iteration (j = 2):
 * nums[2] is 2, which is not equal to val.
 * nums[1] = nums[2], so nums remains [2, 2, 2, 3].
 * Increment i to 2.
 * 
 * Fourth Iteration (j = 3):
 * nums[3] is 3, which is equal to val, so nothing changes.
 * i = 2
 * 
 * After the loop completes, i is 2, which means there are 2 elements 
 * in nums that are not equal to val. The modified nums is [2, 2, 2, 3], 
 * but only the first 2 elements ([2, 2]) are considered valid.
 */