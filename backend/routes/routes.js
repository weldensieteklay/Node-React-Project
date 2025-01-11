const express = require("express");
const authController = require("../controller/controller");

const router = express.Router();

//user routes
router.post("/users/signin", authController.signIn);
router.post("/users/signup", authController.signUp);

//product routes
router.post("/products", productController.createProduct);
router.get("/products", productController.getAllProducts);
router.put("/products/:id", productController.updateProductById);
router.delete("/products/:id", productController.deleteProductById);

module.exports = router;
