import { createInvoice } from "@/controllers/invoice/invoiceController";

export default async function handler(req, res) {
  createInvoice(req, res);
}
