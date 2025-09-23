export function compareVersion(version1: string, version2: string): number {
    // Split version strings by '.' and convert each part to integer (ignoring leading zeros)
    const v1 = version1.split('.').map(num => parseInt(num, 10));
    const v2 = version2.split('.').map(num => parseInt(num, 10));
    // Compare each revision, treating missing parts as 0
    const maxLength = Math.max(v1.length, v2.length);
    for (let i = 0; i < maxLength; i++) {
        const num1 = i < v1.length ? v1[i] : 0;
        const num2 = i < v2.length ? v2[i] : 0;
        if (num1 > num2) return 1;
        if (num1 < num2) return -1;
    }
    return 0;
}