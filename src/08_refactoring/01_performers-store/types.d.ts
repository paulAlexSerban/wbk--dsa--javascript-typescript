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

export type { Performance, Invoice, Play, Plays, Statement };
