import { INode } from "../02_linked-lists/_node";

import {
  SinglyLinkedListStack,
  type ISinglyLinkedListStack,
} from "./_singly-linked-list-stack";

describe("SinglyLinkedListStack", () => {
  let SUT: ISinglyLinkedListStack;

  beforeEach(() => {
    SUT = new SinglyLinkedListStack();
  });

  // bad weather tests
  it("should return undefined when pop is called on an empty stack", () => {
    const actual = SUT.pop();
    const expected = undefined;
    expect(actual).toEqual(expected);
  });

  // good weather tests
  it("should return true when isEmpty is called on an empty stack", () => {
    const actual = SUT.isEmpty();
    const expected = true;
    expect(actual).toEqual(expected);
  });

  it("should return false when isEmpty is called on a non-empty stack", () => {
    SUT.push(1);
    const actual = SUT.isEmpty();
    const expected = false;
    expect(actual).toEqual(expected);
  });

  it("should return the correct value when pop is called on a stack with one element", () => {
    SUT.push(1);
    const actual = SUT.pop();
    const expected: INode = { next: null, value: 1 };
    expect(actual).toEqual(expected);
  });

  it("should return the correct value when pop is called on a stack with two elements", () => {
    SUT.push(1);
    SUT.push(2);
    const actual = SUT.pop();
    const expected: INode = {
      next: { next: null, value: 1 },
      value: 2,
    };
    expect(actual).toEqual(expected);
  });
});
