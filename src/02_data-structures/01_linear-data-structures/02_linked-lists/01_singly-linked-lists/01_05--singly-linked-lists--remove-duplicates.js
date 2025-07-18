/**
 * Linked Lists - Remove Duplicates
 * A Node class is provided for you in the editor. A Node object has an integer data field,
 * data, and a Node instance pointer, next, pointing to another node (i.e.: the next node in a list).
 *
 * A removeDuplicates function is declared in your editor, which takes a pointer to the  head
 * node of a linked list as a parameter. Complete removeDuplicates so that it deletes any
 * duplicate nodes from the list and returns the head of the updated list.
 *
 * Note: The head pointer may be null, indicating that the list is empty. Be
 * sure to reset your next pointer when performing deletions to avoid breaking the list.
 *
 * Input Format
 *
 * You do not need to read any input from stdin. The following input is handled
 * by the locked stub code and passed to the removeDuplicates function:
 * The first line contains an integer, N, the number of nodes to be inserted.
 * The N subsequent lines each contain an integer describing the data value
 * of a node being inserted at the list's tail.
 *
 * Constraints
 *
 * The data elements of the linked list argument will always be in non-decreasing order.
 *
 * Output Format
 *
 * Your removeDuplicates function should return the head of the updated
 * linked list. The locked stub code in your editor will print the returned list to stdout.
 */

/**
 * @param {Object} head
 * @returns
 */

function removeDuplicates(head) {
    if (!head) {
        return head;
    } // Return head if it is null

    let current = head; // Initialize current node as head
    while (current.next) {
        // Iterate through the list
        if (current.data === current.next.data) {
            // If the current node's data is equal to the next node's data
            current.next = current.next.next; // Remove the next node by updating the current node's next pointer
        } else {
            current = current.next; // Move to the next node
        }
    }
    return head;
}

// Define Node class
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// Create linked list with some duplicates
const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(2);
head.next.next.next = new Node(3);
head.next.next.next.next = new Node(3);
head.next.next.next.next.next = new Node(4);

// Remove duplicates
const updatedHead = removeDuplicates(head);

// Print updated linked list
let current = updatedHead;
while (current) {
    console.log(current.data);
    current = current.next;
}
