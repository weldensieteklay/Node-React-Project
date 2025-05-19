const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
<<<<<<< HEAD
  category: { type: String, required: true },
  price: { type: Number, required: true },
  seller: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Seller",
    required: true,
  }, // Reference to Seller
=======
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
  email: { type: String, required: true },
>>>>>>> 1bbe259aa0fc66749efa6aeac34c899b4415f679
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
