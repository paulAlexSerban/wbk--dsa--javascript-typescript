import type {
  Performance,
  Plays,
  PlayTypeMapper,
  Play,
  StatementData,
  EnrichedPerformance,
  Invoice
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



const totalVolumeCredits = (data: StatementData): number => {
  return data.performances.reduce(
    (total, perf) => total + perf.volumeCredits,
    0
  );
};

const totalAmount = (data: StatementData): number => {
  return data.performances.reduce((total, perf) => total + perf.amount, 0);
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
  result.volumeCredits = volumeCreditsFor(result);

  return result;
};

const createStatementData = (invoice: Invoice, plays: Plays): StatementData => {
  const result: StatementData = {} as StatementData;
  result.customer = invoice.customer;
  result.performances = invoice.performances.map((performance) =>
    enrichPerformance(performance, plays)
  );
  result.totalAmount = totalAmount(result);
  result.totalVolumeCredits = totalVolumeCredits(result);
  return result;
};

export {
  amountFor,
  playFor,
  volumeCreditsFor,
  totalVolumeCredits,
  totalAmount,
  enrichPerformance,
  createStatementData
};
