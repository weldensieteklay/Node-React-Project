import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const OrderCart = () => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/orders`);
        setOrders(response.data);
      } catch (error) {
        console.error("Error fetching your orders:", error);
      }
    };

    fetchOrders();
  }, [orders]);

  return (
    <div style={{ padding: "20px" }}>
      <Typography
        variant="h4"
        style={{ textAlign: "center", marginBottom: "20px" }}
      >
        Orders
      </Typography>
      {orders.length > 0 ? (
        orders.map((order) => (
          <div
            key={order._id}
            style={{
              border: "1px solid #ccc",
              padding: "15px",
              borderRadius: "8px",
              marginBottom: "20px",
            }}
          >
            <p>
              <strong>Order ID:</strong> {order._id}
            </p>
            <p>
              <strong>Total Amount:</strong> ${order.totalAmount.toFixed(2)}
            </p>
            <h4>Items:</h4>
            <ul>
              {order.items.map((item) => (
                <li key={item._id}>
                  <strong>{item.name}</strong> - {item.quantity} x $
                  {item.price.toFixed(2)} = $
                  {(item.quantity * item.price).toFixed(2)}
                </li>
              ))}
            </ul>
            <p>
              <strong>Payment Status:</strong>{" "}
              {order.paymentStatus || "Pending"}
            </p>
            <p>
              <strong>Timestamp:</strong>{" "}
              {new Date(order.createdAt).toLocaleString()}
            </p>
          </div>
        ))
      ) : (
        <p style={{ textAlign: "center" }}>No orders found.</p>
      )}
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

export default OrderCart;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Button, Typography } from "@mui/material";
// // import { useNavigate } from "react-router-dom";

// const OrderCart = ({ order }) => {
//   return (
//     <div style={{ padding: "20px" }}>
//       <Typography
//         variant="h4"
//         style={{ textAlign: "center", marginBottom: "20px" }}
//       ></Typography>
//       <div
//         key={order._id}
//         style={{
//           border: "1px solid #ccc",
//           padding: "15px",
//           borderRadius: "8px",
//           marginBottom: "20px",
//         }}
//       >
//         <p>
//           <strong>Order ID:</strong> {order._id}
//         </p>
//         <p>
//           <strong>Total Amount:</strong> ${order.totalAmount.toFixed(2)}
//         </p>
//         <h4>Items:</h4>
//         <ul>
//           {order.items.map((item) => (
//             <li key={item._id}>
//               <strong>{item.name}</strong> - {item.quantity} x $
//               {item.price.toFixed(2)} = $
//               {(item.quantity * item.price).toFixed(2)}
//             </li>
//           ))}
//         </ul>
//         <p>
//           <strong>Payment Status:</strong> {order.paymentStatus || "Pending"}
//         </p>
//         <p>
//           <strong>Timestamp:</strong>{" "}
//           {new Date(order.createdAt).toLocaleString()}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default OrderCart;
