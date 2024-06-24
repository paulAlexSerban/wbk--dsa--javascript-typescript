# Determine if Two Events Have Conflict
You are given two arrays of strings that represent two inclusive events that happened on the same day, event1 and event2, where:

event1 = [startTime1, endTime1] and
event2 = [startTime2, endTime2].
Event times are valid 24 hours format in the form of HH:MM.

A conflict happens when two events have some non-empty intersection (i.e., some moment is common to both events).

Return true if there is a conflict between two events. Otherwise, return false.

Example 1:
Input: event1 = ["01:15","02:00"], event2 = ["02:00","03:00"]
Output: true
Explanation: The two events intersect at time 2:00.

Example 2:
Input: event1 = ["01:00","02:00"], event2 = ["01:20","03:00"]
Output: true
Explanation: The two events intersect starting from 01:20 to 02:00.

Example 3:
Input: event1 = ["10:00","11:00"], event2 = ["14:00","15:00"]
Output: false
Explanation: The two events do not intersect.
 

Constraints:
event1.length == event2.length == 2
event1[i].length == event2[i].length == 5
startTime1 <= endTime1
startTime2 <= endTime2
All the event times follow the HH:MM format.

## Solution

Certainly! Let's break down the provided TypeScript function `haveConflict` step by step:

### Function Explanation:

```js
export function haveConflict(event1: string[], event2: string[]): boolean {
  // Check if either event array is empty; if so, return false (no conflict)
  if (!event1.length || !event2.length) {
    return false;
  }

  // Extract start and end times from event1 and event2
  const startTime1 = event1[0];
  const endTime1 = event1[1];
  const startTime2 = event2[0];
  const endTime2 = event2[1];

  // Convert HH:MM time format to minutes past midnight for easier comparison
  const toMinutes = (time: string): number => {
    const [hours, minutes] = time.split(":").map(Number);
    return hours * 60 + minutes;
  };

  // Convert start and end times of both events to minutes past midnight
  const start1 = toMinutes(startTime1);
  const end1 = toMinutes(endTime1);
  const start2 = toMinutes(startTime2);
  const end2 = toMinutes(endTime2);

  // Check for overlap between the two intervals
  if (
    (end1 >= start2 && start1 <= end2) ||
    (end2 >= start1 && start2 <= end1)
  ) {
    return true; // There is an overlap
  } else {
    return false; // No overlap
  }
}
```

### Step-by-Step Explanation:

1. **Initial Check:**
   ```typescript
   if (!event1.length || !event2.length) {
       return false;
   }
   ```
   - This condition checks if either `event1` or `event2` is empty. If either is empty, the function immediately returns `false`, indicating no conflict since an empty event cannot overlap with another event.

2. **Extracting Start and End Times:**
   - The function extracts the start and end times (`startTime1`, `endTime1`, `startTime2`, `endTime2`) from `event1` and `event2`.

3. **Converting Time Format:**
   - The `toMinutes` function converts a time string (`HH:MM` format) into minutes past midnight:
     ```typescript
     const toMinutes = (time: string): number => {
       const [hours, minutes] = time.split(":").map(Number);
       return hours * 60 + minutes;
     };
     ```
   - For example, `toMinutes("01:30")` would return `90`, representing 1 hour and 30 minutes past midnight.

4. **Convert Times to Minutes:**
   - Using `toMinutes`, convert `startTime1`, `endTime1`, `startTime2`, and `endTime2` to their respective minute values (`start1`, `end1`, `start2`, `end2`).

5. **Checking for Overlap:**
   - The function then checks if there is any overlap between the two time intervals defined by `event1` and `event2`:
     ```typescript
     if (
       (end1 >= start2 && start1 <= end2) ||
       (end2 >= start1 && start2 <= end1)
     ) {
       return true; // There is an overlap
     } else {
       return false; // No overlap
     }
     ```
   - The conditions `(end1 >= start2 && start1 <= end2)` and `(end2 >= start1 && start2 <= end1)` ensure that the end time of one event is greater than or equal to the start time of the other event, indicating overlap in their time intervals.

6. **Return Result:**
   - Finally, the function returns `true` if there is an overlap (conflict) between the two events, and `false` if there is no overlap.

### Usage:

You can use this function to check for conflicts between pairs of events defined by their start and end times in the format `["HH:MM", "HH:MM"]`. Here are example usages based on the previous discussions:

```typescript
console.log(haveConflict(["01:15", "02:00"], ["02:00", "03:00"])); // Output: true
console.log(haveConflict(["01:00", "02:00"], ["01:20", "03:00"])); // Output: true
console.log(haveConflict(["10:00", "11:00"], ["14:00", "15:00"])); // Output: false
```

This function efficiently determines if there is an overlap between two events based on their time intervals, making it suitable for scheduling and time management applications where conflict detection is crucial.