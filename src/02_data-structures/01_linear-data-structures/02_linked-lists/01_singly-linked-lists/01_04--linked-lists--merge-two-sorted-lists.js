/**
 * Merge Two Sorted Lists
 *
 * You are given the heads of to sorted lists `list1` and `list2`.
 *
 * Merge the two lists into one sorted list and return it.
 * The list should be made by splicing together the nodes of the first two lists.
 * Return the head of the merged linked list.
 *
 * Example 1:
 * Input: list1 = [1,2,4], list2 = [1,3,4]
 * Output: [1,1,2,3,4,4]
 *
 * Example 2:
 * Input: list1 = [], list2 = []
 * Output: []
 *
 * Example 3:
 * Input: list1 = [], list2 = [0]
 * Output: [0]
 *
 * Constraints:
 * - The number of nodes in `list1` and `list2` is in the range [0, 50].
 * - -100 <= Node.val <= 100
 * - Both `list1` and `list2` are sorted in non-decreasing order.
 *
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

const mergeTwoLists = (list1, list2) => {
    // If list1 is empty, return list2
    if (!list1) {
        return list2;
    }
    // If list2 is empty, return list1
    if (!list2) {
        return list1;
    }
    // If list1's value is less than or equal to list2's value
    if (list1.val <= list2.val) {
        // Set list1's next to the result of mergeTwoLists with list1's next and list2
        list1.next = mergeTwoLists(list1.next, list2);
        // Return list1
        return list1;
    }
    // Otherwise
    // Set list2's next to the result of mergeTwoLists with list2's next and list1
    list2.next = mergeTwoLists(list2.next, list1);
    // Return list2
    return list2;
};

// Test cases:
const list1 = [1, 2, 4];
const list2 = [1, 3, 4];
console.log(mergeTwoLists(list1, list2)); // Output: [1,1,2,3,4,4]

const list3 = [];
const list4 = [];
console.log(mergeTwoLists(list3, list4)); // Output: []

const list5 = [];
const list6 = [0];
console.log(mergeTwoLists(list5, list6)); // Output: [0]
