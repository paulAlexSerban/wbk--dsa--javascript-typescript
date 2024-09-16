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
}

type PlayTypeMapper = {
  [key: string]: (aPerformance: EnrichedPerformance) => number;
};



type StatementData = {
  customer: string;
  performances: EnrichedPerformance[];
};



export type {
  Performance,
  Invoice,
  Play,
  Plays,
  Statement,
  PlayTypeMapper,
  StatementData,
  EnrichedPerformance
};
