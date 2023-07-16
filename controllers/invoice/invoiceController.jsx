import dbConnect from "@/config/dbConnect";
import Invoice from "@/models/invoice";

// create invoice
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

  const requiredFields = [
    "description",
    "clientName",
    "clientEmail",
    "status",
    "senderAddress.street",
    "senderAddress.city",
    "senderAddress.postCode",
    "senderAddress.country",
    "clientAddress.street",
    "clientAddress.city",
    "clientAddress.postCode",
    "clientAddress.country",
    "items",
    "total",
    "paymentDue",
  ];

  const hasAllFields = requiredFields.every((field) =>
    field.split(".").reduce((prev, curr) => prev && prev[curr], req.body)
  );

  if (!hasAllFields) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const invoice = await Invoice.create({
    user,
    description,
    dueDate,
    clientName,
    clientEmail,
    status,
    senderAddress,
    clientAddress,
    items,
    total,
  });

  res.status(200).json(invoice);
};

// get all invoices
export const getInvoices = async (req, res) => {
  dbConnect();

  const { user } = req.query;

  const invoice = await Invoice.find({ user });

  res.status(200).json(invoice);
};

// get single invoice
export const getSingleInvoice = async (req, res) => {
  dbConnect();

  const { id } = req.query;

  const invoice = await Invoice.findById(id);

  res.status(200).json(invoice);
};

// update invoice
export const updateInvoice = async (req, res) => {
  dbConnect();

  const { id, user } = req.query;

  const invoice = await Invoice.findById(id);

  if (!invoice) {
    return res.status(404).json({ message: "Invoice not found" });
  }

  // Check for user
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  // Make sure the logged in user matches the invoice user
  if (invoice.user.toString() !== user) {
    return res.status(401).json({ message: "User not authorized" });
  }

  const updatedInvoice = await Invoice.findByIdAndUpdate(id, req.body, {
    new: true,
  });

  res.status(200).json(updatedInvoice);
};

export const markPaid = async (req, res) => {
  dbConnect();

  const { id, user } = req.query;

  const { status } = req.body;

  const invoice = await Invoice.findById(id);

  if (!invoice) {
    return res.status(404).json({ message: "Invoice not found" });
  }

  // Check for user
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  // Make sure the logged in user matches the invoice user
  if (invoice.user.toString() !== user) {
    return res.status(401).json({ message: "User not authorized" });
  }

  const updatedInvoice = await Invoice.findByIdAndUpdate(
    id,
    { status },
    {
      new: true,
    }
  );

  res.status(200).json(updatedInvoice);
};
