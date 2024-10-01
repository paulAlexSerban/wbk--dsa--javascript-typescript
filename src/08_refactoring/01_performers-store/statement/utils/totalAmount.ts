import { StatementData } from '../../types';

const totalAmount = (data: StatementData): number => {
  return data.performances.reduce((total, perf) => total + perf.amount, 0);
};


export default totalAmount;