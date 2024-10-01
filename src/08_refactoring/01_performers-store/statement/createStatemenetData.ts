import type {
  Plays,
  Play,
  StatementData,
  EnrichedPerformance,
  Invoice,
  PerformanceCalculatorType,
  PlayTypeMapper,
} from "../types";
import { TragedyCalculator, ComedyCalculator } from "./PerformanceCalculator";
import { playFor, totalVolumeCredits, totalAmount } from "./utils/index";

const playTypeMapper: PlayTypeMapper = {
  tragedy: (aPerformance: EnrichedPerformance, aPlay: Play) =>
    new TragedyCalculator(aPerformance, aPlay),
  comedy: (aPerformance: EnrichedPerformance, aPlay: Play) =>
    new ComedyCalculator(aPerformance, aPlay),
};

const createPerformanceCalculator = (
  aPerformance: EnrichedPerformance,
  aPlay: Play
): PerformanceCalculatorType => {
  if (playTypeMapper[aPlay.type] === undefined) {
    throw new Error(`unknown type: ${aPlay.type}`);
  } else {
    return playTypeMapper[aPlay.type](aPerformance, aPlay);
  }
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

export default createStatementData;
