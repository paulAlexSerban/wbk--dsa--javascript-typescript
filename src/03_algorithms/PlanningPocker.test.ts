import { PlanningPoker, Developer, Estimate } from "./PlanningPocker";

describe("PlanningPoker test suite", () => {
  let SUT: PlanningPoker;

  beforeEach(() => {
    SUT = new PlanningPoker();
  });

  // BAD WEATHER TESTS
  test("should reject null input", () => {
    const actual = () => SUT.identifyExtremes(null);
    expect(actual).toThrow("No estimates provided");
  });

  test("should reject empty input", () => {
    const actual = () => SUT.identifyExtremes([]);
    expect(actual).toThrow("There has to be at least one estimate provided");
  });

  test("should reject single input", () => {
    const developer = new Developer("John");
    const estimate = new Estimate(1, developer);
    const actual = () => SUT.identifyExtremes([estimate]);
    expect(actual).toThrow("There has to be more than one estimate provided");
  });

  // GOOD WEATHER TESTS
  test("should identify the lower and highest estimates", () => {
    const developer = new Developer("John");
    const developer2 = new Developer("Jane");
    const estimate = new Estimate(1, developer);
    const estimate2 = new Estimate(2, developer2);
    const actual = SUT.identifyExtremes([estimate, estimate2]);
    expect(actual).toEqual([developer, developer2]);
  });

  test("should identify the lower and highest estmates from many estimates", () => {
    const developer = new Developer("John");
    const developer2 = new Developer("Jane");
    const developer3 = new Developer("Doe");
    const developer4 = new Developer("Smith");
    const estimate = new Estimate(1, developer);
    const estimate2 = new Estimate(2, developer2);
    const estimate3 = new Estimate(3, developer3);
    const estimate4 = new Estimate(4, developer4);
    const actual = SUT.identifyExtremes([
      estimate,
      estimate2,
      estimate3,
      estimate4,
    ]);
    expect(actual).toEqual([developer, developer4]);
  });
});
