import { floodFillV1, floodFillV2, floodFillV3 } from './733_flood-fill'; // Adjust this path

describe('floodFillV1 function', () => {
    it('should correctly perform a flood fill on an image', () => {
        const image = [
            [1, 1, 1],
            [1, 1, 0],
            [1, 0, 1],
        ];
        const result = floodFillV1(image, 1, 1, 2);
        expect(result).toEqual([
            [2, 2, 2],
            [2, 2, 0],
            [2, 0, 1],
        ]);
    });

    it('should not change the image if the target color is the same as the starting pixel color', () => {
        const image = [
            [0, 0, 0],
            [0, 0, 0],
        ];
        const result = floodFillV1(image, 0, 0, 0);
        expect(result).toEqual([
            [0, 0, 0],
            [0, 0, 0],
        ]);
    });

    it('should handle edge cases where pixels are not 4-directionally connected', () => {
        const image = [
            [0, 0, 0],
            [0, 1, 1],
            [0, 0, 0],
        ];
        const result = floodFillV1(image, 1, 1, 2);
        expect(result).toEqual([
            [0, 0, 0],
            [0, 2, 2],
            [0, 0, 0],
        ]);
    });

    it('should process complex patterns correctly', () => {
        const image = [
            [1, 2, 2],
            [2, 3, 2],
            [2, 2, 2],
            [2, 2, 1],
        ];
        const result = floodFillV1(image, 1, 1, 1);
        expect(result).toEqual([
            [1, 2, 2],
            [2, 1, 2],
            [2, 2, 2],
            [2, 2, 1],
        ]);
    });

    it('should correctly handle a large image', () => {
        const largeImage = Array.from({ length: 50 }, () => Array.from({ length: 50 }, () => 1));
        largeImage[25][25] = 0; // A different color pixel in the middle
        const result = floodFillV1(largeImage, 0, 0, 2);
        // Expect the outer pixels to change, but not the center one
        expect(result[25][25]).toBe(0); // The different one remains unchanged
        expect(result[0][0]).toBe(2); // Changed color
        expect(result[49][49]).toBe(2); // Changed color
    });
});

describe('floodFillV2 function', () => {
    it('should correctly perform a flood fill on an image', () => {
        const image = [
            [1, 1, 1],
            [1, 1, 0],
            [1, 0, 1],
        ];
        const result = floodFillV2(image, 1, 1, 2);
        expect(result).toEqual([
            [2, 2, 2],
            [2, 2, 0],
            [2, 0, 1],
        ]);
    });

    it('should not change the image if the target color is the same as the starting pixel color', () => {
        const image = [
            [0, 0, 0],
            [0, 0, 0],
        ];
        const result = floodFillV2(image, 0, 0, 0);
        expect(result).toEqual([
            [0, 0, 0],
            [0, 0, 0],
        ]);
    });

    it('should handle edge cases where pixels are not 4-directionally connected', () => {
        const image = [
            [0, 0, 0],
            [0, 1, 1],
            [0, 0, 0],
        ];
        const result = floodFillV2(image, 1, 1, 2);
        expect(result).toEqual([
            [0, 0, 0],
            [0, 2, 2],
            [0, 0, 0],
        ]);
    });

    it('should process complex patterns correctly', () => {
        const image = [
            [1, 2, 2],
            [2, 3, 2],
            [2, 2, 2],
            [2, 2, 1],
        ];
        const result = floodFillV2(image, 1, 1, 1);
        expect(result).toEqual([
            [1, 2, 2],
            [2, 1, 2],
            [2, 2, 2],
            [2, 2, 1],
        ]);
    });

    it('should correctly handle a large image', () => {
        const largeImage = Array.from({ length: 50 }, () => Array.from({ length: 50 }, () => 1));
        largeImage[25][25] = 0; // A different color pixel in the middle
        const result = floodFillV2(largeImage, 0, 0, 2);
        // Expect the outer pixels to change, but not the center one
        expect(result[25][25]).toBe(0); // The different one remains unchanged
        expect(result[0][0]).toBe(2); // Changed color
        expect(result[49][49]).toBe(2); // Changed color
    });
});

describe('floodFillV3 function', () => {
    it('should correctly perform a flood fill on an image', () => {
        const image = [
            [1, 1, 1],
            [1, 1, 0],
            [1, 0, 1],
        ];
        const result = floodFillV3(image, 1, 1, 2);
        expect(result).toEqual([
            [2, 2, 2],
            [2, 2, 0],
            [2, 0, 1],
        ]);
    });

    it('should not change the image if the target color is the same as the starting pixel color', () => {
        const image = [
            [0, 0, 0],
            [0, 0, 0],
        ];
        const result = floodFillV3(image, 0, 0, 0);
        expect(result).toEqual([
            [0, 0, 0],
            [0, 0, 0],
        ]);
    });

    it('should handle edge cases where pixels are not 4-directionally connected', () => {
        const image = [
            [0, 0, 0],
            [0, 1, 1],
            [0, 0, 0],
        ];
        const result = floodFillV3(image, 1, 1, 2);
        expect(result).toEqual([
            [0, 0, 0],
            [0, 2, 2],
            [0, 0, 0],
        ]);
    });

    it('should process complex patterns correctly', () => {
        const image = [
            [1, 2, 2],
            [2, 3, 2],
            [2, 2, 2],
            [2, 2, 1],
        ];
        const result = floodFillV3(image, 1, 1, 1);
        expect(result).toEqual([
            [1, 2, 2],
            [2, 1, 2],
            [2, 2, 2],
            [2, 2, 1],
        ]);
    });

    it('should correctly handle a large image', () => {
        const largeImage = Array.from({ length: 50 }, () => Array.from({ length: 50 }, () => 1));
        largeImage[25][25] = 0; // A different color pixel in the middle
        const result = floodFillV3(largeImage, 0, 0, 2);
        // Expect the outer pixels to change, but not the center one
        expect(result[25][25]).toBe(0); // The different one remains unchanged
        expect(result[0][0]).toBe(2); // Changed color
        expect(result[49][49]).toBe(2); // Changed color
    });
});
