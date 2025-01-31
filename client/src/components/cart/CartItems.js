import React, { useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { Button } from "@mui/material";
import OrderForm from "./OrderForm";

export const CartItems = ({ userId }) => {
  const [checkOut, setCheckOut] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);
  const cartTotal = cartItems.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  const handleCheckout = () => {
    setCheckOut(true);
  };

  return (
    <div>
      {checkOut ? (
        <OrderForm
          userId={userId}
          cartItems={cartItems}
          cartTotal={cartTotal}
        />
      ) : (
        <>
          <h1 style={{ textAlign: "center" }}>Cart</h1>
          <ul className="cartItems">
            {cartItems?.length > 0 &&
              cartItems.map((item) => (
                <CartItem key={item.productId} item={item} />
              ))}
            <h3>Total Amount: ${cartTotal.toFixed(2)}</h3>
          </ul>
          <Button variant="contained" onClick={handleCheckout}>
            Checkout
          </Button>
        </>
      )}
    </div>
  );
};

export default CartItems;
