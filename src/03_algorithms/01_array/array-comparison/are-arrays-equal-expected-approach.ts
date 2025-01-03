export function checkEqual(a: any[], b: any[]) {
  const n = a.length,
    m = b.length;
  if (n !== m) return false;

  const mp: Record<string, number> = {};
  for (let num of a) {
    mp[num] = (mp[num] || 0) + 1;
  }

  for (let num of b) {
    if (!(num in mp) || mp[num] === 0) return false;
    mp[num]--;
  }
  return true;
}
