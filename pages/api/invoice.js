import dbConnect from "@/config/dbConnect";
import Invoice from "@/models/invoice";
export default async function handler(req, res) {
  if (req.method === "POST") {
    dbConnect();

    const invoice = await Invoice.create({
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
      items: [
        {
          name: req.body.items[0].name,
          quantity: req.body.items[0].quantity,
          price: req.body.items[0].price,
          total: req.body.items[0].total,
        },
      ],
      total: req.body.total,
    });
    res.status(201).json(invoice);
  }

  if (req.method === "GET") {
    dbConnect();

    const invoices = await Invoice.find({ user: req.body.user });

    res.json(invoices);
  }
}
