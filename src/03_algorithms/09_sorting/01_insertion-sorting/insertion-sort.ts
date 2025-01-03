export function insertionSort(arr: number[]): number[] {
    for (let i = 1; i < arr.length; i++) {
        const key = arr[i]; // Element to be inserted
        let j = i - 1;

        // Shift elements of the sorted portion to the right
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }

        // Insert the key into its correct position
        arr[j + 1] = key;
    }
    return arr; // Return the sorted array
}