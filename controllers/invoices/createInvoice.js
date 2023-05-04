import dbConnect from "@/config/dbConnect";
import { useSession } from "next-auth/react";
import invoice from "@/models/invoice";
async function createInvoice(req, res) {
  dbConnect();

  const invoice = await invoice.create({
    user: req.body.user,
    paymentDue: req.body.paymentDue,
    description: req.body.description,
    paymentTerms: req.body.paymentTerms,
    clientName: req.body.clientName,
    clientEmail: req.body.clientEmail,
    status: req.body.status,
    senderAddress: {
      street: req.body.street,
      city: req.body.city,
      postcode: req.body.postcode,
      country: req.body.country,
      items: req.body.items,
      total: req.body.total,
    },
  });
  res.status(201).json(invoice);
}

export default createInvoice;
