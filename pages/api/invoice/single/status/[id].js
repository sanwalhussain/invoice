import { markPaid } from "@/controllers/invoice/invoiceController";

export default async function handler(req, res) {
  markPaid(req, res);
}
