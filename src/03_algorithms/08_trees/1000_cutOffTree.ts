/**
  * You are asked to cut off all the trees in a forest for a golf event. The forest is represented as an m x n matrix. In this matrix:

  * 0 means the cell cannot be walked through.
  * 1 represents an empty cell that can be walked through.
  * A number greater than 1 represents a tree in a cell that can be walked through, and this number is the tree's height.
  * In one step, you can walk in any of the four directions: north, east, south, and west. If you are standing in a cell with a tree, you can choose whether to cut it off.

  * You must cut off the trees in order from shortest to tallest. When you cut off a tree, the value at its cell becomes 1 (an empty cell).

  * Starting from the point (0, 0), return the minimum steps you need to walk to cut off all the trees. If you cannot cut off all the trees, return -1.

  * Note: The input is generated such that no two trees have the same height, and there is at least one tree needs to be cut off.

  * Example 1:
  * Input: forest = [[1,2,3],[0,0,4],[7,6,5]]
  * Output: 6
  * Explanation: Following the path above allows you to cut off the trees from shortest to tallest in 6 steps.

  * Example 2:
  * Input: forest = [[1,2,3],[0,0,0],[7,6,5]]
  * Output: -1
  * Explanation: The trees in the bottom row cannot be accessed as the middle row is blocked.

  * Example 3:
  * Input: forest = [[2,3,4],[0,0,5],[8,7,6]]
  * Output: 6
  * Explanation: You can follow the same path as Example 1 to cut off all the trees.
  * Note that you can cut off the first tree at (0, 0) before making any steps.
  * 
  * Constraints:

  * m == forest.length
  * n == forest[i].length
  * 1 <= m, n <= 50
  * 0 <= forest[i][j] <= 109
  * Heights of all trees are distinct.
 */

type Cell = [number, number]; // Represents a cell as [row, col]

function cutOffTree(forest: number[][]): number {
    // Extract trees and their coordinates, then sort by height
    let trees: [number, Cell][] = [];
    for (let row = 0; row < forest.length; row++) {
        for (let col = 0; col < forest[0].length; col++) {
            if (forest[row][col] > 1) {
                trees.push([forest[row][col], [row, col]]);
            }
        }
    }
    trees.sort((a, b) => a[0] - b[0]);

    let totalSteps = 0;
    let start: Cell = [0, 0];
    // Function to find shortest path using BFS
    const bfs = (start: Cell, target: Cell): number => {
        const directions: Cell[] = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
        ];
        let steps = 0;
        let queue: Cell[] = [start];
        let visited: boolean[][] = Array.from({ length: forest.length }, () => Array(forest[0].length).fill(false));
        visited[start[0]][start[1]] = true;

        while (queue.length) {
            let size = queue.length;
            for (let i = 0; i < size; i++) {
                let [row, col] = queue.shift()!;
                if (row === target[0] && col === target[1]) return steps;
                for (let [dr, dc] of directions) {
                    let newRow = row + dr,
                        newCol = col + dc;
                    if (
                        newRow >= 0 &&
                        newRow < forest.length &&
                        newCol >= 0 &&
                        newCol < forest[0].length &&
                        !visited[newRow][newCol] &&
                        forest[newRow][newCol] !== 0
                    ) {
                        visited[newRow][newCol] = true;
                        queue.push([newRow, newCol]);
                    }
                }
            }
            steps++;
        }
        return -1;
    };

    // Iterate through sorted trees and sum steps
    for (let tree of trees) {
        let steps = bfs(start, tree[1]);
        if (steps === -1) return -1; // If a tree cannot be reached
        totalSteps += steps;
        start = tree[1]; // Update start to current tree's location
    }

    return totalSteps;
}

export { cutOffTree };
