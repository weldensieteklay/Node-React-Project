import React, { useState } from "react";
import { Button, TextField, Grid, Typography } from "@mui/material";
import axios from "axios";
import Receipt from "./Receipt";
const OrderForm = ({ userId, cartItems, cartTotal, onBackToProducts }) => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    phone: "",
    visaCard: "",
  });

  const [items, setItems] = useState(cartItems);
  const [receiptDetails, setReceiptDetails] = useState(null);

  const handleInputChange = (identifier, value) => {
    setUserDetails((prev) => ({ ...prev, [identifier]: value }));
  };

  const handleQuantityChange = (index, quantity) => {
    const updatedItems = items.map((item, i) =>
      i === index ? { ...item, quantity: parseInt(quantity) || 0 } : item
    );
    setItems(updatedItems);
  };

  const handleSubmit = async () => {
    const orderData = {
      userId,
      items: cartItems.map((item) => ({
        productId: item._id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
      })),
      totalAmount: cartTotal,
      userDetails,
    };
    console.log(orderData, " order");
    try {
      // Send payment and save receipt
      const response = await axios.post(
        "http://localhost:5000/process-payment",
        orderData
      );

      console.log(orderData, "submit order");
      if (response.data.success) {
        setReceiptDetails(response.data.receipt);
      } else {
        alert("Payment failed. Please try again.");
      }

      console.log("Payment Response:", response.data);
    } catch (error) {
      console.error("Error processing payment", error);
      alert("Failed to process payment. Please try again.");
    }
  };

  return receiptDetails ? (
    <Receipt
      receiptDetails={receiptDetails}
      onBackToProducts={onBackToProducts}
    />
  ) : (
    <div>
      <Typography
        variant="h4"
        style={{ textAlign: "center", marginBottom: "20px" }}
      >
        Checkout
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={userDetails.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={userDetails.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Phone Number"
            name="phone"
            type="tel"
            value={userDetails.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Visa Card Number"
            name="visaCard"
            type="text"
            value={userDetails.visaCard}
            onChange={(e) => handleInputChange("visaCard", e.target.value)}
            required
          />
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h6">Order Summary</Typography>
          <ul>
            {items.map((item, index) => (
              <li key={item.productId}>
                {item.name} - ${item.price.toFixed(2)} x{" "}
                <TextField
                  type="number"
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(index, e.target.value)}
                  style={{ width: "50px" }}
                />
                = ${item.quantity * item.price}
              </li>
            ))}
          </ul>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h6">Total Amount: ${cartTotal}</Typography>
        </Grid>

        <Grid item xs={12} style={{ textAlign: "center" }}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            style={{ marginTop: "20px" }}
          >
            Pay
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderForm;
