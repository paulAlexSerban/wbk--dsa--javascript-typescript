function isValidSudoku(board: string[][]): boolean {
  // Create arrays to track seen numbers in rows, columns, and sub-boxes
  const rows = new Array(9).fill(0).map(() => new Set<string>());
  const cols = new Array(9).fill(0).map(() => new Set<string>());
  const boxes = new Array(9).fill(0).map(() => new Set<string>());

  // Iterate over each cell in the board
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const num = board[i][j];

      // 1. If the cell is not empty
      // 2. Calculate the index of the 3x3 sub-box
      // 3. Check for duplicates in the current row, column, and sub-box
      // 4. Add the number to the corresponding sets
      if (num !== ".") {
        /* 1 */
        const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3); /* 2 */
        if (rows[i].has(num) || cols[j].has(num) || boxes[boxIndex].has(num)) {
          /* 3 */
          return false; // If any duplicate is found, the board is invalid
        }

        rows[i].add(num); /* 4 */
        cols[j].add(num); /* 4 */
        boxes[boxIndex].add(num);
      }
    }
  }

  // If no duplicates are found, the board is valid
  return true;
}

/**
 * 1. Initialization: We initialize three arrays rows, cols, and boxes to keep track of the numbers we've
 * seen so far for each row, column, and 3x3 sub-box, respectively. Each element in these arrays is a
 * Set, which helps us efficiently check for duplicates.
 *
 * 2. Iteration: We iterate through each cell in the 9x9 board using nested loops.
 *
 * 3. Check for Empty Cells: If the cell contains a '.', we skip it as it's an empty cell.
 *
 * 4. Sub-box Index Calculation: We calculate the index of the 3x3 sub-box using the formula
 * Math.floor(i / 3) * 3 + Math.floor(j / 3). This maps each cell to one of the nine sub-boxes.
 *
 * 5. Duplicate Check: For each number, we check if it has already been seen in the current row,
 * column, or sub-box by checking if the number exists in the corresponding set.
 *
 * 6. Update Sets: If no duplicate is found, we add the number to the respective sets for the
 * current row, column, and sub-box.
 *
 * 7. Return Result: If we find any duplicate, we return false immediately. If we complete the
 * iteration without finding any duplicates, we return true.
 */

function isValidSudoku__FAST(board: string[][]): boolean {
    let set = new Set();

    for (let r = 0; r < board.length; r++) {
        for (let c = 0; c < board.length; c++) {
            let currPiece = board[r][c];

            if (currPiece === ".") continue;

            let row = `row${r}:${currPiece}`
            let col = `col${c}:${currPiece}`
            let box = `${[Math.floor(r / 3), Math.floor(c / 3)]}:${currPiece}`;

            if (set.has(row) || set.has(col) || set.has(box)) return false

            set.add(row).add(col).add(box)
        }
    }

    return true
};

export { isValidSudoku, isValidSudoku__FAST};