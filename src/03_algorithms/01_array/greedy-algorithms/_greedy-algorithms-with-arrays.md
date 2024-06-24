# Greedy Algorithms with Arrays

Greedy algorithms are a class of algorithms that make the most optimal choice at each step as they work towards a solution. These algorithms do not always produce the globally optimal solution, but they are often efficient and easy to implement.

Let's look at a couple of common problems that can be solved using greedy algorithms with arrays, along with their TypeScript implementations.

### 1. Problem: Activity Selection

**Problem Statement:** Given an array of activities with start and end times, select the maximum number of activities that don't overlap.
**Greedy Choice:** Always pick the next activity that finishes earliest.
**Steps:**
1. Sort activities based on their end time.
2. Select the first activity.
3. For each subsequent activity, if its start time is greater than or equal to the end time of the last selected activity, select it.

**TypeScript Implementation:**
```js
interface Activity {
    start: number;
    end: number;
}

function activitySelection(activities: Activity[]): Activity[] {
    // Sort activities by end time
    activities.sort((a, b) => a.end - b.end);

    const selectedActivities: Activity[] = [];
    let lastEndTime = 0;

    for (const activity of activities) {
        if (activity.start >= lastEndTime) {
            selectedActivities.push(activity);
            lastEndTime = activity.end;
        }
    }

    return selectedActivities;
}

// Example usage:
const activities: Activity[] = [
    { start: 1, end: 2 },
    { start: 3, end: 4 },
    { start: 0, end: 6 },
    { start: 5, end: 7 },
    { start: 8, end: 9 },
    { start: 5, end: 9 },
];

const result = activitySelection(activities);
console.log(result);  // Outputs the selected activities
```

### 2. Problem: Minimum Number of Coins

**Problem Statement:** Given a value `V` and an array of denominations of coins, find the minimum number of coins needed to make the change.
**Greedy Choice:** Always pick the largest denomination coin that is less than or equal to the remaining amount.
**Steps:**
1. Sort the array of coins in descending order.
2. Start with the largest denomination and take as many as possible.
3. Move to the next largest denomination and repeat until the value is reached.

**TypeScript Implementation:**
```js
function minCoins(coins: number[], V: number): number[] {
    // Sort coins in descending order
    coins.sort((a, b) => b - a);

    const result: number[] = [];
    let remainingValue = V;

    for (const coin of coins) {
        while (remainingValue >= coin) {
            remainingValue -= coin;
            result.push(coin);
        }
    }

    // If there's remaining value that can't be represented by given coins, it means no solution exists
    if (remainingValue > 0) {
        throw new Error("No solution possible with the given coin denominations.");
    }

    return result;
}

// Example usage:
const coins: number[] = [1, 2, 5, 10];
const value = 23;

try {
    const result = minCoins(coins, value);
    console.log(result);  // Outputs the coins used
} catch (e) {
    console.error(e.message);
}
```

### Explanation:
- **Activity Selection:**
  - The activities are sorted based on their end time to ensure that the earliest finishing activity is considered first.
  - The algorithm iterates through the sorted activities and selects those that don't overlap with the previously selected activity.
  - This ensures the maximum number of non-overlapping activities are selected.

- **Minimum Number of Coins:**
  - The coin denominations are sorted in descending order to prioritize larger coins.
  - The algorithm iterates through the sorted denominations, selecting as many of each coin as possible before moving to the next denomination.
  - This ensures the minimum number of coins are used to make the change.

Greedy algorithms like these are powerful because they break problems down into smaller, manageable decisions. However, it's important to note that greedy algorithms don't always provide the optimal solution for every problem, so it's essential to analyze whether the greedy choice property holds for the specific problem at hand.