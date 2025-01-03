/**
 * Constraints:
    - The number of nodes in the list is in the range [1, 5000].
    - -5000 <= Node.val <= 5000
 */

export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function insertionSortList(head: ListNode | null): ListNode | null {
  if (!head || !head.next) {
    return head; // If the list has 0 or 1 node, it's already sorted
  }

  // Create a dummy node to serve as the start of the sorted portion
  const dummy = new ListNode(0);
  dummy.next = null;

  let current: ListNode = head; // Pointer to traverse the original list

  while (current) {
    const next: ListNode | null = current.next; // Save the next node
    let prev = dummy; // Start from the dummy node for insertion

    // Find the correct position to insert the current node
    while (prev.next && prev.next.val < current.val) {
      prev = prev.next;
    }

    // Insert the current node into the sorted portion
    current.next = prev.next;
    prev.next = current;

    // Move to the next node in the original list
    if (!next) {
      break; // Reached the end of the original list
    }
    current = next;
  }

  return dummy.next; // Return the sorted list
}
/*
 * Helper function to convert a linked list to an array for easier display
 */
// function linkedListToArray(head: ListNode | null): number[] {
//     const result: number[] = [];
//     while (head) {
//         result.push(head.val);
//         head = head.next;
//     }
//     return result;
// }
