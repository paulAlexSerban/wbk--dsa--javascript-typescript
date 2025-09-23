export function maxFrequencyElements(nums: number[]): number {
    const freqMap = new Map<number, number>()
    let maxFrequency = 1;
    for (let i = 0; i < nums.length; i++) {
        if (freqMap.has(nums[i])) {
            let currentFrequency = freqMap.get(nums[i])! + 1
            freqMap.set(nums[i], currentFrequency)
            if (currentFrequency > maxFrequency) {
                maxFrequency = currentFrequency
            }
        } else {
            freqMap.set(nums[i], 1)
        }
    }
    let result = 0
    for (const [key, value] of freqMap.entries()) {
        if (value == maxFrequency) {
            result += maxFrequency
        }
    }
    return result
};