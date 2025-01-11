const Product = require("../model/productModel");

// Create a new product
const createProduct = async (req, res) => {
  try {
    const { product_name, company_email, description, price, category, stock } =
      req.body;
    const product = new Product({
      product_name,
      company_email,
      description,
      price,
      category,
      stock,
    });
    await product.save();
    res.status(201).json({ message: "Product created successfully", product });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating product", error: error.message });
  }
};

// Get all products
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching products", error: error.message });
  }
};

// Update a product by ID
const updateProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    const product = await Product.findByIdAndUpdate(id, updates, { new: true });
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Product updated successfully", product });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating product", error: error.message });
  }
};

// Delete a product by ID
const deleteProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting product", error: error.message });
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  updateProductById,
  deleteProductById,
};
