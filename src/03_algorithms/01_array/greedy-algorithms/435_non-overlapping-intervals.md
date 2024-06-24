# Non Overlapping Intervals

Given an array of intervals intervals where intervals[i] = [starti, endi], return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.

Example 1:
Input: intervals = [[1,2],[2,3],[3,4],[1,3]]
Output: 1
Explanation: [1,3] can be removed and the rest of the intervals are non-overlapping.

Example 2:
Input: intervals = [[1,2],[1,2],[1,2]]
Output: 2
Explanation: You need to remove two [1,2] to make the rest of the intervals non-overlapping.

Example 3:
Input: intervals = [[1,2],[2,3]]
Output: 0
Explanation: You don't need to remove any of the intervals since they're already non-overlapping.
 

Constraints:
1 <= intervals.length <= 105
intervals[i].length == 2
-5 * 104 <= starti < endi <= 5 * 104

## Solution

```js
function eraseOverlapIntervals(intervals: number[][]): number {
  if (intervals.length === 0) return 0;

  intervals.sort((a, b) => a[1] - b[1]);

  let count = 0;
  let end = intervals[0][1];

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < end) {
      count++;
    } else {
      end = intervals[i][1];
    }
  }

  return count;
}
```

Solution Explanation:
Sorting by End Time:

The intervals are sorted based on their end times (intervals.sort((a, b) => a[1] - b[1]);). This sorting ensures that we always consider intervals that end sooner, allowing for maximum room to accommodate subsequent intervals.
Iterative Checking:

The algorithm then iterates through the sorted intervals (for (let i = 1; i < intervals.length; i++)).
It maintains end as the end time of the current non-overlapping interval.
Greedy Choice:

At each step (for loop), it checks if the start time of the current interval (intervals[i][0]) is less than end.
If true, it means there is an overlap, so it increments count (indicating the need for an additional room or removal of the overlapping interval).
If false, it updates end to the end time of the current interval (end = intervals[i][1]), indicating that this interval can be accommodated without overlap.
Greedy Algorithm Characteristics:
Greedy Choice: At each step, the algorithm makes the locally optimal choice (choosing the interval that ends earliest among those not overlapping with the current one) without reconsidering previous choices.

Optimal Substructure: By sorting based on end times and checking overlaps, the algorithm ensures that each locally optimal choice leads to a globally optimal solution (minimum number of intervals to remove).

## MERN Project Ideas

Here are five MERN (MongoDB, Express.js, React.js, Node.js) project ideas where a solution for managing intervals or scheduling conflicts (like the problem described) could be applied effectively:

1. **Event Scheduling App**
   - **Description:** Create an application where users can schedule events, meetings, or appointments.
   - **Usage:** Use the interval management solution to ensure that scheduled events do not overlap. Provide visual indicators or notifications for overlapping events.
   - **Features:** User authentication, CRUD operations for events, real-time notifications using WebSockets (Socket.io), calendar view with drag-and-drop functionality.

2. **Resource Booking System**
   - **Description:** Develop a system for booking resources such as conference rooms, equipment, or facilities.
   - **Usage:** Apply the interval management to prevent double bookings and optimize resource utilization.
   - **Features:** Authentication and authorization, resource catalog, availability calendar, reservation management, admin dashboard with analytics.

3. **Task Management Tool**
   - **Description:** Build a collaborative task management tool for teams.
   - **Usage:** Use interval management to handle task durations and dependencies, ensuring tasks are scheduled without overlapping.
   - **Features:** User roles and permissions, task creation and assignment, task boards (Kanban-style), task prioritization, real-time updates.

4. **Fitness Class Scheduler**
   - **Description:** Develop an application for scheduling fitness classes (e.g., yoga, spin, CrossFit).
   - **Usage:** Implement interval management to organize class schedules and avoid overlapping sessions.
   - **Features:** Class registration, instructor availability management, recurring class schedules, user profiles, payment integration (optional).

5. **Online Exam Scheduler**
   - **Description:** Create a platform for scheduling and managing online exams for educational institutions or certification bodies.
   - **Usage:** Use interval management to schedule exam slots ensuring no overlaps, and manage exam durations.
   - **Features:** Exam creation and configuration, student registration and management, secure exam delivery, grading and reporting, analytics dashboard.

### Implementation Considerations:

- **Backend:** Node.js with Express.js for RESTful API development, MongoDB for storing interval data and user information.
- **Frontend:** React.js for building responsive and interactive user interfaces.
- **Real-time Updates:** Implement real-time updates using Socket.io for notifications and live data synchronization.
- **Authentication:** Use JWT (JSON Web Tokens) for secure authentication and authorization.

These project ideas not only utilize the interval management solution effectively but also provide opportunities to implement other MERN stack features such as user authentication, real-time updates, and interactive user interfaces.