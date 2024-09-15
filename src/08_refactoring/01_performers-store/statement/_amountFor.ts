import type { Performance, Plays, PlayTypeMapper } from "../types";
import playFor from "./_playFor";

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

function amountFor(aPerformance: Performance, plays: Plays): number {
  let result = 0;

  if (playFor(aPerformance) === undefined) {
    throw new Error(`unknown type: ${playFor(aPerformance, plays).type}`);
  } else {
    result = playTypeMapper[playFor(aPerformance, plays).type](aPerformance);
  }
  return result;
}

export default amountFor;
