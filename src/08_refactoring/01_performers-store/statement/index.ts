import type { Invoice, Plays, StatementData } from "../types";
import { renderPlainText, enrichPerformance } from "./utils.statement";


const statement = (invoice: Invoice, plays: Plays): string => {
  const statementData: StatementData = {} as StatementData;
  statementData.customer = invoice.customer;
  statementData.performances = invoice.performances.map((performance) => enrichPerformance(performance, plays));

  return renderPlainText(statementData);
};

export default statement;
