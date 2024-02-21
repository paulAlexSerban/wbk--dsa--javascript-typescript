import { majorityElementV1, majorityElementV2, majorityElementV3, majorityElementV4, majorityElementV5 } from './169_majority-element';

describe('majorityElementV1', () => {
    it('returns the majority element of an array', () => {
        expect(majorityElementV1([3, 2, 3])).toBe(3);
        expect(majorityElementV1([2, 2, 1, 1, 1, 2, 2])).toBe(2);
    });

    it('finds the majority element when there is a clear majority', () => {
        expect(majorityElementV1([3, 3, 4, 2, 4, 4, 2, 4, 4])).toBe(4);
        expect(majorityElementV1([1, 2, 3, 1, 1])).toBe(1);
    });

    it('returns the last element when all elements are unique', () => {
        expect(majorityElementV1([1, 2, 3])).toBe(3);
    });

    it('handles an array with a single element', () => {
        expect(majorityElementV1([1])).toBe(1);
    });

    it('finds the majority element even when it is the minimum value', () => {
        expect(majorityElementV1([2, 2, 1, 1, 1, 2, 2])).toBe(2);
    });

    it('works with negative numbers and finds the majority element', () => {
        expect(majorityElementV1([-1, -1, -1, 2, 3, -1, -1])).toBe(-1);
    });
});

describe('majorityElementV2', () => {
    it('returns the majority element of an array', () => {
        expect(majorityElementV2([3, 2, 3])).toBe(3);
        expect(majorityElementV2([2, 2, 1, 1, 1, 2, 2])).toBe(2);
    });

    it('finds the majority element when there is a clear majority', () => {
        expect(majorityElementV2([3, 3, 4, 2, 4, 4, 2, 4, 4])).toBe(4);
        expect(majorityElementV2([1, 2, 3, 1, 1])).toBe(1);
    });

    it('returns the mid element when all elements are unique', () => {
        expect(majorityElementV2([1, 2, 3, 4, 5, 6, 7])).toBe(4);
    });

    it('handles an array with a single element', () => {
        expect(majorityElementV2([1])).toBe(1);
    });

    it('finds the majority element even when it is the minimum value', () => {
        expect(majorityElementV2([2, 2, 1, 1, 1, 2, 2])).toBe(2);
    });

    it('works with negative numbers and finds the majority element', () => {
        expect(majorityElementV2([-1, -1, -1, 2, 3, -1, -1])).toBe(-1);
    });
});

describe('majorityElementV3', () => {
    it('returns the majority element of an array', () => {
        expect(majorityElementV3([3, 2, 3])).toBe(3);
        expect(majorityElementV3([2, 2, 1, 1, 1, 2, 2])).toBe(2);
    });

    it('finds the majority element when there is a clear majority', () => {
        expect(majorityElementV3([3, 3, 4, 2, 4, 4, 2, 4, 4])).toBe(4);
        expect(majorityElementV3([1, 2, 3, 1, 1])).toBe(1);
    });

    it('returns -1 element when all elements are unique', () => {
        expect(majorityElementV3([1, 2, 3])).toBe(-1);
    });

    it('handles an array with a single element', () => {
        expect(majorityElementV3([1])).toBe(1);
    });

    it('finds the majority element even when it is the minimum value', () => {
        expect(majorityElementV3([2, 2, 1, 1, 1, 2, 2])).toBe(2);
    });

    it('works with negative numbers and finds the majority element', () => {
        expect(majorityElementV3([-1, -1, -1, 2, 3, -1, -1])).toBe(-1);
    });
});


describe('majorityElementV4', () => {
  it('returns the majority element of an array', () => {
      expect(majorityElementV4([3, 2, 3])).toBe(3);
      expect(majorityElementV4([2, 2, 1, 1, 1, 2, 2])).toBe(2);
  });

  it('finds the majority element when there is a clear majority', () => {
      expect(majorityElementV4([3, 3, 4, 2, 4, 4, 2, 4, 4])).toBe(4);
      expect(majorityElementV4([1, 2, 3, 1, 1])).toBe(1);
  });

  it('returns null when all elements are unique', () => {
      expect(majorityElementV4([1, 2, 3])).toBe(null);
  });

  it('handles an array with a single element', () => {
      expect(majorityElementV4([1])).toBe(1);
  });

  it('finds the majority element even when it is the minimum value', () => {
      expect(majorityElementV4([2, 2, 1, 1, 1, 2, 2])).toBe(2);
  });

  it('works with negative numbers and finds the majority element', () => {
      expect(majorityElementV4([-1, -1, -1, 2, 3, -1, -1])).toBe(-1);
  });
});

describe('majorityElementV5', () => {
  it('returns the majority element of an array', () => {
      expect(majorityElementV5([3, 2, 3])).toBe(3);
      expect(majorityElementV5([2, 2, 1, 1, 1, 2, 2])).toBe(2);
  });

  it('finds the majority element when there is a clear majority', () => {
      expect(majorityElementV5([3, 3, 4, 2, 4, 4, 2, 4, 4])).toBe(4);
      expect(majorityElementV5([1, 2, 3, 1, 1])).toBe(1);
  });

  it('returns last item when all elements are unique', () => {
      expect(majorityElementV5([1, 2, 3])).toBe(3);
  });

  it('handles an array with a single element', () => {
      expect(majorityElementV5([1])).toBe(1);
  });

  it('finds the majority element even when it is the minimum value', () => {
      expect(majorityElementV5([2, 2, 1, 1, 1, 2, 2])).toBe(2);
  });

  it('works with negative numbers and finds the majority element', () => {
      expect(majorityElementV5([-1, -1, -1, 2, 3, -1, -1])).toBe(-1);
  });
});