import type { Invoice, Plays } from "../types";
import { renderPlainText, createStatementData } from "./utils.statement";

const statement = (invoice: Invoice, plays: Plays): string => {
  return renderPlainText(createStatementData(invoice, plays));
};

export default statement;
