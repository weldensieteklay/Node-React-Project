import React from "react";
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
const Receipt = ({ receiptDetails }) => {
  const navigate = useNavigate();
  if (!receiptDetails) {
    return <p>No receipt details available.</p>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <Typography
        variant="h4"
        style={{ textAlign: "center", marginBottom: "20px" }}
      >
        Receipt
      </Typography>
      <div
        style={{
          border: "1px solid #ccc",
          padding: "15px",
          borderRadius: "8px",
        }}
      >
        <p>
          <strong>Receipt ID:</strong> {receiptDetails._id}
        </p>
        <p>
          <strong>Order ID:</strong> {receiptDetails.orderId}
        </p>
        <p>
          <strong>Total Amount:</strong> $
          {receiptDetails.totalAmount.toFixed(2)}
        </p>
        <p>
          <strong>Payment Status:</strong> {receiptDetails.paymentStatus}
        </p>
        <p>
          <strong>Timestamp:</strong>{" "}
          {new Date(receiptDetails.timestamp).toLocaleString()}
        </p>
      </div>
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/list-products")}
        >
          Back to Products
        </Button>
      </div>
    </div>
  );
};

export default Receipt;
