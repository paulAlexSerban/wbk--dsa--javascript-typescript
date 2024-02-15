/**
 * An image is represented by an m x n integer grid image where image[i][j]
 * represents the pixel value of the image.
 *
 *
 * You are also given three integers sr, sc, and color. You should perform a
 * flood fill on the image starting from the pixel image[sr][sc].
 * To perform a flood fill, consider the starting pixel, plus any pixels
 * connected 4-directionally to the starting pixel of the same color as the
 * starting pixel, plus any pixels connected 4-directionally to those pixels
 * (also with the same color), and so on. Replace the color of all of the
 * aforementioned pixels with color.
 * Return the modified image after performing the flood fill.
 *
 * Example 1:
 * Input: image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2
 * Output: [[2,2,2],[2,2,0],[2,0,1]]
 * Explanation: From the center of the image with position (sr, sc) = (1, 1) (i.e., the red pixel), all pixels connected by a path of the same color as the starting pixel (i.e., the blue pixels) are colored with the new color.
 * Note the bottom corner is not colored 2, because it is not 4-directionally connected to the starting pixel.
 *
 * Example 2:
 * Input: image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, color = 0
 * Output: [[0,0,0],[0,0,0]]
 * Explanation: The starting pixel is already colored 0, so no changes are made to the image.
 *
 * Constraints:
 * m == image.length
 * n == image[i].length
 * 1 <= m, n <= 50
 * 0 <= image[i][j], color < 216
 * 0 <= sr < m
 * 0 <= sc < n
 */

function floodFillV1(image: number[][], sr: number, sc: number, color: number): number[][] {
    // Get the starting color
    const startColor = image[sr][sc];
    // If the starting color is the same as the new color, return the image
    if (startColor === color) {
        return image;
    }
    // DFS function to traverse the image and change the color
    const dfs = (row: number, col: number) => {
        // If the row or column is out of bounds or the color is not the same as the starting color, return
        if (row < 0 || row >= image.length || col < 0 || col >= image[0].length || image[row][col] !== startColor) {
            return;
        }
        // Change the color and traverse the image
        image[row][col] = color;
        // Traverse the 4 directions
        dfs(row + 1, col);
        dfs(row - 1, col);
        dfs(row, col + 1);
        dfs(row, col - 1);
    };
    // Start the DFS
    dfs(sr, sc);
    return image;
}

function floodFillV2(image: number[][], sr: number, sc: number, color: number): number[][] {
    // Store the number of rows and columns in the image array
    const ROWS: number = image.length;
    const COLS: number = image[0].length;

    // Store the color of the starting pixel
    const startColor: number = image[sr][sc];

    // If the starting color is already the new color, return the original image
    if (startColor === color) {
        return image;
    }

    // Call dfs on the starting pixel
    dfs(sr, sc);

    return image;

    // DFS (Depth First Search) algorithm
    function dfs(row: number, col: number): void {
        if (row < 0 || col < 0 || row >= ROWS || col >= COLS || image[row][col] !== startColor) {
            return;
        }

        // Change the color of the current pixel to the new color
        image[row][col] = color;

        // Recursively call dfs on the neighboring pixels
        dfs(row - 1, col); // up
        dfs(row + 1, col); // down
        dfs(row, col - 1); // left
        dfs(row, col + 1); // right
    }
}

function floodFillV3(image: number[][], sr: number, sc: number, color: number): number[][] {
  if (image[sr][sc] === color) return image;

  let m = image.length;
  let n = image[0].length;
  const startColor = image[sr][sc];

  function recursive(sr: number, sc: number) {

      if (sr < 0 || sc < 0 || sr >= m || sc >= n || image[sr][sc] !== startColor) return;
      
      image[sr][sc] = color;
      recursive(sr - 1, sc);
      recursive(sr + 1, sc);
      recursive(sr, sc - 1);
      recursive(sr, sc + 1);

  }

  recursive(sr, sc);

  return image;
};

export { floodFillV1, floodFillV2, floodFillV3 };
