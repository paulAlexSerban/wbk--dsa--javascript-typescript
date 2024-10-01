type Performance = {
  playID: string;
  audience: number;
};

type Invoice = {
  customer: string;
  performances: Performance[];
};

type Play = {
  name: string;
  type: string;
};

type Plays = Record<string, Play>;

type Statement = (invoice: Invoice, plays: Plays) => string;

type EnrichedPerformance = Performance & {
  play: Play;
  amount: number;
  volumeCredits: number;
};

type StatementData = {
  customer: string;
  performances: EnrichedPerformance[];
  totalAmount: number;
  totalVolumeCredits: number;
};

type PerformanceCalculatorType = {
  play: Play;
  performance: EnrichedPerformance;
  amount: number;
  volumeCredits: number;
};

type PlayTypeMapper = {
  [key: string]: (
    aPerformance: EnrichedPerformance,
    aPlay: Play
  ) => PerformanceCalculatorType;
};

export type {
  Performance,
  Invoice,
  Play,
  Plays,
  Statement,
  PlayTypeMapper,
  StatementData,
  EnrichedPerformance,
  PerformanceCalculatorType,
};
