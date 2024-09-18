import type {
  Performance,
  Plays,
  Play,
  StatementData,
  EnrichedPerformance,
  Invoice,
  PerformanceCalculatorType,
} from "../types";

import PerformanceCalculator from "./PerformanceCalculator";

import playsJson from "../data/plays.json";

const playFor = (aPerformance: Performance, plays: Plays = playsJson): Play => {
  return plays[aPerformance.playID];
};

// const amountFor = (aPerformance: EnrichedPerformance): number => {
//   return new PerformanceCalculator(
//     aPerformance,
//     playFor(aPerformance, playsJson)
//   ).amount;
// };

const totalVolumeCredits = (data: StatementData): number => {
  return data.performances.reduce(
    (total, perf) => total + perf.volumeCredits,
    0
  );
};

const totalAmount = (data: StatementData): number => {
  return data.performances.reduce((total, perf) => total + perf.amount, 0);
};

const createPerformanceCalculator = (
  aPerformance: EnrichedPerformance,
  aPlay: Play
): PerformanceCalculatorType => {
  return new PerformanceCalculator(aPerformance, aPlay);
};

const enrichPerformance = (
  aPerformance: EnrichedPerformance,
  plays: Plays
): EnrichedPerformance => {
  const calculator = createPerformanceCalculator(
    aPerformance,
    playFor(aPerformance, plays)
  );

  const result: EnrichedPerformance = Object.assign(
    {} as EnrichedPerformance,
    aPerformance
  );
  result.play = calculator.play;
  result.amount = calculator.amount;
  result.volumeCredits = calculator.volumeCredits;

  return result;
};

const createStatementData = (invoice: Invoice, plays: Plays): StatementData => {
  const result: StatementData = {} as StatementData;
  result.customer = invoice.customer;
  result.performances = invoice.performances.map((performance) =>
    enrichPerformance(performance as EnrichedPerformance, plays)
  );
  result.totalAmount = totalAmount(result);
  result.totalVolumeCredits = totalVolumeCredits(result);
  return result;
};

export {
  // amountFor,
  playFor,
  totalVolumeCredits,
  totalAmount,
  enrichPerformance,
  createStatementData,
};
