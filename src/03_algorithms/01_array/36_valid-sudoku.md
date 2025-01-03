# Valid Sudoku
Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:
    - Each row must contain the digits 1-9 without repetition.
    - Each column must contain the digits 1-9 without repetition.
    - Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.

Note:
    - A Sudoku board (partially filled) could be valid but is not necessarily solvable.
    - Only the filled cells need to be validated according to the mentioned rules.

Input: board = [
        ["5","3",".",".","7",".",".",".","."]
        ,["6",".",".","1","9","5",".",".","."]
        ,[".","9","8",".",".",".",".","6","."]
        ,["8",".",".",".","6",".",".",".","3"]
        ,["4",".",".","8",".","3",".",".","1"]
        ,["7",".",".",".","2",".",".",".","6"]
        ,[".","6",".",".",".",".","2","8","."]
        ,[".",".",".","4","1","9",".",".","5"]
        ,[".",".",".",".","8",".",".","7","9"]
    ]
Output: true


Example 2:
Input: board = [
        ["8","3",".",".","7",".",".",".","."]
        ,["6",".",".","1","9","5",".",".","."]
        ,[".","9","8",".",".",".",".","6","."]
        ,["8",".",".",".","6",".",".",".","3"]
        ,["4",".",".","8",".","3",".",".","1"]
        ,["7",".",".",".","2",".",".",".","6"]
        ,[".","6",".",".",".",".","2","8","."]
        ,[".",".",".","4","1","9",".",".","5"]
        ,[".",".",".",".","8",".",".","7","9"]
    ]
Output: false


Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.

Constraints:
    - board.length == 9
    - board[i].length == 9
    - board[i][j] is a digit 1-9 or '.'.

# MERN Project Ideas

Certainly! Here are some project ideas using the MERN stack (MongoDB, Express.js, React, Node.js) that can incorporate the Sudoku validation algorithm:

### 1. Sudoku Puzzle Solver
**Description:** Create a web application where users can input Sudoku puzzles, and the app will validate the input and solve the puzzle if it's valid.

**Features:**
    - User can input Sudoku puzzles manually.
    - Validate the Sudoku puzzle using the provided algorithm.
    - Provide a "Solve" button to solve the puzzle.
    - Display the solution on the screen.

**Tech Stack:**
- **Frontend:** React
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (to store puzzles and solutions)
- **Algorithm:** Sudoku validation and solving algorithms.

### 2. Sudoku Puzzle Generator
**Description:** Develop a web application that generates Sudoku puzzles of varying difficulty levels, allows users to play them, and validates their moves in real-time.

**Features:**
  - Generate Sudoku puzzles with different difficulty levels.
  - Validate user moves using the Sudoku validation algorithm.
  - Allow users to save their progress and resume later.
  - Implement a timer to track how long it takes users to solve puzzles.

**Tech Stack:**
- **Frontend:** React
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (to store puzzles, user progress, and stats)
- **Algorithm:** Sudoku generation and validation algorithms.

### 3. Multiplayer Sudoku Challenge
**Description:** Create a platform where users can compete against each other to solve Sudoku puzzles in real-time.

**Features:**
  - Real-time multiplayer Sudoku puzzles.
  - Validate Sudoku puzzles using the algorithm.
  - Leaderboards to track top players.
  - Chat functionality for players to communicate.
  - User authentication and profiles.

**Tech Stack:**
- **Frontend:** React
- **Backend:** Node.js, Express.js, Socket.io (for real-time communication)
- **Database:** MongoDB (to store user profiles, puzzles, and scores)
- **Algorithm:** Sudoku validation algorithm.

### 4. Sudoku Puzzle Book
**Description:** Develop a web application that allows users to create and publish Sudoku puzzle books. Users can download or print these books.

**Features:**
  - Users can create and compile a collection of Sudoku puzzles.
  - Validate each puzzle using the algorithm.
  - Option to download or print the puzzle book.
  - Users can share their puzzle books with others.

**Tech Stack:**
- **Frontend:** React
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (to store puzzles and user-generated books)
- **Algorithm:** Sudoku validation algorithm.

### 5. Sudoku Learning Platform
**Description:** Build a platform that helps users learn how to solve Sudoku puzzles through tutorials, practice puzzles, and validation feedback.

**Features:**
  - Step-by-step tutorials on solving Sudoku puzzles.
  - Interactive practice puzzles with real-time validation.
  - Progress tracking and skill assessment.
  - User authentication and profiles to track learning progress.

**Tech Stack:**
- **Frontend:** React
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (to store user progress and puzzles)
- **Algorithm:** Sudoku validation algorithm.

### 6. Daily Sudoku Challenge
**Description:** Create a web application that provides a new Sudoku puzzle every day. Users can solve the puzzle and see how they rank against other users.

**Features:**
  - Daily Sudoku puzzles with varying difficulty levels.
  - Validate user submissions using the Sudoku validation algorithm.
  - Leaderboards showing daily, weekly, and all-time top solvers.
  - User authentication to track personal stats and rankings.

**Tech Stack:**
- **Frontend:** React
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (to store puzzles, user data, and rankings)
- **Algorithm:** Sudoku validation algorithm.

These project ideas not only incorporate the Sudoku validation algorithm but also provide a variety of features and functionalities that can help enhance your skills in using the MERN stack. Each project can be further expanded with additional features based on user feedback and requirements.