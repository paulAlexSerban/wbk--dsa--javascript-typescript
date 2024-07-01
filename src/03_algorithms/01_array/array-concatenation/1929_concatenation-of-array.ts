const getConcatenation = (nums: number[]): number[] => {
    return [...nums, ...nums];
}

const getConatenation_concat = (nums: number[]): number[] => {
    return nums.concat(nums);
}

export { getConcatenation, getConatenation_concat };