import type { Performance, Plays, PlayTypeMapper, Play } from "../types";
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

export { amountFor, playFor, volumeCreditsFor, usd };
