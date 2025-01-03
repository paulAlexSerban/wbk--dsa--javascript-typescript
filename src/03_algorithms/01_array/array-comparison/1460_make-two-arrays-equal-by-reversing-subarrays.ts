export function canBeEqual(target: number[], arr: number[]): boolean {
  target.sort();
  arr.sort();
  return JSON.stringify(target) === JSON.stringify(arr);
}
