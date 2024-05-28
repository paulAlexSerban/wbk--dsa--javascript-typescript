import { EncodeDecodeStrings } from "./271_encode-decode-strings";

describe("EncodeDecodeStrings", () => {
  let SUT: EncodeDecodeStrings;

  beforeEach(() => {
    SUT = new EncodeDecodeStrings();
  });

  // GOOD WEATHER TESTS
  it("should encode and decode strings correctly - ['abc', 'def']", () => {
    const actual = SUT.decode(SUT.encode(["abc", "def"]));
    const expected = ["abc", "def"];
    expect(actual).toEqual(expected);
  });

  it("should encode and decode strings correctly - ['neet', 'code', 'love', 'you']", () => {
    const actual = SUT.decode(SUT.encode(['neet', 'code', 'love', 'you']));
    const expected = ["neet", "code", "love", "you"];
    expect(actual).toEqual(expected);
  });

  it("should encode and decode strings correctly - ['we', 'say', ':', 'yes']", () => {
    const actual = SUT.decode(SUT.encode(['we', 'say', ':', 'yes']));
    const expected = ["we", "say", ":", "yes"];
    expect(actual).toEqual(expected);
  });

    // RAINY DAY TESTS
    it("should encode and decode strings correctly - ['']", () => {
        const actual = SUT.decode(SUT.encode(['']));
        const expected = [""];
        expect(actual).toEqual(expected);
    });
});
