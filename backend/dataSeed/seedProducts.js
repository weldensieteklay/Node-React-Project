const connectDB = require("../config/DB.js");
const Product = require("../model/productModel");
const Seller = require("../model/seller.js");

// Sample data for products
const sampleProducts = [
  {
    name: "Apple MacBook Pro",
    category: "Computers",
    price: 1999.99,
    description:
      "The Apple MacBook Pro comes with an M2 chip, delivering incredible performance.",
    imageUrl: "https://example.com/images/macbook-pro.jpg",
    stock: 10,
    sellerEmail: "sellerA@example.com", // Match the seller's email
  },
  {
    name: "Samsung Galaxy S22",
    category: "Mobiles",
    price: 799.99,
    description: "Samsung Galaxy S22 with cutting-edge camera technology.",
    imageUrl: "https://example.com/images/samsung-galaxy-s22.jpg",
    stock: 20,
    sellerEmail: "sellerB@example.com", // Match the seller's email
  },
  {
    name: "Sony WH-1000XM4",
    category: "Accessories",
    price: 349.99,
    description: "Industry-leading noise-canceling wireless headphones.",
    imageUrl: "https://example.com/images/sony-wh1000xm4.jpg",
    stock: 50,
    sellerEmail: "sellerA@example.com", // Match the seller's email
  },
];

// Sample data for sellers
const sellers = [
  { name: "Seller A", email: "sellerA@example.com", phone: "123-456-7890" },
  { name: "Seller B", email: "sellerB@example.com", phone: "987-654-3210" },
];

// Seed Sellers and Products
const startSeeding = async () => {
  await connectDB();

  try {
    // Clear existing data
    await Seller.deleteMany();
    await Product.deleteMany();
    console.log("Existing sellers and products deleted");

    // Insert sellers and create a lookup for their IDs
    const insertedSellers = await Seller.insertMany(sellers);
    console.log("Sellers inserted:", insertedSellers);

    const sellerLookup = {};
    insertedSellers.forEach((seller) => {
      sellerLookup[seller.email] = seller._id;
    });

    // Update sampleProducts to reference the correct seller IDs
    const productsWithSeller = sampleProducts.map((product) => ({
      ...product,
      seller: sellerLookup[product.sellerEmail], // Replace sellerEmail with seller ID
    }));

    // Insert products
    const insertedProducts = await Product.insertMany(productsWithSeller);
    console.log("Sample products inserted:", insertedProducts);

    const products = await Product.find().populate("seller");
    console.log("Products with populated sellers:", products);

    process.exit();
  } catch (error) {
    console.error("Error during seeding:", error.message);
    process.exit(1);
  }
};

startSeeding();
