import { StackWithTwoQueues, IStackWithTwoQueues } from './_stack-with-two-queues';

describe('StackWithTwoQueues', () => {
    let SUT: IStackWithTwoQueues;

    beforeEach(() => {
        SUT = new StackWithTwoQueues();
    });

    // bad weather tests
    it('should return null when pop is called on an empty stack', () => {
        const actual = SUT.pop();
        const expected = null;
        expect(actual).toEqual(expected);
    });

    // good weather tests
    it('should return 1 when pop is called on a stack with one element', () => {
        SUT.push(1);
        const actual = SUT.pop();
        const expected = 1;
        expect(actual).toEqual(expected);
    });

    it('should return 2 when pop is called on a stack with two elements', () => {
        SUT.push(1);
        SUT.push(2);
        const actual = SUT.pop();
        const expected = 2;
        expect(actual).toEqual(expected);
    });

    it('should return true when isEmpty is called on an empty stack', () => {
        const actual = SUT.isEmpty();
        const expected = true;
        expect(actual).toEqual(expected);
    });

    it('should return false when isEmpty is called on a non-empty stack', () => {
        SUT.push(1);
        const actual = SUT.isEmpty();
        const expected = false;
        expect(actual).toEqual(expected);
    });
 })