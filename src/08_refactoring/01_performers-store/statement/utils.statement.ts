import type { Performance, Plays, PlayTypeMapper, Play, Invoice } from "../types";
import playsJson from "../data/plays.json";

const playFor = (aPerformance: Performance, plays: Plays = playsJson): Play => {
  return plays[aPerformance.playID];
};

const playTypeMapper: PlayTypeMapper = {
  tragedy: (aPerformance: Performance) => {
    let result = 40000;
    if (aPerformance.audience > 30) {
      result += 1000 * (aPerformance.audience - 30);
    }
    return result;
  },
  comedy: (aPerformance: Performance) => {
    let result = 30000;
    if (aPerformance.audience > 20) {
      result += 10000 + 500 * (aPerformance.audience - 20);
    }
    result += 300 * aPerformance.audience;
    return result;
  },
};

const amountFor = (aPerformance: Performance, plays: Plays): number => {
  let result = 0;

  if (playFor(aPerformance) === undefined) {
    throw new Error(`unknown type: ${playFor(aPerformance, plays).type}`);
  } else {
    result = playTypeMapper[playFor(aPerformance, plays).type](aPerformance);
  }
  return result;
};

const volumeCreditsFor = (aPerformance: Performance, plays: Plays): number => {
  let result = 0;
  result += Math.max(aPerformance.audience - 30, 0);
  if ("comedy" === playFor(aPerformance, plays).type) {
    result += Math.floor(aPerformance.audience / 5);
  }
  return result;
};

const usd = (aNumber: number): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(aNumber / 100);
}

const totalVolumeCredits = (invoice: Invoice, plays: Plays): number => {
  let result = 0;
  for (let perf of invoice.performances) {
    result += volumeCreditsFor(perf, plays);
  }
  return result;
}

const totalAmount = (invoice: Invoice, plays: Plays): number => {
  let result = 0;
  for (let perf of invoice.performances) {
    result += amountFor(perf, plays);
  }
  return result;
}

const renderPlainText = (invoice: Invoice, plays: Plays): string => {
  let result = `Statement for ${invoice.customer}\n`;
  for (let perf of invoice.performances) {
    // print line for this order
    result += `  ${playFor(perf, plays).name}: ${usd(
      amountFor(perf, plays)
    )} (${perf.audience} seats)\n`;
  }

  result += `Amount owed is ${usd(totalAmount(invoice, plays))}\n`;
  result += `You earned ${totalVolumeCredits(invoice, plays)} credits\n`;
  return result;
}

export { amountFor, playFor, volumeCreditsFor, usd, totalVolumeCredits, totalAmount, renderPlainText };
