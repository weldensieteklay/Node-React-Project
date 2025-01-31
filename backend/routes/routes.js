const express = require("express");
const { signUp, signIn } = require("../controller/controller");
const product = require("../controller/product");
const {
  processPayment,
  getOrderByUser,
  getAllOrders,
} = require("../controller/cartController");
const router = express.Router();

//user routes
router.post("/users/signin", signIn);
router.post("/users/signup", signUp);

//product routes
router.post("/products", product.createProduct);
router.get("/products", product.getAllProducts);
router.put("/products/:id", product.updateProductById);
router.delete("/products/:id", product.deleteProductById);

router.get("/orders", getAllOrders);
router.get("/orders/:userId", getOrderByUser);
router.post("/process-payment", processPayment);
module.exports = router;
