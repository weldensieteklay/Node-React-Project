const express = require("express");
const authController = require("../controller/controller");
const product = require("../controller/product");

const router = express.Router();

//user routes
router.post("/users/signin", authController.signIn);
router.post("/users/signup", authController.signUp);

//product routes
router.post("/products", product.createProduct);
router.get("/products", product.getAllProducts);
router.put("/products/:id", product.updateProductById);
router.delete("/products/:id", product.deleteProductById);

module.exports = router;
