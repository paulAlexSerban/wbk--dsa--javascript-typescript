# Top K Frequent Elements
> NeetCode
> LeetCode
Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

Example 1:
Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]

Example 2:
Input: nums = [1], k = 1
Output: [1]

Constraints:
- `1 <= nums.length <= 105`
- `-104 <= nums[i] <= 104`
- `k is in the range [1, the number of unique elements in the array]`

It is guaranteed that the answer is unique.
Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.

## Solution
```typescript
const topKFrequent = (nums: number[], k: number): number[] => {
    const map = new Map<number, number>();
    nums.forEach(num => {
        map.set(num, (map.get(num) || 0) + 1);
    });
    
    const buckets: number[][] = new Array(nums.length + 1).fill(null).map(() => []);
    
    map.forEach((value, key) => {
        buckets[value].push(key);
    });
    
    const res: number[] = [];
    for (let i = buckets.length - 1; i >= 0 && res.length < k; i--) {
        if (buckets[i].length > 0) {
        res.push(...buckets[i]);
        }
    }
    
    return res;
};
```

Sure, let's break down the solution for finding the top K frequent elements in an array step by step.

### Solution Explanation

The provided solution leverages a combination of a frequency map and bucket sort to achieve better than \(O(n \log n)\) time complexity.

### Step-by-Step Explanation

1. **Create a Frequency Map**:
    - We use a `Map` to count the frequency of each element in the array `nums`.
    - For each element `num` in `nums`, we increment its count in the map.

    ```javascript
    const map = new Map<number, number>();
    nums.forEach(num => {
        map.set(num, (map.get(num) || 0) + 1);
    });
    ```

    After this step, the `map` contains each number as the key and its frequency as the value.

2. **Initialize Buckets**:
    - We create an array of empty arrays called `buckets`, where the index represents the frequency of elements.
    - The length of `buckets` is `nums.length + 1` because the maximum frequency of any element can't be more than the length of `nums`.

    ```javascript
    const buckets: number[][] = new Array(nums.length + 1).fill(null).map(() => []);
    ```

3. **Populate Buckets**:
    - We iterate over the frequency map and place each element into the bucket corresponding to its frequency.
    
    ```javascript
    map.forEach((value, key) => {
        buckets[value].push(key);
    });
    ```

    After this step, `buckets[i]` contains all the numbers that appear `i` times in `nums`.

4. **Collect Top K Frequent Elements**:
    - We iterate over the buckets from the end (highest frequency) to the start.
    - We keep adding elements from these buckets to the result array `res` until we have collected `k` elements.

    ```javascript
    const res: number[] = [];
    for (let i = buckets.length - 1; i >= 0 && res.length < k; i--) {
        if (buckets[i].length > 0) {
            res.push(...buckets[i]);
        }
    }
    ```

    The loop continues until the result array contains `k` elements.

5. **Return Result**:
    - Finally, we return the result array `res`.

    ```javascript
    return res;
    ```

### Example Walkthrough

Let's walk through the first example with `nums = [1,1,1,2,2,3]` and `k = 2`.

1. **Frequency Map**:
    - `{1: 3, 2: 2, 3: 1}`

2. **Buckets Initialization**:
    - `buckets = [[], [], [], [], [], [], []]` (length 7)

3. **Populate Buckets**:
    - `buckets = [[], [3], [2], [1], [], [], []]`
        - Number 3 appears once, so it goes in `buckets[1]`
        - Number 2 appears twice, so it goes in `buckets[2]`
        - Number 1 appears three times, so it goes in `buckets[3]`

4. **Collect Top K Frequent Elements**:
    - Start from the end: 
        - `i = 6`, `5`, `4`: No elements.
        - `i = 3`: Add `1` to `res` → `res = [1]`
        - `i = 2`: Add `2` to `res` → `res = [1, 2]`

    Now `res` contains `k` elements, so we stop.

5. **Return Result**:
    - `return [1, 2]`

### Time Complexity

- **Frequency Map Construction**: \(O(n)\)
- **Bucket Population**: \(O(n)\)
- **Collecting Top K Elements**: \(O(n)\)

Overall time complexity is \(O(n)\), which is better than \(O(n \log n)\).

This approach efficiently finds the top K frequent elements in linear time, making it suitable for large input sizes.

