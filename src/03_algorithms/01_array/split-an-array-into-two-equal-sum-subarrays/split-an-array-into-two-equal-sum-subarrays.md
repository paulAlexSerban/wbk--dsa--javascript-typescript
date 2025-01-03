# Split an array into two equal Sum subarrays
> Asked In : Facebook interview 

Given an array of integers greater than zero, find if it is possible to split it in two subarrays (without reordering the elements), such that the sum of the two subarrays is the same. Print the two subarrays.

Example 1:
    Input : Arr[] = { 1 , 2 , 3 , 4 , 5 , 5  }
    Output :  { 1 2 3 4 } 
            { 5 , 5 }

Example 2:
    Input : Arr[] = { 4, 1, 2, 3 }
    Output : {4 1}
            {2 3}

Example 3:
    Input : Arr[] = { 4, 3, 2, 1}
    Output : Not Possible


A Simple solution is to run two loop to split array and check it is possible to split array into two parts such that sum of first_part equal to sum of second_part. 

# MERN Project Ideas

Here are five MERN stack project ideas where you can implement the solution to splitting an array into two equal-sum subarrays:

### 1. **Budget Balancer App**
- **Description**: An app where users can input expenses and split them into two equal-budget categories, such as "Essentials" and "Luxuries."
- **Features**:
  - Input expense values.
  - Display two categories with equal sums if possible.
  - Visualize split with charts or graphs.
  - Save and retrieve splits for different budgets.
- **Tech Highlights**:
  - Frontend: Use React for dynamic data visualization.
  - Backend: Node.js and Express for handling calculations.
  - Database: MongoDB for saving user budgets and splits.

### 2. **Array Split Puzzle Game**
- **Description**: A fun puzzle game where users are challenged to divide arrays into equal-sum subarrays to progress through levels.
- **Features**:
  - Randomly generate arrays as puzzles.
  - Validate and score users' solutions in real-time.
  - Levels increase in difficulty with larger arrays or odd-numbered sums.
  - Leaderboard and user profiles.
- **Tech Highlights**:
  - React for an interactive user interface.
  - Express backend for validation logic.
  - MongoDB to store user progress and scores.

### 3. **Data Split Visualizer**
- **Description**: A tool for developers and data analysts to visualize how arrays or data sets can be split into equal sums.
- **Features**:
  - Upload CSV/JSON files with numeric data.
  - Highlight possible splits visually using graphs or tables.
  - Generate reports for analysis.
- **Tech Highlights**:
  - File upload and parsing on the frontend with React.
  - Backend handles the split algorithm and returns results.
  - MongoDB for storing uploaded files and history.

### 4. **Team Workload Balancer**
- **Description**: A tool for managers to split team tasks or workloads into two balanced groups.
- **Features**:
  - Input a list of tasks with effort estimations (in hours or points).
  - Suggest two groups with balanced efforts.
  - Save workload distributions and generate team reports.
- **Tech Highlights**:
  - React for task entry and workload visualizations.
  - Backend implements the splitting algorithm and stores team data.
  - MongoDB for managing tasks and user/team details.

### 5. **Inventory Split Manager**
- **Description**: A warehouse management app that helps split inventory into two equally valued sub-inventories for distribution.
- **Features**:
  - Input inventory items with their values.
  - Calculate and display possible splits.
  - Generate distribution reports.
  - Track inventory and splits history.
- **Tech Highlights**:
  - React for inventory management and visualization.
  - Express backend for split calculation logic.
  - MongoDB for inventory storage and history tracking.

### Implementation Strategy:
- **Frontend**: Use React for a dynamic UI where users can interact with the array splitting functionality in real time.
- **Backend**: Use Node.js with Express to handle the algorithm and API endpoints.
- **Database**: Use MongoDB to store data like user inputs, solutions, scores, or history.
- **Optional Enhancements**:
  - Add authentication using JWT or Passport.js for user profiles.
  - Use Material-UI or Tailwind CSS for sleek designs.
  - Deploy on AWS or Vercel for scalability.