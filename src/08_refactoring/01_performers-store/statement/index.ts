import type { Invoice, Plays, StatementData } from "../types";
import { renderPlainText, enrichPerformance, totalAmount, totalVolumeCredits } from "./utils.statement";


const statement = (invoice: Invoice, plays: Plays): string => {
  const statementData: StatementData = {} as StatementData;
  statementData.customer = invoice.customer;
  statementData.performances = invoice.performances.map((performance) => enrichPerformance(performance, plays));
  statementData.totalAmount = totalAmount(statementData);
  statementData.totalVolumeCredits = totalVolumeCredits(statementData);

  return renderPlainText(statementData);
};

export default statement;
