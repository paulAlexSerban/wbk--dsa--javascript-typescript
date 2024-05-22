import { BrowserHistory, BrowserHistoryFastest } from "./1472_design-browser-history";

describe("BrowserHistory", () => {
  let SUT = new BrowserHistory("a");

  beforeEach(() => {
    SUT = new BrowserHistory("a");
  });

  // GOOD WEATHER TESTS
  it("should visit a page", () => {
    SUT.visit("b");
    expect(SUT.back(1)).toBe("a");
    expect(SUT.forward(1)).toBe("b");
  });

  it("should visit multiple pages", () => {
    SUT.visit("b");
    SUT.visit("c");
    expect(SUT.back(2)).toBe("a");
    expect(SUT.forward(1)).toBe("b");
  });

  it("should visit multiple pages and go back and forward", () => {
    SUT.visit("b");
    SUT.visit("c");
    SUT.visit("d");
    expect(SUT.back(2)).toBe("b");
    expect(SUT.forward(1)).toBe("c");
  });

  // BAD WEATHER TESTS
  it("should not go back if there is no history", () => {
    expect(SUT.back(1)).toBe("a");
  });

  it("should not go forward if there is no history", () => {
    expect(SUT.forward(1)).toBe("a");
  });

  it("should not go back if there is not enough history", () => {
    SUT.visit("b");
    expect(SUT.back(2)).toBe("a");
  });

  it("should not go forward if there is not enough history", () => {
    SUT.visit("b");
    expect(SUT.forward(2)).toBe("b");
  });

  it("should not go back if there is not enough history", () => {
    SUT.visit("b");
    SUT.visit("c");
    expect(SUT.back(3)).toBe("a");
  });

  it("should not go forward if there is not enough history", () => {
    SUT.visit("b");
    SUT.visit("c");
    expect(SUT.forward(3)).toBe("c");
  });

  // LEETCODE TEST CASES

  /**
   * ["BrowserHistory","visit","visit","visit","back","back","forward","visit","forward","back","back"]
   * [["leetcode.com"],["google.com"],["facebook.com"],["youtube.com"],[1],[1],[1],["linkedin.com"],[2],[2],[7]]
   */

  it("should pass LeetCode test case 1", () => {
    SUT = new BrowserHistory("leetcode.com");
    SUT.visit("google.com");
    SUT.visit("facebook.com");
    SUT.visit("youtube.com");
    expect(SUT.back(1)).toBe("facebook.com");
    expect(SUT.back(1)).toBe("google.com");
    expect(SUT.forward(1)).toBe("facebook.com");
    SUT.visit("linkedin.com");
    expect(SUT.forward(2)).toBe("linkedin.com");
    expect(SUT.back(2)).toBe("google.com");
  });

  /**
   * ["BrowserHistory","visit","visit","visit","back","back","forward","visit","forward","back","back"]
   * [["leetcode.com"],["google.com"],["facebook.com"],["youtube.com"],[1],[1],[1],["linkedin.com"],[2],[2],[7]]
   */

  it("should pass LeetCode test case 2", () => {
    SUT = new BrowserHistory("leetcode.com");
    SUT.visit("google.com");
    SUT.visit("facebook.com");
    SUT.visit("youtube.com");
    expect(SUT.back(1)).toBe("facebook.com");
    expect(SUT.back(1)).toBe("google.com");
    expect(SUT.forward(1)).toBe("facebook.com");
    SUT.visit("linkedin.com");
    expect(SUT.forward(2)).toBe("linkedin.com");
    expect(SUT.back(7)).toBe("leetcode.com");
  });
});

describe("BrowserHistoryFastest", () => {
    let SUT = new BrowserHistoryFastest("a");
  
    beforeEach(() => {
      SUT = new BrowserHistoryFastest("a");
    });
  
    // GOOD WEATHER TESTS
    it("should visit a page", () => {
      SUT.visit("b");
      expect(SUT.back(1)).toBe("a");
      expect(SUT.forward(1)).toBe("b");
    });
  
    it("should visit multiple pages", () => {
      SUT.visit("b");
      SUT.visit("c");
      expect(SUT.back(2)).toBe("a");
      expect(SUT.forward(1)).toBe("b");
    });
  
    it("should visit multiple pages and go back and forward", () => {
      SUT.visit("b");
      SUT.visit("c");
      SUT.visit("d");
      expect(SUT.back(2)).toBe("b");
      expect(SUT.forward(1)).toBe("c");
    });
  
    // BAD WEATHER TESTS
    it("should not go back if there is no history", () => {
      expect(SUT.back(1)).toBe("a");
    });
  
    it("should not go forward if there is no history", () => {
      expect(SUT.forward(1)).toBe("a");
    });
  
    it("should not go back if there is not enough history", () => {
      SUT.visit("b");
      expect(SUT.back(2)).toBe("a");
    });
  
    it("should not go forward if there is not enough history", () => {
      SUT.visit("b");
      expect(SUT.forward(2)).toBe("b");
    });
  
    it("should not go back if there is not enough history", () => {
      SUT.visit("b");
      SUT.visit("c");
      expect(SUT.back(3)).toBe("a");
    });
  
    it("should not go forward if there is not enough history", () => {
      SUT.visit("b");
      SUT.visit("c");
      expect(SUT.forward(3)).toBe("c");
    });
  
    // LEETCODE TEST CASES
  
    /**
     * ["BrowserHistoryFastest","visit","visit","visit","back","back","forward","visit","forward","back","back"]
     * [["leetcode.com"],["google.com"],["facebook.com"],["youtube.com"],[1],[1],[1],["linkedin.com"],[2],[2],[7]]
     */
  
    it("should pass LeetCode test case 1", () => {
      SUT = new BrowserHistoryFastest("leetcode.com");
      SUT.visit("google.com");
      SUT.visit("facebook.com");
      SUT.visit("youtube.com");
      expect(SUT.back(1)).toBe("facebook.com");
      expect(SUT.back(1)).toBe("google.com");
      expect(SUT.forward(1)).toBe("facebook.com");
      SUT.visit("linkedin.com");
      expect(SUT.forward(2)).toBe("linkedin.com");
      expect(SUT.back(2)).toBe("google.com");
    });
  
    /**
     * ["BrowserHistoryFastest","visit","visit","visit","back","back","forward","visit","forward","back","back"]
     * [["leetcode.com"],["google.com"],["facebook.com"],["youtube.com"],[1],[1],[1],["linkedin.com"],[2],[2],[7]]
     */
  
    it("should pass LeetCode test case 2", () => {
      SUT = new BrowserHistoryFastest("leetcode.com");
      SUT.visit("google.com");
      SUT.visit("facebook.com");
      SUT.visit("youtube.com");
      expect(SUT.back(1)).toBe("facebook.com");
      expect(SUT.back(1)).toBe("google.com");
      expect(SUT.forward(1)).toBe("facebook.com");
      SUT.visit("linkedin.com");
      expect(SUT.forward(2)).toBe("linkedin.com");
      expect(SUT.back(7)).toBe("leetcode.com");
    });
  });