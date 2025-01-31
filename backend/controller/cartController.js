const { Order, Receipt } = require("../model/Order");

const processPayment = async (req, res) => {
  try {
    const { userId, items, totalAmount, userDetails } = req.body;

    const paymentStatus = "successful";

    if (paymentStatus === "successful") {
      const newOrder = new Order({
        userId,
        items,
        totalAmount,
        userDetails,
      });

      await newOrder.save(); // Save the order to the database

      // Create the receipt
      const receipt = new Receipt({
        orderId: newOrder._id,
        userId,
        totalAmount,
        paymentStatus,
        timestamp: new Date(),
      });

      await receipt.save(); // Save the receipt to the database

      res.status(200).json({
        success: true,
        message: "Payment processed and receipt saved.",
        receipt,
      });
    } else {
      res.status(400).json({ success: false, message: "Payment failed." });
    }
  } catch (error) {
    console.error("Error processing payment:", error);
    res.status(500).json({ success: false, message: "Server error.", error });
  }
};

const getOrderByUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const orders = await Order.find(userId);
    if (orders.length === 0) {
      return res
        .status(404)
        .json({ message: "No orders found for this user." });
    }

    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch your order" });
  }
};

const getAllOrders = async (req, res) => {
  const orders = await Order.find();
  res.json(orders);
};

module.exports = {
  getOrderByUser,
  processPayment,
  getAllOrders,
};
