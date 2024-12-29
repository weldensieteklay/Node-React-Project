const Seller = require("../model/seller");

const insertMultipleSellers = async () => {
  try {
    const sellers = [
      { name: "Seller A", email: "sellerA@example.com", phone: "123-456-7890" },
      { name: "Seller B", email: "sellerB@example.com", phone: "987-654-3210" },
      { name: "Seller C", email: "sellerC@example.com", phone: "456-789-1230" },
    ];

    const sellerDocs = await Seller.insertMany(sellers);
    console.log("Sellers inserted:", sellerDocs);
  } catch (error) {
    console.error("Error inserting sellers:", error.message);
  }
};

insertMultipleSellers();
