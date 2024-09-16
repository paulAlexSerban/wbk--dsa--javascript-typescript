import type {
  Performance,
  Plays,
  PlayTypeMapper,
  Play,
  StatementData,
  EnrichedPerformance,
} from "../types";
import playsJson from "../data/plays.json";

const playFor = (aPerformance: Performance, plays: Plays = playsJson): Play => {
  return plays[aPerformance.playID];
};

const playTypeMapper: PlayTypeMapper = {
  tragedy: (aPerformance: EnrichedPerformance) => {
    let result = 40000;
    if (aPerformance.audience > 30) {
      result += 1000 * (aPerformance.audience - 30);
    }
    return result;
  },
  comedy: (aPerformance: EnrichedPerformance) => {
    let result = 30000;
    if (aPerformance.audience > 20) {
      result += 10000 + 500 * (aPerformance.audience - 20);
    }
    result += 300 * aPerformance.audience;
    return result;
  },
};

const amountFor = (aPerformance: EnrichedPerformance): number => {
  let result = 0;

  if (playFor(aPerformance) === undefined) {
    throw new Error(`unknown type: ${aPerformance.play.type}`);
  } else {
    result = playTypeMapper[aPerformance.play.type](aPerformance);
  }
  return result;
};

const volumeCreditsFor = (aPerformance: EnrichedPerformance): number => {
  let result = 0;
  result += Math.max(aPerformance.audience - 30, 0);
  if ("comedy" === aPerformance.play.type) {
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
};

const totalVolumeCredits = (data: StatementData): number => {
  let result = 0;
  for (let perf of data.performances) {
    result += volumeCreditsFor(perf);
  }
  return result;
};

const totalAmount = (data: StatementData): number => {
  let result = 0;
  for (let perf of data.performances) {
    result += perf.amount
  }
  return result;
};

const renderPlainText = (data: StatementData): string => {
  let result = `Statement for ${data.customer}\n`;
  for (let perf of data.performances) {
    // print line for this order
    result += `  ${perf.play.name}: ${usd(perf.amount)} (${
      perf.audience
    } seats)\n`;
  }

  result += `Amount owed is ${usd(totalAmount(data))}\n`;
  result += `You earned ${totalVolumeCredits(data)} credits\n`;
  return result;
};

const enrichPerformance = (
  aPerformance: Performance,
  plays: Plays
): EnrichedPerformance => {
  const result: EnrichedPerformance = Object.assign(
    {} as EnrichedPerformance,
    aPerformance
  );
  result.play = playFor(aPerformance, plays);
  result.amount = amountFor(result);
  return result;
};

export {
  amountFor,
  playFor,
  volumeCreditsFor,
  usd,
  totalVolumeCredits,
  totalAmount,
  renderPlainText,
  enrichPerformance,
};
