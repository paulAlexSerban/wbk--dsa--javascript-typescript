export function calPoints(operations: string[]): number {
  const scores: number[] = [];

  const operationsFunctions: { [key: string]: (op?: string) => void } = {
    C: () => {
      scores.pop();
    },
    D: () => {
      scores.push(scores[scores.length - 1] * 2);
    },
    "+": () => {
      scores.push(scores[scores.length - 1] + scores[scores.length - 2]);
    }
  };

  for (const op of operations) {
    const operationFunction =
      operationsFunctions[op] || ((op: string) => scores.push(parseInt(op) || 0));
    operationFunction(op);
  }

  return scores.reduce((total, score) => total + score, 0);
}


