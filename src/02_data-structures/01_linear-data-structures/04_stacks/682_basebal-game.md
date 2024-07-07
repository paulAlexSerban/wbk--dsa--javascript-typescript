# Basebal Game

You are keeping the scores for a baseball game with strange rules. At the beginning of the game, you start with an empty record.

You are given a list of strings operations, where operations[i] is the ith operation you must apply to the record and is one of the following:

- An integer x.
  - Record a new score of x.
- '+'.
  - Record a new score that is the sum of the previous two scores.
- 'D'.
  - Record a new score that is the double of the previous score.
- 'C'.
  - Invalidate the previous score, removing it from the record.

Return the sum of all the scores on the record after applying all the operations.

The test cases are generated such that the answer and all intermediate calculations fit in a 32-bit integer and that all operations are valid.

 

Example 1:
Input: ops = ["5","2","C","D","+"]
Output: 30
Explanation:
"5" - Add 5 to the record, record is now [5].
"2" - Add 2 to the record, record is now [5, 2].
"C" - Invalidate and remove the previous score, record is now [5].
"D" - Add 2 * 5 = 10 to the record, record is now [5, 10].
"+" - Add 5 + 10 = 15 to the record, record is now [5, 10, 15].
The total sum is 5 + 10 + 15 = 30.

Example 2:
Input: ops = ["5","-2","4","C","D","9","+","+"]
Output: 27
Explanation:
"5" - Add 5 to the record, record is now [5].
"-2" - Add -2 to the record, record is now [5, -2].
"4" - Add 4 to the record, record is now [5, -2, 4].
"C" - Invalidate and remove the previous score, record is now [5, -2].
"D" - Add 2 * -2 = -4 to the record, record is now [5, -2, -4].
"9" - Add 9 to the record, record is now [5, -2, -4, 9].
"+" - Add -4 + 9 = 5 to the record, record is now [5, -2, -4, 9, 5].
"+" - Add 9 + 5 = 14 to the record, record is now [5, -2, -4, 9, 5, 14].
The total sum is 5 + -2 + -4 + 9 + 5 + 14 = 27.

Example 3:
Input: ops = ["1","C"]
Output: 0
Explanation:
"1" - Add 1 to the record, record is now [1].
"C" - Invalidate and remove the previous score, record is now [].
Since the record is empty, the total sum is 0.
 
Constraints:
- 1 <= operations.length <= 1000
- operations[i] is "C", "D", "+", or a string representing an integer in the range [-3 * 104, 3 * 104].
- For operation "+", there will always be at least two previous scores on the record.
- For operations "C" and "D", there will always be at least one previous score on the record.

## Solution

Let's break down this solution step by step:

1. **Initialization**:
   ```typescript
   const scores: number[] = [];
   ```
   - We initialize an empty array `scores` to keep track of the valid scores as we process each operation.

2. **Defining Operation Functions**:
   ```typescript
   const operationsFunctions: { [key: string]: (op?: string) => void } = {
     C: () => {
       scores.pop();
     },
     D: () => {
       scores.push(scores[scores.length - 1] * 2);
     },
     "+": () => {
       scores.push(scores[scores.length - 1] + scores[scores.length - 2]);
     }
   };
   ```
   - We create an object `operationsFunctions` where each key corresponds to a special operation (`C`, `D`, or `+`), and each value is a function that performs the corresponding operation on the `scores` array.

3. **Processing Each Operation**:
   ```typescript
   for (const op of operations) {
     const operationFunction =
       operationsFunctions[op] || ((op: string) => scores.push(parseInt(op) || 0));
     operationFunction(op);
   }
   ```
   - We loop through each operation in the `operations` array.
   - For each operation `op`, we determine the corresponding function to execute:
     - If `op` is one of `C`, `D`, or `+`, we use the corresponding function from `operationsFunctions`.
     - If `op` is not one of the special operations, it is assumed to be a numeric value in string format. We use a default function `(op: string) => scores.push(parseInt(op) || 0)` that converts the string to a number using `parseInt` and pushes it to the `scores` array. The `|| 0` ensures that in case of a failed `parseInt` (which results in `NaN`), we push `0` instead.

4. **Calculating the Total Score**:
   ```typescript
   return scores.reduce((total, score) => total + score, 0);
   ```
   - After processing all operations, we calculate the total score by summing up all elements in the `scores` array using the `reduce` method.

### Detailed Explanation of Operations

- **'C' Operation**:
  - `C: () => { scores.pop(); }`
  - Removes the last score from the `scores` array using `pop()`.

- **'D' Operation**:
  - `D: () => { scores.push(scores[scores.length - 1] * 2); }`
  - Doubles the last score in the `scores` array and pushes the result back into the `scores` array.

- **'+' Operation**:
  - `"+": () => { scores.push(scores[scores.length - 1] + scores[scores.length - 2]); }`
  - Adds the last two scores in the `scores` array and pushes the result back into the `scores` array.

- **Default Operation**:
  - `((op: string) => scores.push(parseInt(op) || 0))`
  - Converts the string `op` to a number using `parseInt` and pushes it to the `scores` array. If `parseInt` fails (returns `NaN`), `|| 0` ensures that `0` is pushed instead.

### Example Usage

