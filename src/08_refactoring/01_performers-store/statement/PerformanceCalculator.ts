import { EnrichedPerformance, Play, PlayTypeMapper } from "../types";
import { playFor } from "./createStatemenetData";

class PerformanceCalculator {
  performance: EnrichedPerformance;
  play: Play;

  constructor(aPerformance: EnrichedPerformance, aPlay: Play) {
    this.performance = aPerformance;
    this.play = aPlay;
  }

  playTypeMapper: PlayTypeMapper = {
    tragedy: (aPerformance: EnrichedPerformance) => {
      let result = 40000;
      const performanceAudience = aPerformance.audience;

      if (performanceAudience > 30) {
        result += 1000 * (performanceAudience - 30);
      }

      return result;
    },
    comedy: (aPerformance: EnrichedPerformance) => {
      let result = 30000;
      const performanceAudience = aPerformance.audience;

      if (performanceAudience > 20) {
        result += 10000 + 500 * (performanceAudience - 20);
      }

      result += 300 * performanceAudience;

      return result;
    },
  };

  get amount(): number {
    let result = 0;

    if (playFor(this.performance) === undefined) {
      throw new Error(`unknown type: ${this.play.type}`);
    } else {
      result = this.playTypeMapper[this.play.type](this.performance);
    }

    return result;
  }

  get volumeCredits(): number {
    let result = 0;
    const performanceAudience = this.performance.audience;

    result += Math.max(performanceAudience - 30, 0);

    if ("comedy" === this.play.type) {
      result += Math.floor(performanceAudience / 5);
    }

    return result;
  }
}

export default PerformanceCalculator;
