import { StatementData } from "../../types";

const totalVolumeCredits = (data: StatementData): number => {
  return data.performances.reduce(
    (total, perf) => total + perf.volumeCredits,
    0
  );
};

export default totalVolumeCredits;