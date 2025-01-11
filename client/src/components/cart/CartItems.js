import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

export const CartItems = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const cartTotal = cartItems.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Cart</h1>
      <ul className="cartItems">
        {cartItems?.length > 0 &&
          cartItems.map((item) => <CartItem item={item} />)}
        {cartTotal}
      </ul>
    </div>
  );
};

export default CartItems;
