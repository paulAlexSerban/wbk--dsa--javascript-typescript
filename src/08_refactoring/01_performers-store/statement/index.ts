import type { Invoice, Plays } from "../types";
import { amountFor, playFor, volumeCreditsFor, usd } from "./utils.statement";

const statement = (invoice: Invoice, plays: Plays): string => {
  let totalAmount = 0;
  let volumeCredits = 0;
  let results = `Statement for ${invoice.customer}\n`;

  for (let perf of invoice.performances) {
    // add volume credits
    volumeCredits += volumeCreditsFor(perf, plays);

    // print line for this order
    results += `  ${playFor(perf, plays).name}: ${usd(
      amountFor(perf, plays)
    )} (${perf.audience} seats)\n`;
    totalAmount += amountFor(perf, plays);
  }

  results += `Amount owed is ${usd(totalAmount)}\n`;
  results += `You earned ${volumeCredits} credits\n`;
  return results;
};

export default statement;
