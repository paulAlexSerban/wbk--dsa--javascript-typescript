import plays from "./data/plays.json";
import invoices from "./data/invoices.json";
import statement from "./statement";

describe("statement", () => {
  it("should print statement for BigCo with multiple performances", () => {
    const invoice = invoices[0]; // First invoice from the mock data
    const playsData = plays; // Use mock plays data

    const actual = statement(invoice, playsData); // Call the function
    const expected = `Statement for BigCo
  Hamlet: $650.00 (55 seats)
  As You Like It: $580.00 (35 seats)
  Othello: $500.00 (40 seats)
Amount owed is $1,730.00
You earned 47 credits\n`;

    expect(actual).toBe(expected); // Assert expected output
  });

  it("should handle no performances", () => {
    const invoice = { customer: "BigCo", performances: [] }; // No performances
    const playsData = plays; // Use mock plays data

    const actual = statement(invoice, playsData); // Call the function
    const expected = `Statement for BigCo
Amount owed is $0.00
You earned 0 credits\n`;

    expect(actual).toBe(expected); // Assert expected output
  });

  it("should handle a performance with exactly 30 audience members for a tragedy", () => {
    const invoice = {
      customer: "BigCo",
      performances: [{ playID: "hamlet", audience: 30 }],
    }; // Exactly 30 audience members for a tragedy
    const playsData = plays; // Use mock plays data

    const actual = statement(invoice, playsData); // Call the function
    const expected = `Statement for BigCo
  Hamlet: $400.00 (30 seats)
Amount owed is $400.00
You earned 0 credits\n`;

    expect(actual).toBe(expected); // Assert expected output
  });

  it("should handle a performance with exactly 30 audience members for a comedy", () => {
    const invoice = {
      customer: "BigCo",
      performances: [{ playID: "as-like", audience: 30 }],
    }; // Exactly 30 audience members for a comedy
    const playsData = plays; // Use mock plays data

    const actual = statement(invoice, playsData); // Call the function
    const expected = `Statement for BigCo
  As You Like It: $540.00 (30 seats)
Amount owed is $540.00
You earned 6 credits\n`;

    expect(actual).toBe(expected); // Assert expected output
  });

  it("should throw an error for an unknown play type", () => {
    const invoice = {
      customer: "BigCo",
      performances: [{ playID: "unknown-play", audience: 30 }],
    }; // Invalid play ID

    const playsData = {
      "unknown-play": { name: "Unknown Play", type: "mystery" },
    }; // Unrecognized play type

    expect(() => statement(invoice, playsData)).toThrowError(
      "unknown type: mystery"
    ); // Assert that it throws the correct error
  });

  it("should handle a performance with more than 30 audience members for a tragedy", () => {
    const invoice = {
      customer: "BigCo",
      performances: [{ playID: "hamlet", audience: 40 }],
    }; // More than 30 audience members for a tragedy
    const playsData = plays; // Use mock plays data

    const actual = statement(invoice, playsData); // Call the function
    const expected = `Statement for BigCo
  Hamlet: $500.00 (40 seats)
Amount owed is $500.00
You earned 10 credits\n`;

    expect(actual).toBe(expected); // Assert expected output
  });

  it("should handle a performance with more than 30 audience members for a comedy", () => {
    const invoice = {
      customer: "BigCo",
      performances: [{ playID: "as-like", audience: 40 }],
    }; // More than 30 audience members for a comedy
    const playsData = plays; // Use mock plays data

    const actual = statement(invoice, playsData); // Call the function
    const expected = `Statement for BigCo
  As You Like It: $620.00 (40 seats)
Amount owed is $620.00
You earned 18 credits\n`;

    expect(actual).toBe(expected); // Assert expected output
  });

  it("should handle a performance with more than 20 audience members for a comedy", () => {
    const invoice = {
      customer: "BigCo",
      performances: [{ playID: "as-like", audience: 25 }],
    }; // More than 20 audience members for a comedy
    const playsData = plays; // Use mock plays data

    const actual = statement(invoice, playsData); // Call the function
    const expected = `Statement for BigCo
  As You Like It: $500.00 (25 seats)
Amount owed is $500.00
You earned 5 credits\n`;

    expect(actual).toBe(expected); // Assert expected output
  });
});
