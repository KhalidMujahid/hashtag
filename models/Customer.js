const { model, Schema } = require("mongoose");

const CustomerSchema = new Schema(
  {
    fname: {
      type: String,
      required: true,
      trim: true,
    },
    lname: {
      type: String,
      required: true,
      trim: true,
    },
    whatsapp_number: {
      type: Number,
      required: true,
      trim: true,
      unique: true,
    },
    skills: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    twitter: {
      type: String,
      trim: true,
    },
    facebook: {
      type: String,
      trim: true,
    },
    profile: {
      type: String,
      trim: true,
      default: "default.png",
    },
    password: {
      type: String,
      required: true,
      trim: true,
      select: false,
    },
  },
  { timestamps: true }
);

const Customer = model("Customer", CustomerSchema);

module.exports = Customer;
