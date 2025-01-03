
# 147 - Insertion Sort List
Given the head of a singly linked list, sort the list using insertion sort, and return the sorted list's head.
The steps of the insertion sort algorithm:
- Insertion sort iterates, consuming one input element each repetition and growing a sorted output list.
- At each iteration, insertion sort removes one element from the input data, finds the location it belongs within the sorted list and inserts it there.
- It repeats until no input elements remain.

## MERN Project Ideas

Here are five MERN (MongoDB, Express, React, Node.js) project ideas where you can utilize the **insertion sort for a linked list** solution:

### 1. **Leaderboard Management System**
- **Description:** Create a system where users can view and update a leaderboard for games, quizzes, or competitions. The leaderboard data is stored as a linked list for efficient insertion and sorting.
- **Use of Insertion Sort:** When a new score is added, use the linked list and the insertion sort solution to maintain the leaderboard in sorted order (highest score at the top).
- **Features:**
  - CRUD operations for users and scores.
  - Dynamic sorting and ranking of players.
  - Visual leaderboard with React.
  - REST API to fetch sorted leaderboard data.

### 2. **Task Prioritization Tool**
- **Description:** Build a task manager where tasks are prioritized based on urgency or importance, and the backend maintains these tasks as a sorted linked list.
- **Use of Insertion Sort:** Insert tasks into a linked list based on priority and display them in sorted order.
- **Features:**
  - Add, edit, and remove tasks.
  - Auto-sort tasks by priority or deadline using insertion sort.
  - Filters for completed/incomplete tasks.
  - Notifications or reminders for high-priority tasks.

### 3. **Real-Time Stock Price Tracker**
- **Description:** Develop a stock price tracking app that displays stock prices in real time, sorted by price or percentage change.
- **Use of Insertion Sort:** Use the linked list to maintain stock prices in sorted order as updates are received.
- **Features:**
  - WebSockets for real-time updates.
  - Sort stocks by price, percentage change, or volume.
  - Search and filter functionality.
  - Interactive graphs using a library like Chart.js.

### 4. **Dynamic Student Ranking Portal**
- **Description:** Create a portal for educational institutions to manage and display student rankings based on test scores or grades.
- **Use of Insertion Sort:** Store student scores in a linked list and use insertion sort to update rankings dynamically as new scores are added.
- **Features:**
  - Student profiles with grades and test scores.
  - Dynamic rank calculation and display.
  - Search and filter students by name, class, or subject.
  - Admin panel to manage student data.

### 5. **Live Auction System**
- **Description:** Build a live auction platform where items are dynamically sorted by highest bids in real-time.
- **Use of Insertion Sort:** Use the linked list to manage auction items and sort them by their current highest bids.
- **Features:**
  - Real-time bidding using WebSockets.
  - Dynamic sorting of items by bid value.
  - User authentication for bidders and sellers.
  - Bid history and notifications for new highest bids.

### Additional Enhancements
- Use MongoDB to store the linked list structure for persistence.
- Implement a REST API with Express to interact with the data (fetch, insert, delete nodes).
- Use React for a dynamic and interactive front-end UI.
- Consider integrating WebSockets for real-time updates in cases like auctions or leaderboards. 

Each of these projects can leverage the insertion sort functionality to handle dynamically changing, sorted data efficiently.