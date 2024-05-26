export const topKFrequent = (nums: number[], k: number): number[] => {
    const map = new Map<number, number>();
    nums.forEach(num => {
        map.set(num, (map.get(num) || 0) + 1);
    });
    
    const buckets: number[][] = new Array(nums.length + 1).fill(null).map(() => []);
    
    map.forEach((value, key) => {
        buckets[value].push(key);
    });
    
    const res: number[] = [];
    for (let i = buckets.length - 1; i >= 0 && res.length < k; i--) {
        if (buckets[i].length > 0) {
        res.push(...buckets[i]);
        }
    }
    
    return res;
};

export const topKFrequent_MINE = (nums: number[], k: number): number[] => {
    // Create Frequency Counter as Object
    type Counter = {
        [key: number]: number;
    }
    const counter: Counter = {};
    for (const num of nums) {
        counter[num] = (counter[num] || 0) + 1;
    }

    // Initialize Buckets
    type Bucket = number[];
    const buckets: Bucket[] = new Array(nums.length + 1).fill(null).map(() => []);

    // Populate Buckets
    for (const key in counter) {
        const value = counter[key];
        buckets[value].push(parseInt(key));
    }

    const res: number[] = [];
    // Collect Top K Frequent Elements
    for (let i = buckets.length - 1; i >= 0 && res.length < k; i--) {
        if (buckets[i].length > 0) {
            res.push(...buckets[i]);
        }
    }

    return res;
}

export function topKFrequent_FAST(nums: number[], k: number): any {
    const hashmap = new Map()
  
    nums.map(num=> {
      if (hashmap.has(num)) {
        hashmap.set(num, hashmap.get(num)+1)
      } else {
        hashmap.set(num, 1)
      }
    })
  
  
    return [...hashmap.entries()].sort((a, b) => b[1]-a[1]).slice(0, k).map(a=> a[0])
  };

export function topKFrequent_MOST_SUBMITIONS(nums: number[], k: number): number[] {
    const map = new Map<number, number>();
    for (let i : number = 0; i < nums.length; i++)
    {
        map.set(nums[i], (map.get(nums[i]) ?? 0) + 1);
    }
    const newMap = new Map<number, number>([...map.entries()].sort((a,b) => b[1] - a[1]));
    
    return Array.from(newMap.keys()).slice(0,k);
};