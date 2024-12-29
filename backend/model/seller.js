const mongoose = require("mongoose");

const sellerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String },
});

const Seller = mongoose.model("Seller", sellerSchema);

module.exports = Seller;
