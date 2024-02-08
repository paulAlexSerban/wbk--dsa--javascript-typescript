/**
 * Bubble Sort
 */
export abstract class Sorter {
    // here we are saying that at some point in the future, we will define a length property, but we don't know what it will be yet
    abstract length: number;
    // here we are saying that at some point in the future, we will define a compare method, but we don't know what it will be yet
    abstract compare(leftIndex: number, rightIndex: number): boolean;
    // here we are saying that at some point in the future, we will define a swap method, but we don't know what it will be yet
    abstract swap(leftIndex: number, rightIndex: number): void;

    sort(): void {
        const { length } = this;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                }
            }
        }
    }
}
