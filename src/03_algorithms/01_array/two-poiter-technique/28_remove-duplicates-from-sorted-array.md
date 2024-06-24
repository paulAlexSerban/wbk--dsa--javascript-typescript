# Remove Duplicate from Sorted Array

## Problem Statement
Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
Return k.
Custom Judge:

The judge will test your solution with the following code:

int[] nums = [...]; // Input array
int[] expectedNums = [...]; // The expected answer with correct length

int k = removeDuplicates(nums); // Calls your implementation

assert k == expectedNums.length;
for (int i = 0; i < k; i++) {
    assert nums[i] == expectedNums[i];
}
If all assertions pass, then your solution will be accepted.

 

Example 1:
Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).

Example 2:
Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
 

Constraints:
1 <= nums.length <= 3 * 104
-100 <= nums[i] <= 100
nums is sorted in non-decreasing order.

## Explanation

The solution to the problem of removing duplicates from a sorted array in-place follows a two-pointer technique. Let's break down the provided code and understand how it works:

### Code Explanation

```javascript
export function removeDuplicates(nums: number[]): number {
  if (nums.length === 0) return 0;
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
}
```

### Detailed Explanation

1. **Initial Check**:
   ```javascript
   if (nums.length === 0) return 0;
   ```
   This line checks if the input array `nums` is empty. If it is, the function returns 0 immediately because there are no elements to process.

2. **Pointer Initialization**:
   ```javascript
   let i = 0;
   ```
   A variable `i` is initialized to 0. This will keep track of the position of the last unique element in the array.

3. **Iterating Through the Array**:
   ```javascript
   for (let j = 1; j < nums.length; j++) {
   ```
   A loop starts from the second element (index 1) to the end of the array. The variable `j` is used to iterate through the array.

4. **Checking for Duplicates**:
   ```javascript
   if (nums[j] !== nums[i]) {
   ```
   Inside the loop, the current element `nums[j]` is compared with the last unique element `nums[i]`.

   - If they are different (`nums[j] !== nums[i]`), it means `nums[j]` is a new unique element.

5. **Updating the Position of Unique Elements**:
   ```javascript
   i++;
   nums[i] = nums[j];
   ```
   When a new unique element is found, the pointer `i` is incremented to point to the next position, and `nums[i]` is updated to `nums[j]`. This effectively moves the new unique element to the next position in the array of unique elements.

6. **Returning the Count of Unique Elements**:
   ```javascript
   return i + 1;
   ```
   After the loop ends, `i` points to the index of the last unique element. Since array indices start from 0, the total count of unique elements is `i + 1`.

### Example Walkthrough

Let's go through an example to see how the code works:

#### Example 1
- Input: `nums = [1, 1, 2]`
- Initial state: `i = 0`, `nums = [1, 1, 2]`

  - `j = 1`: `nums[1] == nums[0]` (both are 1), so no change.
  - `j = 2`: `nums[2] != nums[0]` (2 != 1), `i++` (now `i = 1`), `nums[1] = nums[2]` (update `nums` to `[1, 2, 2]`).

- Final state: `i = 1`
- Output: `i + 1 = 2` (unique elements are `[1, 2]`)

#### Example 2
- Input: `nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]`
- Initial state: `i = 0`, `nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]`

  - `j = 1`: `nums[1] == nums[0]` (both are 0), so no change.
  - `j = 2`: `nums[2] != nums[0]` (1 != 0), `i++` (now `i = 1`), `nums[1] = nums[2]` (update `nums` to `[0, 1, 1, 1, 1, 2, 2, 3, 3, 4]`).
  - `j = 3`: `nums[3] == nums[1]` (both are 1), so no change.
  - `j = 4`: `nums[4] == nums[1]` (both are 1), so no change.
  - `j = 5`: `nums[5] != nums[1]` (2 != 1), `i++` (now `i = 2`), `nums[2] = nums[5]` (update `nums` to `[0, 1, 2, 1, 1, 2, 2, 3, 3, 4]`).
  - `j = 6`: `nums[6] == nums[2]` (both are 2), so no change.
  - `j = 7`: `nums[7] != nums[2]` (3 != 2), `i++` (now `i = 3`), `nums[3] = nums[7]` (update `nums` to `[0, 1, 2, 3, 1, 2, 2, 3, 3, 4]`).
  - `j = 8`: `nums[8] == nums[3]` (both are 3), so no change.
  - `j = 9`: `nums[9] != nums[3]` (4 != 3), `i++` (now `i = 4`), `nums[4] = nums[9]` (update `nums` to `[0, 1, 2, 3, 4, 2, 2, 3, 3, 4]`).

