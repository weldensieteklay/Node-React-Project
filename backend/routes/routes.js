const express = require("express");
<<<<<<< HEAD
const authController = require("../controller/userController");
const productController = require("../controller/productController");
=======
const authController = require("../controller/controller");
const product = require("../controller/product");
>>>>>>> 1bbe259aa0fc66749efa6aeac34c899b4415f679

const router = express.Router();

//user routes
<<<<<<< HEAD
router.post("/signin", authController.signIn);
router.post("/signup", authController.signUp);

// product routes
router.post("/create", productController.createProduct);
router.get("/getAll/products", productController.getAllProducts);
router.get("/products/:id", productController.getProductById);
router.put("/update/products/:id", productController.updateProductById);
router.delete("/products/:id", productController.deleteProductById);
=======
router.post("/users/signin", authController.signIn);
router.post("/users/signup", authController.signUp);

//product routes
router.post("/products", product.createProduct);
router.get("/products", product.getAllProducts);
router.put("/products/:id", product.updateProductById);
router.delete("/products/:id", product.deleteProductById);

>>>>>>> 1bbe259aa0fc66749efa6aeac34c899b4415f679
module.exports = router;
