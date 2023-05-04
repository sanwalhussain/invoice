import mongoose from "mongoose";

const clientSchema = mongoose.Schema({
  street: {
    type: String,
    required: [true, "Please add street address"],
  },
  city: {
    type: String,
    required: [true, "Please add city"],
  },
  postcode: {
    type: String,
    required: [true, "Please add a postcode"],
  },
  country: {
    type: String,
    required: [true, "Please add a country"],
  },
});

const invoiceSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    paymentDue: {
      type: Date,
      default: Date.now(),
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
    senderAddress: { clientSchema },
    items: [
      {
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
      },
    ],
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
