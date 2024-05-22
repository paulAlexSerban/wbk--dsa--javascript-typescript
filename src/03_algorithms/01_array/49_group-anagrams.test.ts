import { groupAnagrams, groupAnagrams2 } from "./49_group-anagrams";
import { GroupAnagrams } from "./49_GroupAnagrams";

describe("groupAnagrams", () => {
  const SUT = groupAnagrams;
  // GOOD WEATHER TESTS
  it("should group anagrams together", () => {
    const actual = SUT(["eat", "tea", "tan", "ate", "nat", "bat"]);
    const expected = [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]];
    expect(actual).toEqual(expected);
  });

  it("should group anagrams together", () => {
    const actual = SUT([""]);
    const expected = [[""]];
    expect(actual).toEqual(expected);
  });

  it("should group anagrams together", () => {
    const actual = SUT(["a"]);
    const expected = [["a"]];
    expect(actual).toEqual(expected);
  });

  // BAD WEATHER TESTS
  it("should return empty array", () => {
    const actual = SUT([]);
    const expected = [];
    expect(actual).toEqual(expected);
  });
});

describe("groupAnagrams2", () => {
  const SUT = groupAnagrams2;
  // GOOD WEATHER TESTS
  it("should group anagrams together", () => {
    const actual = SUT(["eat", "tea", "tan", "ate", "nat", "bat"]);
    const expected = [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]];
    expect(actual).toEqual(expected);
  });

  it("should group anagrams together", () => {
    const actual = SUT([""]);
    const expected = [[""]];
    expect(actual).toEqual(expected);
  });

  it("should group anagrams together", () => {
    const actual = SUT(["a"]);
    const expected = [["a"]];
    expect(actual).toEqual(expected);
  });

  // BAD WEATHER TESTS
  it("should return empty array", () => {
    const actual = SUT([]);
    const expected = [];
    expect(actual).toEqual(expected);
  });
});

describe("GroupAnagrams", () => {
    const SUT = new GroupAnagrams();
    // GOOD WEATHER TESTS
    it("should group anagrams together", () => {
        const actual = SUT.groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
        const expected = [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]];
        expect(actual).toEqual(expected);
    });
    
    it("should group anagrams together", () => {
        const actual = SUT.groupAnagrams([""]);
        const expected = [[""]];
        expect(actual).toEqual(expected);
    });
    
    it("should group anagrams together", () => {
        const actual = SUT.groupAnagrams(["a"]);
        const expected = [["a"]];
        expect(actual).toEqual(expected);
    });
    
    // BAD WEATHER TESTS
    it("should return empty array", () => {
        const actual = SUT.groupAnagrams([]);
        const expected = [];
        expect(actual).toEqual(expected);
    });
})