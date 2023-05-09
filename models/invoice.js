import mongoose from "mongoose";

const addressSchema = mongoose.Schema({
  street: {
    type: String,
    required: [true, "Please add street address"],
  },
  city: {
    type: String,
    required: [true, "Please add city"],
  },
  postCode: {
    type: String,
    required: [true, "Please add a postcode"],
  },
  country: {
    type: String,
    required: [true, "Please add a country"],
  },
});

const itemSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add a name"],
  },
  quantity: {
    type: Number,
    required: [true, "Please add a quantity"],
  },
  price: {
    type: Number,
    required: [true, "Please add a price"],
  },
  total: {
    type: Number,
    required: [true, "Please add total item amount"],
  },
});

const invoiceSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    paymentDue: {
      type: Date,
      required: [true, "Please add payment due date"],
    },
    description: {
      type: String,
      required: [true, "Please add description"],
    },
    paymentTerms: {
      type: Number,
      default: 1,
    },
    clientName: {
      type: String,
      required: [true, "Please add client name"],
    },
    clientEmail: {
      type: String,
      required: [true, "Please add client email"],
    },
    status: {
      type: String,
      required: [true, "Please add a status"],
    },
    senderAddress: {
      type: [addressSchema],
      required: [true, "Please add sender address"],
    },
    clientAddress: {
      type: [addressSchema],
      required: [true, "Please add client address"],
    },
    items: {
      type: [itemSchema],
      required: [true, "Please add at least one item"],
    },
    total: {
      type: Number,
      required: [true, "Please add total amount"],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Invoice ||
  mongoose.model("Invoice", invoiceSchema);
