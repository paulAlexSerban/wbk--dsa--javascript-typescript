import { ListNode, insertionSortList } from './147_insertion-sort-list';

describe('insertionSortList', () => {
    // good weather tests
    test('should return the sorted list out of [4,2,1,3]', () => {
        const head = new ListNode(4, new ListNode(2, new ListNode(1, new ListNode(3))));
        const expected = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));
        expect(insertionSortList(head)).toEqual(expected);
    })

    test('should return the sorted list out of [-1,5,3,4,0]', () => {
        const head = new ListNode(-1, new ListNode(5, new ListNode(3, new ListNode(4, new ListNode(0)))));
        const expected = new ListNode(-1, new ListNode(0, new ListNode(3, new ListNode(4, new ListNode(5)))));
        expect(insertionSortList(head)).toEqual(expected);
    })

    // bad weather tests
    test('should return the same list if it has 0 or 1 node', () => {
        const head = new ListNode(1);
        expect(insertionSortList(head)).toBe(head);
    });

    // edge cases
    test('should return null if the input is null', () => {
        expect(insertionSortList(null)).toBeNull();
    });
});