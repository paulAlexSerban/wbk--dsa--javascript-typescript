import type { Invoice, Plays } from "../types";

import createStatementData from "./createStatemenetData";
import renderPlainText from "./renderPlainText";
import renderHtml from "./renderHtml";

export const statement = (invoice: Invoice, plays: Plays): string => {
  return renderPlainText(createStatementData(invoice, plays));
};

export const htmlStatement = (invoice: Invoice, plays: Plays): string => {
  return renderHtml(createStatementData(invoice, plays));
};
