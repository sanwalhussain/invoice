import { createInvoice } from "@/controllers/invoice/invoiceController";

export default async function handler(req, res) {
  if (req.method === "POST") {
    createInvoice(req, res);
  }
}
