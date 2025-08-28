class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }
    extractMax() {
        let parentIdx = 0,
            leftIdx,
            rightIdx,
            maxIdx,
            del,
            arr = this.values;
        if (arr.length === 0) return undefined;
        [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
        del = arr.pop();
        while (maxIdx !== null) {
            maxIdx = null;
            leftIdx = 2 * parentIdx + 1;
            rightIdx = 2 * parentIdx + 2;
            if (leftIdx < arr.length) {
                if (arr[leftIdx] > arr[parentIdx]) maxIdx = leftIdx;
            }
            if (maxIdx !== null && rightIdx < arr.length) {
                if (arr[rightIdx] > arr[leftIdx]) maxIdx = rightIdx;
            }
            if (maxIdx !== null) [arr[parentIdx], arr[maxIdx]] = [arr[maxIdx], arr[parentIdx]];
            parentIdx = maxIdx;
        }
        this.values = arr;
        return del;
    }

    insert(val) {
        let currIdx, parentIdx;
        this.values.push(val);
        currIdx = this.values.length - 1;
        parentIdx = Math.floor((currIdx - 1) / 2);
        while (parentIdx >= 0 && this.values[parentIdx] < this.values[currIdx]) {
            [this.values[parentIdx], this.values[currIdx]] = [this.values[currIdx], this.values[parentIdx]];
            currIdx = parentIdx;
            parentIdx = Math.floor((currIdx - 1) / 2);
        }
        return this;
    }
}

binaryHeap = new MaxBinaryHeap();
binaryHeap.insert(1);
binaryHeap.values[0]; // 1

binaryHeap.insert(2);
binaryHeap.values[0]; // 2

binaryHeap.values; // [2, 1]

binaryHeap.insert(3);
binaryHeap.values[0]; // 3

binaryHeap.values; // [3, 1, 2]

binaryHeap.insert(4);
binaryHeap.values[0]; // 4

binaryHeap.values; // [4, 3, 2, 1]

binaryHeap.insert(5);
binaryHeap.values[0]; // 5

binaryHeap.values; // [5, 4, 2, 1, 3]

binaryHeap.insert(6);
binaryHeap.values[0]; // 6

binaryHeap.values; // [6, 4, 5, 1, 3, 2]
binaryHeap.insert(1);
binaryHeap.insert(2);
binaryHeap.insert(3);
binaryHeap.insert(4);
binaryHeap.insert(5);
binaryHeap.insert(6);
binaryHeap.extractMax();
binaryHeap.values[0]; // 5

binaryHeap.values; // [5,4,2,1,3])

binaryHeap.extractMax();
binaryHeap.values; // [4,3,2,1])

console.log(binaryHeap.extractMax());
console.log(binaryHeap.values); // [3,1,2])
