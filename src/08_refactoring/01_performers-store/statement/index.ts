import type { Invoice, Plays } from "../types";
import amountFor from "./_amountFor";
import playFor from "./_playFor";

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
    volumeCredits += Math.max(perf.audience - 30, 0);
    // add extra credit for every ten comedy attendees
    if ("comedy" === playFor(perf, plays).type) {
      volumeCredits += Math.floor(perf.audience / 5);
    }

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
