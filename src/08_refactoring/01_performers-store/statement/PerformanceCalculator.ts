import { EnrichedPerformance, Play, PerformanceCalculatorType } from "../types";

export class PerformanceCalculator implements PerformanceCalculatorType {
  performance: EnrichedPerformance;
  play: Play;

  constructor(aPerformance: EnrichedPerformance, aPlay: Play) {
    this.performance = aPerformance;
    this.play = aPlay;
  }

  get amount(): number {
    throw new Error("subclass responsibility");
  }

  get volumeCredits(): number {
    return Math.max(this.performance.audience - 30, 0);
  }
}

export class TragedyCalculator extends PerformanceCalculator {
  get amount(): number {
    let result = 40000;
    const performanceAudience = this.performance.audience;

    if (performanceAudience > 30) {
      result += 1000 * (performanceAudience - 30);
    }

    return result;
  }
}

export class ComedyCalculator extends PerformanceCalculator {
  get amount(): number {
    let result = 30000;
    const performanceAudience = this.performance.audience;

    if (performanceAudience > 20) {
      result += 10000 + 500 * (performanceAudience - 20);
    }

    result += 300 * performanceAudience;

    return result;
  }

  get volumeCredits(): number {
    return super.volumeCredits + Math.floor(this.performance.audience / 5);
  }
}