## MERN Project Ideas
Certainly! Here are some MERN (MongoDB, Express.js, React.js, Node.js) project ideas where you can implement the "Top K Frequent Elements" feature:

1. **E-commerce Analytics Dashboard**:
    - **Description**: Build an analytics dashboard for an e-commerce platform where administrators can view the most frequently bought items.
    - **Feature Implementation**: Use the top K frequent elements function to display the top-selling products over different periods (daily, weekly, monthly).

2. **Social Media Trends Tracker**:
    - **Description**: Create a social media platform or a trends tracker that shows the most popular hashtags or keywords in posts.
    - **Feature Implementation**: Apply the top K frequent elements function to identify and display trending hashtags or keywords from user posts.

3. **News Aggregator with Popular Topics**:
    - **Description**: Develop a news aggregator website that collects news articles from various sources and displays the most discussed topics.
    - **Feature Implementation**: Use the top K frequent elements function to find and show the most frequently mentioned topics in the news articles.

4. **Movie Recommendation System**:
    - **Description**: Create a movie recommendation website where users can see the most frequently watched movies by other users.
    - **Feature Implementation**: Implement the top K frequent elements function to display the top-rated or most-watched movies.

5. **Online Forum with Popular Discussions**:
    - **Description**: Build an online forum where users can create and participate in discussions, and the most popular discussion topics are highlighted.
    - **Feature Implementation**: Use the top K frequent elements function to identify and display the most discussed topics.

6. **Fitness Tracking Application**:
    - **Description**: Develop a fitness tracking app that allows users to log their workouts and view the most common exercises performed by other users.
    - **Feature Implementation**: Apply the top K frequent elements function to find and display the most frequent exercises.

7. **Music Streaming Platform**:
    - **Description**: Create a music streaming service where users can listen to songs and see the most frequently played tracks.
    - **Feature Implementation**: Use the top K frequent elements function to determine and display the top-played songs.

8. **Recipe Sharing Community**:
    - **Description**: Build a recipe sharing platform where users can share and search for recipes, and see the most popular ingredients.
    - **Feature Implementation**: Implement the top K frequent elements function to identify and show the most frequently used ingredients in the recipes.

9. **Online Learning Portal**:
    - **Description**: Develop an online learning platform where users can take courses and view the most popular courses among other users.
    - **Feature Implementation**: Use the top K frequent elements function to find and display the top-enrolled courses.

10. **Travel Planning Application**:
    - **Description**: Create a travel planning app where users can share their travel experiences and see the most frequently visited destinations.
    - **Feature Implementation**: Apply the top K frequent elements function to identify and display the most popular travel destinations.

### Implementation Example: E-commerce Analytics Dashboard

Here's a brief outline on how you could implement the "Top K Frequent Elements" feature in an e-commerce analytics dashboard:

1. **Backend (Node.js + Express)**:
    - Set up an endpoint to fetch order data from MongoDB.
    - Use the top K frequent elements function to process the data and find the top-selling products.

    ```javascript
    app.get('/api/top-products', async (req, res) => {
        try {
            const orders = await Order.find({});
            const productCounts = {};
            orders.forEach(order => {
                order.products.forEach(product => {
                    productCounts[product.id] = (productCounts[product.id] || 0) + 1;
                });
            });
            const topProducts = topKFrequent(Object.keys(productCounts), req.query.k);
            res.json(topProducts);
        } catch (error) {
            res.status(500).send(error);
        }
    });
    ```

2. **Frontend (React)**:
    - Create a component to display the top-selling products.
    - Fetch the top products from the backend and display them in a list or chart.

    ```javascript
    import React, { useEffect, useState } from 'react';
    import axios from 'axios';

    const TopProducts = ({ k }) => {
        const [topProducts, setTopProducts] = useState([]);

        useEffect(() => {
            const fetchTopProducts = async () => {
                const response = await axios.get(`/api/top-products?k=${k}`);
                setTopProducts(response.data);
            };
            fetchTopProducts();
        }, [k]);

        return (
            <div>
                <h2>Top {k} Products</h2>
                <ul>
                    {topProducts.map(product => (
                        <li key={product.id}>{product.name}</li>
                    ))}
                </ul>
            </div>
        );
    };

    export default TopProducts;
    ```

This example demonstrates how to integrate the "Top K Frequent Elements" feature in a MERN stack application. You can adapt this approach to fit any of the other project ideas as well.