- Final state: `i = 4`
- Output: `i + 1 = 5` (unique elements are `[0, 1, 2, 3, 4]`)

### Summary
The provided solution efficiently removes duplicates from a sorted array in-place using the two-pointer technique, ensuring that each unique element appears only once in the resulting array. The function returns the number of unique elements, and the modified array contains these unique elements at the beginning.

## MERN Project Ideas
Certainly! Here are five MERN (MongoDB, Express.js, React, Node.js) project ideas where the solution for removing duplicates from a sorted array can be applied:

### 1. **E-commerce Product Filter**
**Description**: Build an e-commerce platform where users can filter products by categories, brands, prices, and other attributes. When displaying the list of products, ensure there are no duplicate products displayed.

**Application of Solution**: While processing the list of products for display, remove any duplicate entries to ensure each product appears only once.

### 2. **Social Media Feed Aggregator**
**Description**: Create a social media application that aggregates posts from multiple sources (e.g., friends, groups, pages). 

**Application of Solution**: When aggregating posts, remove duplicates to avoid showing the same post multiple times in the user's feed.

### 3. **Task Management System**
**Description**: Develop a task management system where users can add, edit, and delete tasks. Tasks can be sorted by due date, priority, or project.

**Application of Solution**: When displaying tasks sorted by due date or priority, ensure there are no duplicate tasks in the list.

### 4. **Movie Recommendation System**
**Description**: Build a movie recommendation system that suggests movies based on user preferences and viewing history.

**Application of Solution**: When generating a list of recommended movies, remove duplicates to ensure each movie is only listed once, even if multiple recommendation algorithms suggest it.

### 5. **Event Management Platform**
**Description**: Create an event management platform where users can create, join, and manage events. 

**Application of Solution**: When displaying a list of upcoming events sorted by date, remove duplicates to ensure each event is only shown once, even if the user is associated with it in multiple ways (e.g., organizer and participant).

### Detailed Example: E-commerce Product Filter

**Frontend (React)**:
- Use React to create a user interface with filters for categories, brands, prices, etc.
- Fetch the filtered product list from the backend and ensure there are no duplicates before rendering.

**Backend (Node.js/Express.js)**:
- Implement API endpoints to fetch products based on filters.
- Use the provided solution to remove duplicate products before sending the response.

**Database (MongoDB)**:
- Store product details, including categories, brands, prices, and other attributes.
- Ensure efficient querying to fetch products based on filters.

### Example Code Snippet for Removing Duplicates

**Backend Code (Node.js/Express.js)**:
```javascript
app.get('/api/products', async (req, res) => {
  try {
    // Fetch products from the database based on filters
    let products = await Product.find({ /* filters */ }).sort('price');
    
    // Function to remove duplicates
    function removeDuplicates(nums) {
      if (nums.length === 0) return 0;
      let i = 0;
      for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
          i++;
          nums[i] = nums[j];
        }
      }
      return i + 1;
    }

    // Remove duplicate products
    const uniqueProductCount = removeDuplicates(products);
    products = products.slice(0, uniqueProductCount);

    res.json(products);
  } catch (error) {
    res.status(500).send('Server Error');
  }
});
```

**Frontend Code (React)**:
```javascript
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get('/api/products');
      setProducts(res.data);
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product, index) => (
          <li key={index}>{product.name} - ${product.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
```

By incorporating the solution to remove duplicates from a sorted array, you ensure the user experience remains clean and concise across these projects.