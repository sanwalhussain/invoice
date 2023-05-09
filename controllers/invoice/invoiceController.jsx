import dbConnect from "@/config/dbConnect";
import Invoice from "@/models/invoice";

export const createInvoice = async (req, res) => {
  dbConnect();

  const {
    user,
    description,
    clientName,
    clientEmail,
    status,
    clientAddress,
    senderAddress,
    paymentDue,
    items,
    total,
  } = req.body;

  if (
    !description ||
    !clientName ||
    !clientEmail ||
    !status ||
    !senderAddress ||
    !clientAddress ||
    !items ||
    !total ||
    !paymentDue
  ) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const invoice = await Invoice.create({
    user,
    description,
    paymentDue,
    clientName,
    clientEmail,
    status,
    senderAddress,
    clientAddress,
    items,
    total,
  });

  return res.status(200).json(invoice);
};
