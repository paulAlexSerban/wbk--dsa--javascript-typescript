import type { Invoice, Plays } from "../types";
import {
  renderPlainText
} from "./utils.statement";

const statement = (invoice: Invoice, plays: Plays): string => {
  return renderPlainText(invoice, plays);
};

export default statement;
