const express = require("express");
const authController = require("../controller/userController");
const productController = require("../controller/productController");

const router = express.Router();

//user routes
router.post("/signin", authController.signIn);
router.post("/signup", authController.signUp);

// product routes
router.post("/create", productController.createProduct);
router.get("/getAll/products", productController.getAllProducts);
router.get("/products/:id", productController.getProductById);
router.put("/update/products/:id", productController.updateProductById);
router.delete("/products/:id", productController.deleteProductById);
module.exports = router;
