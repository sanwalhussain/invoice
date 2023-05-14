import { getInvoices } from "@/controllers/invoice/invoiceController";

export default async function handler(req, res) {
  getInvoices(req, res);
}