Given `operations = ["5","2","C","D","+"]`:
- "5" -> Adds 5 to `scores`: `[5]`
- "2" -> Adds 2 to `scores`: `[5, 2]`
- "C" -> Removes last score: `[5]`
- "D" -> Doubles last score (5 * 2): `[5, 10]`
- "+" -> Adds last two scores (5 + 10): `[5, 10, 15]`

The final total score is `5 + 10 + 15 = 30`.

This solution is efficient and clean, leveraging JavaScript's dynamic typing and functional programming capabilities to handle different operations seamlessly.

## MERN Ideas

Implementing this solution as a MERN (MongoDB, Express, React, Node.js) application can be a fun and educational project. Here are some ideas for how to build this out:

### Basic Single-Page Application (SPA)

1. **Score Tracker SPA**:
   - **Frontend (React)**:
     - A form to input operations.
     - A list to display current scores.
     - A button to calculate and display the total score.
   - **Backend (Node.js + Express)**:
     - Endpoint to receive the list of operations and return the calculated score.
     - Endpoint to save operation history.

2. **User Authentication**:
   - **Frontend (React)**:
     - Sign up and login forms.
     - Secure routes for authenticated users.
   - **Backend (Node.js + Express + JWT)**:
     - User registration and authentication using JWT.
     - Middleware to protect routes.

3. **Operation History**:
   - **Frontend (React)**:
     - Display a list of past operations and scores.
     - Allow users to select and re-calculate past operations.
   - **Backend (Node.js + Express + MongoDB)**:
     - Save operations and scores in MongoDB.
     - Endpoints to fetch and delete past operations.

### Advanced Features

4. **Real-time Updates with WebSockets**:
   - **Frontend (React + Socket.IO)**:
     - Real-time score updates when new operations are added.
   - **Backend (Node.js + Express + Socket.IO)**:
     - Real-time communication with the client to broadcast score updates.

5. **Leaderboard**:
   - **Frontend (React)**:
     - Display a leaderboard of users with the highest scores.
   - **Backend (Node.js + Express + MongoDB)**:
     - Endpoints to calculate and fetch leaderboard data.

6. **Undo/Redo Functionality**:
   - **Frontend (React)**:
     - Buttons to undo and redo operations.
     - Display the state of the scores after each operation.
   - **Backend (Node.js + Express)**:
     - Logic to handle undo/redo operations.

### Full-Fledged Application

7. **Score Tracker with Analytics**:
   - **Frontend (React)**:
     - Graphs and charts to visualize score trends over time.
   - **Backend (Node.js + Express + MongoDB)**:
     - Endpoints to fetch analytics data.
     - Use libraries like Chart.js or D3.js for visualization.

8. **Mobile App Version**:
   - **Frontend (React Native)**:
     - Implement the same functionalities as the web app in a mobile app.
   - **Backend (Node.js + Express + MongoDB)**:
     - Same backend, with potentially different endpoints optimized for mobile use.

9. **Game Mode**:
   - **Frontend (React)**:
     - Implement a game mode where users can compete against each other.
     - Timed operations and live score updates.
   - **Backend (Node.js + Express + MongoDB + Socket.IO)**:
     - Real-time game logic and score updates.
     - Persistent storage of game data.

### Detailed Implementation Plan

#### Frontend (React)

- **Components**:
  - `OperationInput`: A form to input operations.
  - `ScoreList`: Displays the current list of scores.
  - `TotalScore`: Displays the total score.
  - `History`: Displays past operations and allows recalculations.
  - `Auth`: Handles user authentication.
  - `Leaderboard`: Displays the top scores.
  - `Analytics`: Visualizes score trends.

- **State Management**:
  - Use Context API or Redux for state management.

- **Styling**:
  - Use a CSS framework like Bootstrap or Material-UI.

#### Backend (Node.js + Express + MongoDB)

- **Endpoints**:
  - `POST /api/calculate`: Receives operations and returns the calculated score.
  - `POST /api/saveOperations`: Saves operations and score to the database.
  - `GET /api/operations`: Fetches past operations.
  - `DELETE /api/operations/:id`: Deletes a specific operation history.
  - `POST /api/auth/register`: Registers a new user.
  - `POST /api/auth/login`: Authenticates a user and returns a JWT.
  - `GET /api/leaderboard`: Fetches leaderboard data.
  - `GET /api/analytics`: Fetches analytics data.

- **Database Schema**:
  - User: `{ username: String, password: String }`
  - Operation: `{ userId: ObjectId, operations: [String], score: Number, date: Date }`

#### Additional Considerations

- **Security**:
  - Implement HTTPS.
  - Use environment variables for configuration.
  - Sanitize and validate all inputs.
  - Protect routes using JWT.

- **Performance**:
  - Optimize MongoDB queries.
  - Use indexes where necessary.
  - Implement caching for frequently accessed data.

- **Testing**:
  - Write unit and integration tests for both frontend and backend.
  - Use Jest for testing React components and API endpoints.

- **Deployment**:
  - Deploy the backend on a platform like Heroku or AWS.
  - Deploy the frontend on a platform like Netlify or Vercel.
  - Use Docker for containerization and Kubernetes for orchestration if needed.

By implementing these features step by step, you'll build a comprehensive MERN application that not only calculates baseball scores but also provides a robust and user-friendly experience.