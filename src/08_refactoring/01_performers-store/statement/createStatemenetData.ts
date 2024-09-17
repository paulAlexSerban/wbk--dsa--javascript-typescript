import type {
  Performance,
  Plays,
  PlayTypeMapper,
  Play,
  StatementData,
  EnrichedPerformance,
  Invoice,
} from "../types";

import playsJson from "../data/plays.json";

const playFor = (aPerformance: Performance, plays: Plays = playsJson): Play => {
  return plays[aPerformance.playID];
};

const playTypeMapper: PlayTypeMapper = {
  tragedy: (aPerformance: EnrichedPerformance) => {
    let result = 40000;
    const performanceAudience = aPerformance.audience;
    const isAudienceGreaterThan30 = performanceAudience > 30;

    if (isAudienceGreaterThan30) {
      result += 1000 * (performanceAudience - 30);
    }

    return result;
  },
  comedy: (aPerformance: EnrichedPerformance) => {
    let result = 30000;
    const performanceAudience = aPerformance.audience;
    const isAudienceGreaterThan20 = performanceAudience > 20;

    if (isAudienceGreaterThan20) {
      result += 10000 + 500 * (performanceAudience - 20);
    }

    result += 300 * performanceAudience;
  
    return result;
  },
};

const amountFor = (aPerformance: EnrichedPerformance): number => {
  let result = 0;
  const playType = aPerformance.play.type;

  if (playFor(aPerformance) === undefined) {
    throw new Error(`unknown type: ${playType}`);
  } else {
    result = playTypeMapper[playType](aPerformance);
  }

  return result;
};

const volumeCreditsFor = (aPerformance: EnrichedPerformance): number => {
  let result = 0;
  const playType = aPerformance.play.type;
  const performanceAudience = aPerformance.audience;

  result += Math.max(performanceAudience - 30, 0);

  if ("comedy" === playType) {
    result += Math.floor(performanceAudience / 5);
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
  createStatementData,
};
