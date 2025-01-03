# Are Arrays Equal
Given two arrays, a and b of equal length. The task is to determine if the given arrays are equal or not. Two arrays are considered equal if:
    - Both arrays contain the same set of elements.
    - The arrangements (or permutations) of elements may be different.
    - If there are repeated elements, the counts of each element must be the same in both arrays.

Examples: 
  - Input: a[] = [1, 2, 5, 4, 0], b[] = [2, 4, 5, 0, 1]
  - Output: true

  - Input: a[] = [1, 2, 5, 4, 0, 2, 1], b[] = [2, 4, 5, 0, 1, 1, 2] 
  - Output: true

  - Input: a[] = [1, 7, 1], b[] = [7, 7, 1]
  - Output: false

# Resources
- https://www.geeksforgeeks.org/check-if-two-arrays-are-equal-or-not/

## MERN Project Ideas

Here are five MERN (MongoDB, Express.js, React, Node.js) project ideas where you can implement the concepts from your solution (array equality checks, anagram checks, and frequency counting):
### **1. Anagram Validator App**
#### **Description:**
Create a web app where users can input two strings, and the app will determine if they are anagrams of each other.

#### **Features:**
- **Frontend:** A React form with two input fields and a "Check" button.
- **Backend:** A Node.js API that processes the inputs and uses your `isAnagram` function to return the result.
- **Database:** Save user-submitted pairs of strings and their results in MongoDB for analytics.
- **Extras:** Display statistics like the most frequently submitted anagrams or common non-anagram pairs.

#### **Key Concepts:**  
String manipulation, sorting, and frequency counting.


### **2. Vocabulary Learning Platform**
#### **Description:**
A tool for students to practice vocabulary through anagram puzzles. Users are shown a scrambled word and must guess the original word.

#### **Features:**
- **Frontend:** React-based interface for presenting scrambled words and capturing user guesses.
- **Backend:** Node.js service that:
  - Stores a list of vocabulary words in MongoDB.
  - Scrambles words for display.
  - Uses your `isAnagram` function to validate user guesses.
- **Extras:** Include difficulty levels (e.g., 3-letter, 5-letter words).

#### **Key Concepts:**  
Anagram validation, database querying, user authentication.


### **3. Multiplayer Word Scramble Game**
#### **Description:**
Build a real-time multiplayer game where players compete to find as many anagrams as possible from a given set of letters.

#### **Features:**
- **Frontend:** React interface showing the letters, a timer, and a scoreboard.
- **Backend:**
  - Node.js server for managing game rooms and player scores.
  - Validate anagram submissions using your `isAnagram` function.
- **Database:** Store game history and leaderboards in MongoDB.
- **Extras:** Use WebSockets (via Socket.IO) for real-time updates.

#### **Key Concepts:**  
WebSockets, real-time processing, frequency counting.


### **4. Data Analysis Tool for Arrays**
#### **Description:**
Build a tool to compare two data arrays for equality or find intersections, unions, or differences.

#### **Features:**
- **Frontend:** React interface where users can upload or paste two data arrays.
- **Backend:** Node.js API with utilities like:
  - Equality check using `areArraysEqual`.
  - Set operations (intersection, union, difference).
- **Database:** Store uploaded datasets and analysis results in MongoDB.
- **Extras:** Add support for different data types (e.g., numbers, strings).

#### **Key Concepts:**  
Array comparison, backend utilities, data visualization.


### **5. Online Game Dictionary Helper**
#### **Description:**
A dictionary tool for word-based games (like Scrabble or Words With Friends) that checks if a word can be formed using specific letters.

#### **Features:**
- **Frontend:** React interface for inputting available letters and a word to validate.
- **Backend:**
  - A Node.js API that:
    - Counts letter frequencies in the input set.
    - Uses your `isAnagram` function or frequency counting logic to check word validity.
  - MongoDB to store word lists.
- **Extras:** Allow users to search for all valid words that can be formed from the given letters.

#### **Key Concepts:**  
Frequency counting, database querying, and performance optimization.
