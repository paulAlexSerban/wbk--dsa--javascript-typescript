import type { Invoice, Plays } from "../types";
import { amountFor, playFor, volumeCreditsFor } from "./utils.statement";

const statement = (invoice: Invoice, plays: Plays): string => {
  let totalAmount = 0;
  let volumeCredits = 0;
  let results = `Statement for ${invoice.customer}\n`;

  const format = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format;

  for (let perf of invoice.performances) {
    // add volume credits
    volumeCredits += volumeCreditsFor(perf, plays);

    // print line for this order
    results += `  ${playFor(perf, plays).name}: ${format(
      amountFor(perf, plays) / 100
    )} (${perf.audience} seats)\n`;
    totalAmount += amountFor(perf, plays);
  }

  results += `Amount owed is ${format(totalAmount / 100)}\n`;
  results += `You earned ${volumeCredits} credits\n`;
  return results;
};

export default statement;
